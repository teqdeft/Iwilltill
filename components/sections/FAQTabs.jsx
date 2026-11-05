"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqCategories } from "./faqData";

function ListItem({ item }) {
  if (typeof item === "string") return <>{item}</>;
  return (
    <>
      <span className="font-semibold text-gray-900">{item.b}</span>{" "}
      {item.t}
    </>
  );
}

function AnswerBlocks({ blocks }) {
  return (
    <div className="space-y-3">
      {blocks.map((block, i) => {
        if (block.type === "p") {
          if (!block.lead && !block.text) return null;
          return (
            <p key={i} className="text-base text-gray-700 leading-relaxed">
              {block.lead && (
                <span className="font-bold text-gray-900">{block.lead}</span>
              )}
              {block.lead && block.text ? " " : ""}
              {block.text}
            </p>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc pl-5 space-y-1.5">
              {block.items.map((item, j) => (
                <li key={j} className="text-base text-gray-700 leading-relaxed">
                  <ListItem item={item} />
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "ol") {
          return (
            <ol key={i} className="list-decimal pl-5 space-y-1.5">
              {block.items.map((item, j) => (
                <li key={j} className="text-base text-gray-700 leading-relaxed">
                  <ListItem item={item} />
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "table") {
          return (
            <div key={i} className="space-y-3">
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      {block.headers.map((h, k) => (
                        <th key={k} className="px-4 py-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr
                        key={r}
                        className={cn(
                          "border-t border-gray-200",
                          r % 2 === 1 ? "bg-gray-50" : "bg-white",
                        )}
                      >
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={cn(
                              "px-4 py-2.5 align-top",
                              c === 0
                                ? "text-gray-800 font-medium"
                                : "text-gray-700",
                            )}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {block.notes && (
                <div className="space-y-1.5">
                  {block.notes.map((note, n) => (
                    <p
                      key={n}
                      className="text-xs text-gray-500 leading-relaxed"
                    >
                      {note}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

export default function FAQTabs() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [openQuestion, setOpenQuestion] = useState(0);

  const currentCategory =
    faqCategories.find((c) => c.id === activeCategory) || faqCategories[0];

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    setOpenQuestion(0);
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? -1 : index);
  };

  return (
    <section className="section-padding py-16 md:py-20 bg-white">
      <div className="container-main max-w-6xl">
        <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-10">
          {/* Left Sidebar - Service Categories */}
          <aside>
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:space-y-2 lg:sticky lg:top-24">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(category.id)}
                  className={cn(
                    "shrink-0 lg:w-full text-center lg:text-left px-4 py-3 rounded-xl text-[11px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 leading-tight",
                    activeCategory === category.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white border border-primary/20 text-primary hover:border-primary/40 hover:bg-primary/5",
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Right - Questions */}
          <div>
            <div className="space-y-3">
              {currentCategory.questions.map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    "border rounded-xl overflow-hidden transition-all duration-300",
                    openQuestion === i
                      ? "border-primary/30 bg-gray-50 shadow-sm"
                      : "border-gray-200 bg-white hover:border-primary/20",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleQuestion(i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={openQuestion === i}
                  >
                    <span className="text-base md:text-base font-bold text-gray-900 leading-snug">
                      {item.q}
                    </span>
                    <div
                      className={cn(
                        "w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                        openQuestion === i
                          ? "border-primary bg-primary text-white"
                          : "border-primary/30 text-primary",
                      )}
                    >
                      {openQuestion === i ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  {openQuestion === i && (
                    <div className="px-5 pb-5 pt-1">
                      <AnswerBlocks blocks={item.blocks} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
