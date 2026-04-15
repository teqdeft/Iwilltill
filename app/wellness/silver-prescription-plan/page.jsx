import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { CheckSquare, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Silver Prescription Plan | iWILL 'til i'mWELL",
  icons: {
    icon: "./../images/logo-favi.svg",
    shortcut: "./../images/logo-favi.svg",
    apple: "./../images/logo-favi.svg",
  },
  description:
    "Silver Prescription Plan — $10 Cost Medication Program. Acute Medication Subscription Program by iWILL 'til i'mWELL.",
};

const programCovers = ["Antibiotics", "Ear Infections", "Bronchitis", "Asthma", "Cough"];

const drugsLikeCol1 = [
  "Amoxicillin",
  "Azithromycin (Z–pak)",
  "Ciprofloxacin",
  "Eye Infection/Pink Eye",
  "Fever",
];
const drugsLikeCol2 = [
  "Headache/Migraine",
  "Pain Management",
  "Hydrocortisone",
  "Meclizine",
  "Naproxen",
];
const drugsLikeCol3 = [
  "Poison Ivy",
  "Sore Throat/Strep",
  "Prednisone",
  "Tessalon",
  "and more!",
];

export default function SilverPrescriptionPlanPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[460px] md:h-[520px]">
          <img
            src="/images/plans/virtual-primary-care-medications-banner-min.png"
            alt="Silver Prescription Plan"
            className="absolute inset-0 w-full h-full object-cover"
          />
         <div
            className="absolute inset-0"
          style={{
              background:
                "linear-gradient(135deg, rgba(96, 67, 118, 0.80) 0%, rgba(172, 115, 185, 0.55) 100%)",
            }} 
          />
            {/* Decorative lotus */}
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-15 -translate-y-1/2 translate-x-1/4 pointer-events-none hidden lg:block">
            <img
              src="/images/logo-favi.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative h-full container-main section-padding flex flex-col justify-center">
            <div className="max-w-3xl text-white">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4"
                style={{ fontFamily: "serif" }}
              >
                Silver Prescription Plan for Urgent Care Medications
              </h1>
              <p className="text-base md:text-lg text-white/95 font-semibold">
                $10 Cost Medication Program
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
                  src="/images/plans/acute-medication-v1.png"
                  alt="Pharmacy savings"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg max-w-xs">
                    <p className="text-gray-900 font-semibold text-lg leading-snug mb-4">
                      Thirty-seven common medications at $10 each.
                    </p>
                    <Button variant="primary" size="sm" href="/get-started">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right - Text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                  Silver Prescription Plan
                </h2>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  Acute Medication Subscription Program
                </h3>

                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                  Consider us your Pharmacy Savings Advocate.
                </p>

                <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                  As a subscriber to{" "}
                  <span className="font-bold">iWILL 'til i'mWELL</span>,{" "}
                  <span className="text-primary font-semibold">
                    you won't have to worry about the expensive cost of 37
                    commonly prescribed medications.
                  </span>
                </p>

                <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                  <span className="font-bold">iWILL 'til i'mWELL</span> has
                  created an Acute Medication Subscription Program that
                  provides 37 drugs at no charge just for you, plus great
                  discounts on all other medications.
                </p>

                <p className="text-gray-700 text-[15px] leading-relaxed">
                  Our live Customer Care team is also here to help you find the
                  lowest prices on medications available.
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
                {programCovers.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700 text-[15px]">
                    <CheckSquare className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
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
                    <div key={item} className="flex items-center gap-2 text-gray-700 text-[15px]">
                      <CheckSquare className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {drugsLikeCol2.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-700 text-[15px]">
                      <CheckSquare className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {drugsLikeCol3.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-700 text-[15px]">
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
                    and if on the formulary, you pay nothing. If it is not on
                    the $0.00 formulary, your out-of-pocket cost will be based
                    on a deeply discounted price.
                  </p>

                  <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                    Present your Rx Card to the pharmacy of your choice. Your
                    Rx Card will display your BIN, Group Number and PCN to
                    present to the pharmacist. You will pay nothing at the
                    pharmacy.
                  </p>

                  <Button
                    variant="primary"
                    size="md"
                    href="/downloads/silver-prescription-plan.pdf"
                  >
                    Download PDF Now
                  </Button>
                </div>

                {/* Right - Image */}
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/plans/receive-an-electronic-member-card.png"
                    alt="Rx Card on phone"
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
              Start Saving on Prescriptions Today
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Join the Silver Prescription Plan and access 37 common
              medications at just $10 each.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button variant="accent" size="lg" href="/get-started">
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