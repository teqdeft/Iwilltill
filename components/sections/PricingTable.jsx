"use client";

import { useState } from "react";
import { Check, Leaf, Shield, Crown, Gem } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const plans = {
  self: [
    { name: "BASIC", price: "$35", icon: Leaf },
    { name: "STANDARD", price: "$50", icon: Shield },
    { name: "PLUS", price: "$55", icon: Crown },
    { name: "PREMIUM", price: "$60", icon: Gem, note: "($25 co-pay with PCP visits only)" },
  ],
  family: [
    { name: "BASIC", price: "$45", icon: Leaf },
    { name: "STANDARD", price: "$60", icon: Shield },
    { name: "PLUS", price: "$65", icon: Crown },
    { name: "PREMIUM", price: "$75", icon: Gem, note: "($25 co-pay with PCP visits only)" },
  ],
};

const features = [
  {
    name: "Virtual Urgent Care",
    description: "Unlimited access to an MD for acute, non-emergent care.",
    plans: { Basic: true, Standard: true, Plus: true, Premium: true },
  },
  {
    name: "Care Coordinators",
    description: "24/7/365 access to care coordinators to help you to manage your care.",
    plans: { Basic: true, Standard: true, Plus: true, Premium: true },
  },
  {
    name: "Message A Specialist",
    description: "Consultations with Pediatricians, Ophthalmologists, Women's Health Physicians, Sports Medicine Doctors, Nutritionists, Registered Dietitians, Fitness Coaches, Dentists, Pharmacists, and more via your member portal only.",
    plans: { Basic: true, Standard: true, Plus: true, Premium: true },
  },
  {
    name: "Behavioral Health Care",
    description: "Master's Level Therapists, Psychologists and Psychiatrists.",
    plans: { Basic: false, Standard: true, Plus: true, Premium: true },
  },
  {
    name: "Advanced Behavioral Health Care",
    description: "An app with Assessment Measures (Anxiety, Depression, & Substance Use), a Mood Calendar, Voice & Written Journal Capabilities, Safety Plans, Emergency Resources, Affirmations Sharing, and more.",
    plans: { Basic: false, Standard: false, Plus: true, Premium: true },
  },
  {
    name: "*Virtual Primary Care",
    description: "All of the above PLUS Unlimited VPC, Medication Management, Lab Panels, Health Risk Assessments, and Virtual Dermatology.",
    plans: { Basic: false, Standard: false, Plus: false, Premium: true },
  },
];

const addOns = [
  { name: "TeleVet Pet Care", price: "$20/month" },
  { name: "Weight Loss Management", price: "$300/month" },
  { name: "Advanced Behavioral Health Care", price: "$10/month" },
  { name: "**Silver Prescription Plan", price: "$10/month" },
  { name: "***Gold Prescription Plan", price: "$15/month" },
  { name: "****Platinum Prescription Plan", price: "$20/month" },
];

const footnotes = [
  "*Virtual Primary Care is an all-inclusive package.",
  "**37 non-urgent medications at $0 cost for each.",
  "***200 chronic medications at $5 each PLUS all of Silver Prescription Plan.",
  "****Over 1000 acute and chronic medications at $0 cost per prescription.",
  "For a detailed description of all services, visit our FAQ Page.",
];

const businessPlans = [
  { name: "Virtual Primary Care" },
  { name: "Musculoskeletal Care" },
  { name: "TeleVet" },
];

const tierKeys = ["Basic", "Standard", "Plus", "Premium"];

export default function PricingTable() {
  const [activeTab, setActiveTab] = useState("self");
  const currentPlans = plans[activeTab];

  const FaqLink = () => <a href="/faq" className="font-bold text-primary hover:underline">FAQ Page.</a>;

  return (
    <section className="section-padding py-16 md:py-20 bg-white">
      <div className="container-main max-w-6xl">
        {/* Header with toggle */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-3">
              Choose your <span className="text-primary font-script">plan</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-3">
              For a detailed description of all our services, please visit our <FaqLink />
            </p>
          </div>

          {/* Self / Self + Family Toggle */}
          <div className="inline-flex p-1 bg-gray-100 rounded-xl border border-gray-200 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab("self")}
              className={cn(
                "px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300",
                activeTab === "self"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:text-primary"
              )}
            >
              Self
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("family")}
              className={cn(
                "px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300",
                activeTab === "family"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:text-primary"
              )}
            >
              Self + Family
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {currentPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className="group bg-white rounded-2xl border border-gray-200 p-5 md:p-6 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-700">
                    {plan.name}
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                {plan.note && (
                  <p className="text-xs text-gray-500 mt-2">{plan.note}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Compare Features + Add-Ons */}
        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-8">
          {/* Compare Features by Plan */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Compare features by plan
            </h3>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-[1fr_60px_60px_60px_60px] gap-2 px-5 py-4 bg-gray-50 border-b border-gray-200 items-center">
                <div className="text-sm font-bold text-gray-900">Feature</div>
                <div className="text-xs font-bold text-gray-700 text-center">Basic</div>
                <div className="text-xs font-bold text-gray-700 text-center">Standard</div>
                <div className="text-xs font-bold text-gray-700 text-center">Plus</div>
                <div className="text-xs font-bold text-gray-700 text-center">Premium</div>
              </div>

              {/* Table rows */}
              {features.map((feature, i) => (
                <div
                  key={feature.name}
                  className={cn(
                    "grid grid-cols-[1fr_60px_60px_60px_60px] gap-2 px-5 py-4 items-start",
                    i !== features.length - 1 && "border-b border-gray-100"
                  )}
                >
                  <div className="text-[13px] text-gray-700 leading-relaxed">
                    <span className="font-bold text-gray-900">{feature.name}</span> - {feature.description}
                  </div>
                  {tierKeys.map((tier) => (
                    <div key={tier} className="flex items-center justify-center pt-1">
                      {feature.plans[tier] ? (
                        <div className="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                        </div>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Optional Add-Ons */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Optional Add-Ons
            </h3>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {addOns.map((addon, i) => (
                <div
                  key={addon.name}
                  className={cn(
                    "flex items-center justify-between gap-3 px-5 py-4",
                    i !== addOns.length - 1 && "border-b border-gray-100"
                  )}
                >
                  <span className="text-[13px] font-medium text-gray-700 flex-1">
                    {addon.name}
                  </span>
                  <span
                    className="text-xs font-bold text-white px-3 py-1.5 rounded-md whitespace-nowrap"
                    style={{
                      background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
                    }}
                  >
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Get Started CTA */}
        <div className="text-center mt-12">
          <Button variant="accent" size="lg" href="/get-started">
            Get Started
          </Button>
        </div>

        {/* Footnotes + EAPs */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-16">
          {/* Footnotes */}
          <div>
            <ul className="space-y-3">
              {footnotes.map((note, i) => (
                <li
                  key={i}
                  className="flex gap-2 items-start text-[13px] text-gray-700 leading-relaxed"
                >
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* EAPs/Groups/Businesses */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-1 mb-5">
              EAPs/Groups/Businesses
            </h3>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {businessPlans.map((plan, i) => (
                <div
                  key={plan.name}
                  className={cn(
                    "flex items-center justify-between gap-3 px-5 py-4",
                    i !== businessPlans.length - 1 && "border-b border-gray-100"
                  )}
                >
                  <span className="text-[14px] font-medium text-gray-700">
                    {plan.name}
                  </span>
                  <a href="/request-demo" className="text-sm font-bold text-primary hover:underline">Request a Demo</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}