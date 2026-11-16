"""Build the /wellness/search-medication index from the plan formulary PDFs.

Re-run this whenever public/pdf/{silver,gold,platinum}-prescriptions.pdf change.

The PDFs draw each table as an image. Their text layers are incomplete and on
several pages don't line up with the visible rows, so:
  1. `render`   crops the medication-name column of every table half to PNG;
  2. ocr.ps1    OCRs those PNGs with the Windows OCR engine (row boundaries);
  3. `assemble` turns OCR rows into names, fixes digit/letter OCR mix-ups and,
                where the page has a text layer, matches each name to the exact
                characters found there.

Needs Python 3 with PyMuPDF (pip install pymupdf) and Windows 10/11 for step 2.
From the repo root, with <work> a scratch folder outside the repo:
  python -I scripts/medication-index/build_index.py render public/pdf <work>
  powershell -ExecutionPolicy Bypass -File scripts/medication-index/ocr.ps1 -Dir <work>
  python -I scripts/medication-index/build_index.py assemble public/pdf <work> app/wellness/search-medication/medications.json
Then read <work>/gaps.json: any medication name listed there was missed or misread.
Pages without a text layer (platinum pp. 6 and 13 today) can't be checked that way;
compare them with the PDF by eye and add fixes to IMAGE_ONLY_FIXES.
"""
import collections
import difflib
import json
import os
import re
import sys

import fitz

PLANS = ["silver", "gold", "platinum"]  # public/pdf/<plan>-prescriptions.pdf
MID = 306
DPI = 300
QTY_HEADS = ("Max", "Retail")


def table_geometry(page):
    """Header row y and, per half, the x where the quantity column starts."""
    ws = page.get_text("words")
    brands = [w for w in ws if w[4] == "Brand"]
    if not brands:
        return None
    head_y = min(w[1] for w in brands)
    halves = []
    for half in (0, 1):
        heads = [w for w in ws if w[4] in QTY_HEADS and abs(w[1] - head_y) < 8 and (w[0] < MID) == (half == 0)]
        if heads:
            halves.append((half, min(w[0] for w in heads) - 6))
    return head_y, halves


def render(pdf_dir, work):
    os.makedirs(work, exist_ok=True)
    meta = {}
    for plan in PLANS:
        doc = fitz.open(f"{pdf_dir}/{plan}-prescriptions.pdf")
        for i, page in enumerate(doc):
            geo = table_geometry(page)
            if not geo:
                continue
            head_y, halves = geo
            for half, qty_left in halves:
                left = 10 if half == 0 else MID - 12
                clip = fitz.Rect(left, head_y - 3, qty_left + 30, page.rect.height - 22)
                name = f"{plan}-p{i + 1:02d}-h{half}"
                page.get_pixmap(dpi=DPI, clip=clip).save(f"{work}/{name}.png")
                meta[name] = {"plan": plan, "page": i + 1, "half": half, "clip": list(clip), "qty_left": qty_left}
    with open(f"{work}/meta.json", "w") as f:
        json.dump(meta, f, indent=1)
    print(len(meta), "crops")


SKIP = re.compile(r"(^(Brand|Dosage|Max Retail|Retail|Qty|HD|Member|Cost)\b|Click here|iWILL|i.?mWELL|HEALTHCARE|^\d+ ?(/|of) ?\d+$)", re.I)

# Platinum pp. 6 and 13 have no text layer to check OCR against. These are the OCR
# slips found when every row on those pages was compared with the page image.
IMAGE_ONLY_FIXES = [
    (r"\bVEN LAFAXINE\b", "VENLAFAXINE"),
    (r"\bVENLAFAXINE HCL TABLETS 375 MG\b", "VENLAFAXINE HCL TABLETS 37.5 MG"),
    (r"\bCAPSU LE\b", "CAPSULE"),
    (r"\bPE/IO\b", "PE/10"),
]
NUM_TOKEN = re.compile(r"^[\dIOSl.,()%]+$")
FORMS = r"(Tablets?|Capsules?|Caps|Tabs|Cream|Ointment|Solution|Syrup)"


def fix_ocr(text):
    """Undo common OCR swaps in strengths, e.g. 'IO MG' -> '10 MG', 'MG-I MG' -> 'MG-1 MG'."""
    swap = str.maketrans({"I": "1", "l": "1", "O": "0", "S": "5"})
    toks = text.split()
    out = []
    for j, tok in enumerate(toks):
        nxt = toks[j + 1] if j + 1 < len(toks) else ""
        unit_next = re.match(r"^(MG|MC|MCG|ML|G|UNIT|MEQ|%)", nxt, re.I) is not None
        parts = re.split(r"([-/])", tok)
        for k, p in enumerate(parts):
            if p and p not in "-/" and NUM_TOKEN.match(p):
                if re.search(r"\d", p) or (unit_next and len(p) <= 3):
                    parts[k] = p.translate(swap)
        out.append("".join(parts))
    text = " ".join(out)
    text = re.sub(r"\bDRIEC\b", "DR/EC", text)
    text = re.sub(r"\bM[CO](?=[-/ ]|$)", "MG", text)  # 'MC' / 'MO-' read for 'MG'
    text = re.sub(r"\bVIC\b", "MG", text)  # 'VIC' read for 'MG'
    text = re.sub(r"\bHC[Il]J", "HCL/", text)  # 'HCIJ' read for 'HCL/'
    text = re.sub(r"(\d)0/0", r"\1%", text)  # '20/0' read for '2%'
    text = re.sub(r"(\d) %", r"\1%", text)
    return text


def reflow_forms(rows):
    """Undo two layout slips in the gold PDF:
    p.3 prints each dosage form at the start of the next row
    ('Cyclobenzaprine HCL 10 MG' / 'Tablet Gabapentin 100 MG'), and p.2 pushes a
    drug name onto the end of the previous row
    ('Glyburide Micronized 1.5 MG Tablet Glyburide' / 'Micronized 3 MG Tablet')."""
    out = []
    for text in rows:
        m = re.match(FORMS + r"\b\s*(.*)$", text)
        if m and out and not re.fullmatch(FORMS, out[-1].split()[-1]):
            out[-1] += " " + m.group(1)
            text = m.group(2)
        if out:
            t = re.match(r"^(.*\b" + FORMS + r") ([A-Z][a-z]{3,})$", out[-1])
            if t and text and not text.startswith(t.group(3)):
                out[-1] = t.group(1)
                text = t.group(3) + " " + text
        if text:
            out.append(text)
    return out


class Snapper:
    """Snap OCR text to the exact characters of the page's text layer."""

    def __init__(self, page):
        words = [w[4] for w in sorted(page.get_text("words"), key=lambda w: (w[5], w[6], w[7]))]
        self.text = " ".join(words)
        self.pos = [i for i, ch in enumerate(self.text) if ch != " "]
        self.ns = "".join(self.text[i] for i in self.pos).upper()

    def word_start(self, s):
        a = self.pos[s]
        return a == 0 or not self.text[a - 1].isalpha()

    def word_end(self, e):
        b = self.pos[e - 1] + 1
        return b >= len(self.text) or not self.text[b].isalpha()

    def window(self, s, e):
        """Original text for no-space range [s, e), widened to whole words."""
        t = self.text
        a, b = self.pos[s], self.pos[e - 1] + 1
        while a > 0 and t[a - 1].isalpha() and t[a].isalpha():
            a -= 1
        while b < len(t) and t[b].isalpha() and t[b - 1].isalpha():
            b += 1
        return re.sub(r"(\d)- (?=[A-Za-z])", lambda m: m.group(1) + "-", t[a:b])

    def exact(self, text):
        key = text.replace(" ", "").upper()
        if not self.ns:
            return None, "no-text-layer"
        if len(key) < 6:
            return None, "short"
        at = first = self.ns.find(key)
        while at != -1:  # prefer a whole-word hit ('METHYLPHENIDATE', not inside 'DEXMETHYLPHENIDATE')
            if self.word_start(at) and self.word_end(at + len(key)):
                return self.window(at, at + len(key)), "exact"
            at = self.ns.find(key, at + 1)
        if first != -1:
            return self.window(first, first + len(key)), "exact"
        return None, "unmatched"

    def fuzzy(self, text):
        key = text.replace(" ", "").upper()
        best, best_r = None, 0.0
        n = len(key)
        sm = difflib.SequenceMatcher(autojunk=False)
        sm.set_seq2(key)
        for a in {key[:4], key[-4:]}:
            start = self.ns.find(a)
            while start != -1:
                base = start if a == key[:4] else start - (n - 4)
                for dn in (-3, -2, -1, 0, 1, 2, 3):
                    s, e = base, base + n + dn
                    if s < 0 or e > len(self.ns) or e <= s:
                        continue
                    sm.set_seq1(self.ns[s:e])
                    r = sm.ratio() * (1 if self.word_start(s) else 0.97)
                    if r > best_r:
                        best, best_r = (s, e), r
                start = self.ns.find(a, start + 1)
        if best and best_r >= 0.9:
            return self.window(*best), f"snapped {best_r:.2f}"
        return text, f"unmatched {best_r:.2f}"


    def words_with_coverage(self, names):
        """[[word, covered]] for the text layer, where covered = some name contains it."""
        covered = [False] * len(self.ns)
        for name in names:
            key = re.sub(r"\s+", "", name.upper()).replace("–", "�")
            at = self.ns.find(key) if key else -1
            while at != -1:
                covered[at:at + len(key)] = [True] * len(key)
                at = self.ns.find(key, at + 1)
        out, k = [], 0
        for w in self.text.split(" "):
            out.append([w, any(covered[k:k + len(w)])])
            k += len(w)
        return out


def tok_sim(a, b):
    a, b = a.upper(), b.upper()
    if a == b:
        return True
    if min(len(a), len(b)) >= 3 and (a.startswith(b) or b.startswith(a)):
        return True
    return difflib.SequenceMatcher(None, a, b).ratio() >= 0.75


def fill_from_gap(ocr, words):
    """Find OCR tokens, in order, among text-layer words no name covers yet."""
    toks = ocr.split()
    if len(toks) < 2:
        return None
    for i, (w, cov) in enumerate(words):
        if cov or not tok_sim(toks[0], w):
            continue
        last, matched = i, 1
        for t in toks[1:]:
            for k in range(last + 1, min(last + 5, len(words))):
                if words[k][1]:
                    break
                if tok_sim(t, words[k][0]):
                    last, matched = k, matched + 1
                    break
        if last == i or not tok_sim(toks[-1], words[last][0]):
            continue
        if matched < max(2, round(len(toks) * 0.6)):
            continue
        span = " ".join(w for w, _ in words[i:last + 1])
        if not re.search(r"\d", toks[-1]):
            span = re.sub(r"(?<=[A-Za-z)])\d+$", "", span)  # quantity glued to the last word
        for k in range(i, last + 1):
            words[k][1] = True
        return re.sub(r"(\d)- (?=[A-Za-z])", lambda m: m.group(1) + "-", span)
    return None


def read_tsv(path, meta):
    clip = meta["clip"]
    scale = 72 / DPI
    raw = []
    with open(path, encoding="utf-8-sig") as f:
        for row in f:
            x, y, w, h, li, t = row.rstrip("\n").split("\t")
            raw.append((clip[0] + int(x) * scale, int(w) * scale, clip[1] + (int(y) + int(h) / 2) * scale,
                        int(h) * scale, int(li), t))
    # Quantities are left-aligned in their column, so their x positions cluster. Silver's
    # quantity column starts a few points left of where its header suggests.
    qty_left = meta["qty_left"]
    xs = collections.Counter(round(r[0]) for r in raw if clip[0] + 150 < r[0] < qty_left + 30)
    near = {x: sum(c for x2, c in xs.items() if abs(x2 - x) <= 1) for x in xs}
    if near:
        x_mode = max(near, key=near.get)
        if near[x_mode] >= 5 and x_mode - 1.5 < qty_left:
            qty_left = x_mode - 1.5
    lines = collections.OrderedDict()
    for x0, w, yc, h, li, t in raw:
        if x0 >= qty_left:
            continue  # quantity column
        if meta["half"] == 1 and x0 + w < MID - 2:
            continue  # bleed from the left table's last column ('MAIL ONLY')
        lines.setdefault(li, []).append((x0, yc, h, t))
    rows = []
    for ws in lines.values():
        yc = sum(w[1] for w in ws) / len(ws)
        h = max(w[2] for w in ws)
        same = [r for r in rows if abs(r["yc"] - yc) < max(h, r["h"]) * 0.5]
        if same:  # OCR split one widely spaced row into several lines
            same[0]["words"] += ws
            continue
        rows.append({"yc": yc, "h": h, "words": ws})
    rows.sort(key=lambda r: r["yc"])
    for r in rows:
        r["words"].sort()
        r["x0"] = r["words"][0][0]
        r["text"] = " ".join(w[3] for w in r["words"]).strip(" |")
    return rows


def assemble(pdf_dir, work, out_json):
    meta = json.load(open(f"{work}/meta.json"))
    docs = {p: fitz.open(f"{pdf_dir}/{p}-prescriptions.pdf") for p in PLANS}
    found = collections.defaultdict(list)  # plan -> [(crop, text)]
    log = []
    for crop in sorted(meta):
        m = meta[crop]
        plan = m["plan"]
        rows = read_tsv(f"{work}/{crop}.tsv", m)
        left = min((r["x0"] for r in rows), default=0)
        kept = []
        for r in rows:
            text = r["text"]
            if not text or SKIP.search(text):
                continue
            if plan == "platinum" and re.search(r"MEDICATIONS$", text):
                continue
            if plan != "platinum" and not re.search(r"[a-z]", text.split()[0]):
                continue  # silver/gold section headings are all caps; names are title case
            if r["x0"] > left + 25:
                log.append((crop, "centred", text))
                continue
            kept.append(text)
        for text in reflow_forms(kept):
            if len(text.replace(" ", "")) < 6:
                log.append((crop, "fragment", text))
                continue
            found[plan].append((crop, text))

    # Pass 1: OCR text found verbatim in the page's text layer.
    snappers = {}
    entries = []  # [plan, page, crop, ocr_text, final, how]
    for plan in PLANS:
        for crop, text in found[plan]:
            page_no = meta[crop]["page"]
            if (plan, page_no) not in snappers:
                snappers[(plan, page_no)] = Snapper(docs[plan][page_no - 1])
            fixed = fix_ocr(text)
            final, how = snappers[(plan, page_no)].exact(fixed)
            entries.append([plan, page_no, crop, text, final or fixed, how])

    # Pass 2: OCR sometimes drops small tokens ('RAMIPRIL MG CAPSULE' for 'RAMIPRIL 2.5 MG
    # CAPSULE'). Fill those from text-layer words that no exact match has used yet.
    # Pass 3: anything left gets a character-level fuzzy match against the whole page.
    for (plan, page_no), sn in snappers.items():
        if not sn.ns:
            continue
        mine = [e for e in entries if e[0] == plan and e[1] == page_no]
        words = sn.words_with_coverage([e[4] for e in mine if e[5] == "exact"])
        for e in mine:
            if e[5] == "unmatched":
                filled = fill_from_gap(e[4], words)
                if filled:
                    e[4], e[5] = filled, "gap-filled"
        for e in mine:
            if e[5] == "unmatched":
                final, how = sn.fuzzy(e[4])
                e[4], e[5] = final, how
    for e in entries:
        if e[5].startswith("unmatched"):
            for pattern, repl in IMAGE_ONLY_FIXES:
                e[4] = re.sub(pattern, repl, e[4])
        e[4] = re.sub(r"\s*[�—]\s*", " – ", e[4])  # PDF's broken en dash / OCR em dash
        e[4] = e[4].replace("&AMP;", "&")
        e[4] = re.sub(r"\s+", " ", e[4]).strip()

    rows_out = []
    for plan in PLANS:
        names = []
        for e in entries:
            if e[0] == plan:
                log.append((e[2], e[5], e[3], e[4]))
                names.append(e[4])
        keys = {re.sub(r"\s+", "", n.upper()) for n in names}
        seen = set()
        for n in names:
            key = re.sub(r"\s+", "", n.upper())
            if key in seen:
                continue
            # 'Prednisone 10 MG' printed with its form wrapped onto the next row
            if any(k != key and k.startswith(key) and re.fullmatch(FORMS.upper(), k[len(key):]) for k in keys):
                log.append(("-", "dropped-prefix", n, ""))
                continue
            seen.add(key)
            rows_out.append({"name": n, "plan": plan})

    # Coverage report: text-layer words that no final name accounts for. On a page with a
    # text layer, a medication name showing up here was missed or misread.
    gaps = []
    for (plan, page_no), sn in sorted(snappers.items()):
        if sn.ns:
            words = sn.words_with_coverage([r["name"] for r in rows_out if r["plan"] == plan])
            text = " ".join(w for w, covered in words if not covered)
            if re.search(r"[A-Za-z]{3}", text):
                gaps.append((plan, page_no, text))
    with open(f"{work}/gaps.json", "w", encoding="utf-8") as f:
        json.dump(gaps, f, ensure_ascii=False, indent=0)
    with open(f"{work}/log.json", "w", encoding="utf-8") as f:
        json.dump(log, f, ensure_ascii=False, indent=0)
    with open(out_json, "w", encoding="utf-8", newline="\n") as f:
        f.write("[\n" + ",\n".join(json.dumps(r, ensure_ascii=False) for r in rows_out) + "\n]\n")
    print(dict(collections.Counter(r["plan"] for r in rows_out)),
          dict(collections.Counter(entry[1].split()[0] for entry in log)))
    print(f"review {work}/gaps.json (missed names) and {work}/log.json (how each name was matched)")


if __name__ == "__main__":
    if sys.argv[1] == "render":
        render(sys.argv[2], sys.argv[3])
    else:
        assemble(sys.argv[2], sys.argv[3], sys.argv[4])
