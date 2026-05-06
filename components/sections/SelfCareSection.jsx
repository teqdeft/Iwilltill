"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Stethoscope, Brain, PawPrint, HeartPulse } from "lucide-react";

const highlights = [
  { icon: Stethoscope, label: "Medical Care", color: "primary" },
  { icon: Brain, label: "Mental Health", color: "accent" },
  { icon: PawPrint, label: "TeleVet Pet Care", color: "primary" },
  { icon: HeartPulse, label: "Wellness", color: "accent" },
];

const tags = [
  "24/7/365 Access",
  "Licensed Physicians",
  "Mental Health Specialists",
  "Licensed Veterinarians",
  "English & Spanish",
  "Affordable Plans",
  "No Waiting Rooms",
  "Care Coordinators",
  "Prescription Plans",
  "Virtual & Secure",
];

export default function SelfCareSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={cn(
            "absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-3xl transition-all duration-[2000ms]",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50",
          )}
        />
        <div
          className={cn(
            "absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-3xl transition-all duration-[2000ms] delay-300",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50",
          )}
        />
      </div>

      <div className="container-main max-w-5xl relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <div
            className={cn(
              "transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6",
            )}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-5">
              Self-Care is the New
              <br />
              <span className="text-primary font-script text-5xl md:text-6xl lg:text-[64px]">
                Mental Healthcare!
              </span>
            </h2>
          </div>

          <p
            className={cn(
              "text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto transition-all duration-700 ease-out delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6",
            )}
          >
            We empower you to take control of your mental health by providing
            accessible, affordable, and compassionate care for your mind
            and soul — on your terms, on your time.
          </p>
        </div>

     

        {/* Animated divider */}
        <div className="flex items-center gap-4 mb-16">
          <div
            className={cn(
              "flex-1 h-px bg-gradient-to-r from-transparent to-primary/20 transition-all duration-1000 origin-right",
              isVisible ? "scale-x-100" : "scale-x-0",
            )}
            style={{ transitionDelay: "700ms" }}
          />
          <div
            className={cn(
              "w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center transition-all duration-500",
              isVisible
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-50 rotate-180",
            )}
            style={{ transitionDelay: "900ms" }}
          >
            <img
              src="/images/logo-favi.svg"
              alt=""
              className="w-5 h-5 object-contain"
            />
          </div>
          <div
            className={cn(
              "flex-1 h-px bg-gradient-to-l from-transparent to-primary/20 transition-all duration-1000 origin-left",
              isVisible ? "scale-x-100" : "scale-x-0",
            )}
            style={{ transitionDelay: "700ms" }}
          />
        </div>

        {/* Tags with staggered reveal */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-full border border-gray-200 text-base text-gray-700 font-medium hover:border-primary/40 hover:bg-white hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300",
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95",
              )}
              style={{
                transitionDelay: isVisible ? `${1000 + i * 60}ms` : "0ms",
              }}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full shrink-0",
                  i % 2 === 0 ? "bg-primary" : "bg-accent",
                )}
              />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
