import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { CheckSquare, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Gold Prescription Plan | iWILL 'til i'mWELL",
  icons: {
    icon: "./../images/logo-favi.svg",
    shortcut: "./../images/logo-favi.svg",
    apple: "./../images/logo-favi.svg",
  },
  description:
    "Gold Prescription Plan — Easiest Way to Save on Your Medications. Chronic Medication Prescription Plan by iWILL 'til i'mWELL.",
};

const programCoversCol1 = [
  "Allergy",
  "Arthritis/Pain",
  "Asthma",
  "Blood Pressure/Heart",
];
const programCoversCol2 = [
  "Cholesterol",
  "Cold/Cough",
  "Diabetes",
  "Men's/Women's Health",
];
const programCoversCol3 = [
  "Mental Health",
  "Pink Eye",
  "Poison Ivy",
  "and More!",
];

const drugsLikeCol1 = [
  "Amoxicillin",
  "Azithromycin (Z-Pak)",
  "Cialis (generic)",
];
const drugsLikeCol2 = ["Glipizide", "Omeprazole", "Sprintec"];
const drugsLikeCol3 = ["Viagra (generic)", "Warfarin", "and much more!"];

export default function GoldPrescriptionPlanPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[460px] md:h-[520px]">
          <img
            src="/images/plans/medications.jpg"
            alt="Gold Prescription Plan"
            className="absolute inset-0 w-full h-full object-cover opacity-70 z-[1]"
          />
          <div
            className="absolute inset-0 z-[0]"
            style={{
              background: "black",
            }}
          />
          <Link
            href="/"
            className="absolute top-6 left-6 z-[4] inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-medium hover:bg-white/25 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>

          <div className="relative z-[3] h-full container-main section-padding flex flex-col justify-center">
            <div className="max-w-3xl text-white">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4"
                style={{ fontFamily: "serif" }}
              >
                Gold Prescription Plan for Primary Care Medications
              </h1>
              <p className="text-base md:text-lg text-white/95 font-semibold">
                Easiest Way to Save on Your Medications
              </p>
            </div>
          </div>
        </section>

        {/* Intro: Image + Description */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image with overlay card */}
              <div className="relative rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/plans/commonly-prescribed-medications.png"
                  alt="Pharmacy savings"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg max-w-xs">
                    <p className="text-gray-900 text-[15px] leading-snug mb-4">
                      Gold Prescription Plan comes with 200 chronic medications
                      at $15 each PLUS all prescriptions in our Silver
                      Prescription Plan.
                    </p>
                    <Button
                      variant="primary"
                      size="sm"
                      href="https://app.iwilltilimwell.com/register"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right - Text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  Gold Prescription Plan
                </h2>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                  Chronic Medication Prescription Plan
                </h3>

                <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                  As a subscriber to{" "}
                  <span className="font-bold">iWILL 'til i'mWELL</span>,{" "}
                  <span className="text-primary font-semibold">
                    you won't have to worry about the expensive cost of 200
                    common medications.
                  </span>
                </p>

                <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                  That's because{" "}
                  <span className="font-bold">iWILL 'til i'mWELL</span> has
                  created a{" "}
                  <span className="text-primary font-semibold">
                    medication subscription program that provides 200 meds at
                    just $15.00
                  </span>
                  , plus great discounts on all other medications.
                </p>

                <p className="text-gray-700 text-[15px] leading-relaxed">
                  Consider us your pharmacy savings advocate. Our live Customer
                  Care team is here to help you find the lowest prices on
                  medications available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Program Covers + Drugs Like */}
        <section className="section-padding py-16 md:py-20 bg-gray-50">
          <div className="container-main max-w-6xl">
            {/* Our Program Covers */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                Our Program Covers:
              </h2>

              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                <div className="space-y-3">
                  {programCoversCol1.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-gray-700 text-[15px]"
                    >
                      <CheckSquare className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {programCoversCol2.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-gray-700 text-[15px]"
                    >
                      <CheckSquare className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {programCoversCol3.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-gray-700 text-[15px]"
                    >
                      <CheckSquare className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Drugs Like */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                Drugs Like:
              </h2>

              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                <div className="space-y-3">
                  {drugsLikeCol1.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-gray-700 text-[15px]"
                    >
                      <CheckSquare className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {drugsLikeCol2.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-gray-700 text-[15px]"
                    >
                      <CheckSquare className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {drugsLikeCol3.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-gray-700 text-[15px]"
                    >
                      <CheckSquare className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Program is Easy to Use */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                {/* Left - Text */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                    The Program is Easy to Use:
                  </h2>

                  <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                    You will receive an electronic member card that can be
                    presented at any retail pharmacy (over 70,000 in network)
                    and if on the formulary, you only pay $5.00. If it is not on
                    the $5.00 formulary, your out-of-pocket cost will be based
                    on a deeply discounted price.
                  </p>

                  <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                    All future chronic or recurring medications will be mailed
                    directly to you for just $15 (see subscription details).
                    Plus, get discounts on diabetic supplies, pet meds, and
                    other prescription medication saving options.
                  </p>

                  <Button
                    variant="primary"
                    size="md"
                    href="/pdf/gold-prescriptions.pdf"
                    target="_blank"
                    download
                  >
                    Download PDF Now
                  </Button>
                </div>

                {/* Right - Image */}
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/plans/prescription-discount-card.png"
                    alt="Prescription Discount Card"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          className="relative overflow-hidden section-padding py-16 md:py-24"
          style={{
            background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
          }}
        >
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none">
            <img
              src="/images/logo-favi.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative container-main text-center text-white max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Save on Chronic Medications Today
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Join the Gold Prescription Plan and access 200 common medications
              at just $15 each.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="accent"
                size="lg"
                href="https://app.iwilltilimwell.com/register"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="white" size="lg" href="/pricing">
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
