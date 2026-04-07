"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { Users, Building2, ArrowRight, Heart, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "individual", label: "Individual / Family", icon: Users },
  { id: "employers", label: "Employers", icon: Building2 },
];

const content = {
  individual: {
    heading: "Care built for everyday life and workplace well-being",
    description:
      "Whether you're looking to get care for yourself, a family member, or someone you know, iWILL 'til i'mWELL makes it simple to get connected and start healing.",
    features: [
      "On-demand video or phone visits",
      "Licensed therapists & physicians",
      "Affordable plans starting at $0/month",
      "Available evenings & weekends",
    ],
    cta: "Get Started",
    ctaLink: "/get-started",
  },
  employers: {
    heading: "Empower your team with accessible wellness benefits",
    description:
      "Offer your employees comprehensive healthcare coverage that goes beyond the basics. Reduce absenteeism, boost productivity, and show your team you care.",
    features: [
      "Custom plans for any team size",
      "EAP integration available",
      "Usage dashboards & analytics",
      "Dedicated account management",
    ],
    cta: "Talk to Sales",
    ctaLink: "/employers",
  },
};

export default function UseCases() {
  const [active, setActive] = useState("individual");
  const data = content[active];

  return (
    <section className="relative overflow-hidden mt-16" >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative section-padding">
        <div className="container-main">
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(135deg, #6d578e 0%, #6d578e 100%)" }}>
            <div className="grid lg:grid-cols-2">
              {/* Left Content */}
              <div className="p-8 md:p-12 lg:p-16 text-white z-10">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  {data.heading.split("well-being")[0]}
                  <span className="text-accent font-script text-4xl">
                    well-being
                  </span>
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  {data.description}
                </p>

                {/* Tabs */}
                <div className="flex gap-2 mb-8">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActive(tab.id)}
                        className={cn(
                          "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300",
                          active === tab.id
                            ? "bg-accent text-white shadow-lg shadow-accent/30"
                            : "bg-white/10 text-white/80 hover:bg-white/15"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                <ul className="space-y-3 mb-8">
                  {data.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="accent" size="lg" href={data.ctaLink}>
                  {data.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Right Image */}
              <div className="relative hidden lg:flex items-center justify-center p-8">
                <div className="relative w-full aspect-square max-w-md rounded-3xl z-10 overflow-hidden shadow-2xl">
                  <img
                    src="/images/service-behavioral.jpg"
                    alt="Healthcare professional providing virtual care"
                    className="w-full h-full object-cover brightness-150"
                  />
                </div>
                {/* Decorative lotus */}
                <div className="absolute z-0 top-50 right-50 w-[1500px] h-[1500px] rotate-45 opacity-40 z-0 pointer-events-none">
                  <img src="/images/logo-favi.svg" alt="" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
