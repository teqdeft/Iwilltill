"use client";

import { Smartphone, Clock, CalendarCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Care That Fits the Way You Live",
    description:
      "Whether you're at home, at work, or on the go, our telehealth platform gives you access to quality care — anytime, anywhere. No travel, no waiting rooms, no hassle.",
  },
  {
    icon: Clock,
    title: "Convenient and easy to access",
    description:
      "Connect to practitioners right at your fingertips, or schedule visits at a time that fits your busy schedule. Access all your healthcare needs from one convenient place.",
  },
  {
    icon: CalendarCheck,
    title: "Saves time and reduces delays",
    description:
      "Skip appointment lines with a simple way to schedule consultations right from your device. No more long waits or scheduling hassles.",
  },
  {
    icon: Sparkles,
    title: "Built for better everyday care",
    description:
      "Our platform is designed to help you stay on top of your health. Track visits, manage prescriptions, and make informed health decisions — all in one place.",
  },
];

export default function Features() {
  return (
    <section
      className="relative overflow-hidden section-padding py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
      }}
    >
      {/* Soft floating orbs for ambient movement */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 -right-32 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl animate-float-slower" />
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 rounded-full bg-white/5 blur-3xl animate-float-slow" />
      </div>

      <div className="container-main relative">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-xs font-semibold uppercase tracking-wider text-white/90 mb-4">
            Care That Fits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Designed Around Your{" "}
            <span className="font-script font-normal text-4xl md:text-5xl text-accent">
              Everyday Life
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative animate-fade-up"
                style={{
                  animationDelay: `${index * 120}ms`,
                  animationFillMode: "both",
                }}
              >
                {/* Soft glow on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-white/30 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

                <div className="relative h-full bg-white/[0.08] backdrop-blur-md rounded-2xl p-7 border border-white/15 hover:border-white/30 hover:bg-white/[0.12] hover:-translate-y-1.5 transition-all duration-500 ease-out">
                  {/* Icon */}
                  <div className="relative w-14 h-14 mb-5">
                    <div className="absolute inset-0 rounded-2xl bg-white/15 group-hover:bg-white/25 transition-colors duration-500" />
                    <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/75 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Subtle bottom accent line */}
                  <div className="mt-5 h-px w-10 bg-gradient-to-r from-green-300 to-green-500 group-hover:w-full transition-all duration-700/40 to-transparent group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -30px) scale(1.05);
          }
        }
        @keyframes float-slower {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-25px, 20px) scale(1.08);
          }
        }
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 16s ease-in-out infinite;
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}