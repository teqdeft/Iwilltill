"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import {
  Search,
  X,
  Pill,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

// The medication list is built from the plan formularies in public/pdf by
// scripts/medication-index/build_index.py, so search needs no backend.
// Per-refill cost: $0 co-pay (Silver, Platinum), $5.00 co-pay (Gold).
const PLAN_INFO = {
  silver: { label: "Silver Prescription Plan", refill: "$0.00" },
  gold: { label: "Gold Prescription Plan", refill: "$5.00" },
  platinum: { label: "Platinum Prescription Plan", refill: "$0.00" },
};
const PLAN_ORDER = ["silver", "gold", "platinum"];
const MAX_RESULTS = 200;

const plans = [
  { name: "Silver\nPrescription Plan", price: "$10" },
  { name: "Gold\nPrescription Plan", price: "$15" },
  { name: "Platinum\nPrescription Plan", price: "$20" },
];

const normalize = (text) => text.toLowerCase().replace(/\s+/g, " ").trim();

// Loaded on first use as its own chunk, so it doesn't weigh down the page bundle.
let indexPromise = null;
function loadIndex() {
  if (!indexPromise) {
    indexPromise = import("./medications.json")
      .then((mod) =>
        mod.default.map((med) => ({ ...med, key: normalize(med.name) })),
      )
      .catch((err) => {
        indexPromise = null; // allow a retry
        throw err;
      });
  }
  return indexPromise;
}

// Every typed word must appear in the name. Names that start with the query come
// first, then names with a word starting with it; the same drug's plans stay together.
function searchIndex(index, query) {
  const q = normalize(query);
  const terms = q.split(" ");
  const rank = (key) => {
    if (key.startsWith(q)) return 0;
    return key.split(/[\s/,(-]+/).some((word) => word.startsWith(terms[0]))
      ? 1
      : 2;
  };
  return index
    .filter((med) => terms.every((term) => med.key.includes(term)))
    .map((med) => ({ med, rank: rank(med.key) }))
    .sort(
      (a, b) =>
        a.rank - b.rank ||
        a.med.key.localeCompare(b.med.key, undefined, { numeric: true }) ||
        PLAN_ORDER.indexOf(a.med.plan) - PLAN_ORDER.indexOf(b.med.plan),
    )
    .map(({ med }) => med);
}

export default function SearchMedicationPage() {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(null);
  const [error, setError] = useState(false);

  const load = useCallback(() => {
    setError(false);
    loadIndex().then(setIndex, (err) => {
      console.error("Could not load the medication list:", err);
      setError(true);
    });
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const term = query.trim();
  const hasSearched = term.length >= 2;
  const loading = hasSearched && !index && !error;
  const results = useMemo(
    () => (hasSearched && index ? searchIndex(index, term) : []),
    [hasSearched, index, term],
  );

  return (
    <>
      <Navbar />
      <main>
        <section
          className="relative overflow-hidden py-14 md:py-20"
          style={{
            background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
          }}
        >
          <Link
            href="/"
            className="absolute top-6 left-6 z-[4] inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-medium hover:bg-white/25 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <div className="relative container-main section-padding text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Search Medication
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Find your medication and discover which prescription plan covers
              it.
            </p>
          </div>
        </section>

        <section className="section-padding py-12 md:py-16 bg-gray-50 min-h-[60vh]">
          <div className="container-main max-w-5xl">
            <div
              className="rounded-2xl overflow-hidden mb-8 grid grid-cols-1 md:grid-cols-3"
              style={{
                background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
              }}
            >
              {plans.map((plan, i) => (
                <div
                  key={plan.price}
                  className={`flex items-center gap-4 px-6 py-5 ${i < 2 ? "md:border-r md:border-white/20 border-b md:border-b-0 border-white/20" : ""}`}
                >
                  <p className="text-white font-semibold text-sm md:text-lg leading-tight whitespace-pre-line flex-1">
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-white text-2xl md:text-3xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-white/70 text-[10px] uppercase font-semibold leading-tight">
                      Per
                      <br />
                      Month
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type medication name to search..."
                aria-label="Search medications"
                className="w-full pl-12 pr-12 py-4 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white shadow-sm"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              )}
            </div>

            {loading && (
              <div className="text-center py-12">
                <div className="inline-block w-8 h-8 border-[3px] border-primary/30 border-t-primary rounded-full animate-spin" />
                <p className="text-gray-500 text-sm mt-3">Searching...</p>
              </div>
            )}

            {hasSearched && error && (
              <div
                role="alert"
                className="text-center py-12 bg-white rounded-2xl border border-gray-100"
              >
                <AlertCircle className="w-10 h-10 text-red-300 mx-auto mb-3" />
                <p className="text-gray-700 font-medium">
                  We couldn&apos;t load the medication list right now.
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Please check your connection and try again.
                </p>
                <button
                  type="button"
                  onClick={load}
                  className="mt-4 inline-flex items-center px-4 py-2 rounded-full border border-primary/40 text-primary text-sm font-semibold hover:bg-primary/5 transition-colors"
                >
                  Try again
                </button>
              </div>
            )}

            {hasSearched && index && results.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
                <Pill className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">
                  No medications found
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Check the spelling or try just the first few letters.
                </p>
              </div>
            )}

            {results.length > MAX_RESULTS && (
              <p className="text-gray-500 text-sm mb-3">
                Showing the first {MAX_RESULTS} of {results.length} matches.
                Keep typing to narrow the list.
              </p>
            )}

            {results.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-12 bg-[#604376] text-white text-xs md:text-sm font-semibold uppercase tracking-wider">
                  <div className="col-span-6 px-5 py-3.5">Medication Name</div>
                  <div className="col-span-4 px-5 py-3.5">Available In</div>
                  <div className="col-span-2 px-5 py-3.5 text-center">
                    Per Refill
                  </div>
                </div>
                <div className="max-h-[480px] overflow-y-auto">
                  {results.slice(0, MAX_RESULTS).map((med, i) => (
                    <div
                      key={`${med.plan}:${med.name}`}
                      className={`grid grid-cols-12 text-sm border-b border-gray-100 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                    >
                      <div className="col-span-6 px-5 py-3.5 text-gray-800">
                        {med.name}
                      </div>
                      <div className="col-span-4 px-5 py-3.5 text-gray-600">
                        {PLAN_INFO[med.plan].label}
                      </div>
                      <div className="col-span-2 px-5 py-3.5 text-center text-gray-800 font-semibold">
                        {PLAN_INFO[med.plan].refill}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!hasSearched && (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
                <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">
                  Enter at least 2 characters to search
                </p>
              </div>
            )}
          </div>
        </section>

        <section
          className="relative overflow-hidden section-padding py-16 md:py-24"
          style={{
            background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
          }}
        >
          <div className="relative container-main text-center text-white max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Start Saving on Prescriptions
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Choose the prescription plan that fits your needs and start saving
              today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="accent"
                size="lg"
                href="https://app.iwilltilimwell.com/register"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="white" size="lg" href="/pricing">
                View Pricing <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
