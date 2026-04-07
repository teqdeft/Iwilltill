"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const AUTO_ROTATE_INTERVAL_MS = 2000; // ← change timing here (milliseconds)
// ──────────────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    initials: "SJ",
    name: "Sarah J.",
    stars: 5,
    quote:
      "I was feeling overwhelmed and needed someone to talk to. iWILL 'til i'mWELL connected me with a counselor in under 10 minutes. They listened, understood, and gave me real strategies to manage my stress. I'm so grateful for the support.",
  },
  {
    initials: "MK",
    name: "Michael K.",
    stars: 5,
    quote:
      "The platform made it incredibly easy to find the right therapist for my anxiety. Within two sessions I already had actionable tools to calm my mind. This service is truly life-changing and I recommend it to everyone.",
  },
  {
    initials: "PR",
    name: "Priya R.",
    stars: 5,
    quote:
      "As someone who was skeptical about online therapy, I was blown away by how personal and effective it felt. My counselor was warm, professional, and truly understood my situation. I finally feel like I have a safe space to grow.",
  },
  {
    initials: "TL",
    name: "Tom L.",
    stars: 5,
    quote:
      "After struggling with burnout for months, I decided to give iWILL 'til i'mWELL a try. Best decision I ever made. The matching process was seamless and my therapist has helped me rebuild healthy work-life boundaries.",
  },
  {
    initials: "AN",
    name: "Aisha N.",
    stars: 5,
    quote:
      "I love how accessible and judgment-free this platform is. Getting support used to feel daunting, but here it feels completely natural. My counselor checks in regularly and the progress I've made in just 6 weeks is remarkable.",
  },
  {
    initials: "CW",
    name: "Claire W.",
    stars: 4,
    quote:
      "A wonderful resource for anyone going through a tough time. The video sessions are smooth, the counselors are highly qualified, and the whole experience feels human rather than clinical. Highly recommended.",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right"); // "right" | "left"
  const [displayed, setDisplayed] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  const goTo = (next, dir) => {
    if (animating || next === current) return;
    setDirection(dir);
    setAnimating(true);

    // after slide-out (300ms), swap content and slide in
    timeoutRef.current = setTimeout(() => {
      setDisplayed(next);
      setCurrent(next);
      setAnimating(false);
    }, 300);
  };

  const next = () => goTo((current + 1) % testimonials.length, "right");
  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length, "left");

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTO_ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, current, animating]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const t = testimonials[displayed];

  // Slide-out: current exits opposite to direction
  // Slide-in: new enters from the direction side
  const slideOutClass =
    animating
      ? direction === "right"
        ? "-translate-x-8 opacity-0"
        : "translate-x-8 opacity-0"
      : "translate-x-0 opacity-100";

  return (
    <SectionWrapper gray className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="w-10 h-10 text-[#604376] mx-auto mb-4 animate-pulse" />

          {/* Animated card */}
          <div
            className={`transition-all duration-300 ease-in-out ${slideOutClass}`}
          >
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic min-h-[120px]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center text-primary font-bold text-sm">
                {t.initials}
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          {/* <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="p-2 rounded-full border border-gray-200 hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-500" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? "right" : "left")}
                  aria-label={`Go to review ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-5 h-2 bg-primary"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next review"
              className="p-2 rounded-full border border-gray-200 hover:bg-white transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>
          </div> */}
        </div>
      </div>
    </SectionWrapper>
  );
}