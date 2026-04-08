import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { ArrowRight, ChevronRight } from "lucide-react";
import WhatToExpectCarousel from "@/components/sections/WhatToExpectCarousel";

export const metadata = {
  title: "Medical Wellness | iWILL 'til i'mWELL",
   icons: {
    icon: "./../images/logo-favi.svg",
    shortcut: "./../images/logo-favi.svg",
    apple: "./../images/logo-favi.svg",
  },
  description:
    "Empowering you to live a healthier life with personalized care and support on your own terms.",
};

const medicalServices = [
  {
    title: "Care Coordination",
    description:
      "a team of expert care coordinators available to connect you with the right healthcare resources and support to ensure a smooth, personalized care experience.",
  },
  {
    title: "Urgent Care",
    description:
      "provides timely medical treatment for non-emergency conditions, such as minor injuries, illnesses, or infections, often outside of regular office hours",
  },
  {
    title: "Primary Care",
    description:
      "the first point of contact for ongoing healthcare, focusing on overall health, prevention, treatment of common conditions, chronic disease management, and the ability to select your own Primary Care Provider.",
  },
  {
    title: "Dermatology Services",
    description:
      "focuses on skin health and treatment. It's available exclusively with primary care.",
  },
];

const tools = [
  {
    title: "Lab Tests & Routine Screening",
    description:
      "an annual comprehensive metabolic panel with most additional labs at a greatly discounted rate. Regular health checks designed to detect potential conditions early, ensuring proactive care and better health management. It's available exclusively with primary care.",
  },
  {
    title: "Health Risk Assessment",
    description:
      "evaluations designed to assess your overall health, identify potential risks, and guide proactive care decisions. It's available exclusively with primary care.",
  },
  {
    title: "Message A Specialist",
    description:
      "allows you to easily communicate via email with a host of healthcare experts for advice, guidance, recommendations, or follow-up on your health concerns, ensuring you get the support you need.",
  },
  {
    title: "Musculoskeletal Care",
    description:
      "focuses on diagnosing and treating conditions related to muscles, bones, joints, and connective tissues to improve mobility and reduce pain.",
  },
  {
    title: "GLP-1 Medically Managed Weight Loss Program (Semaglutide)",
    description:
      "a medically supervised weight loss program using Semaglutide, a GLP-1 receptor agonist, to help reduce appetite, support healthy blood sugar levels, and promote gradual, sustainable weight loss in adults struggling with obesity or excess weight.",
  },
];

const prescriptionPlans = [
  {
    title: "Silver Prescription Plan",
    intro: "Consider us your Pharmacy Savings Advocate.",
    body: [
      "As a subscriber to iWILL 'til i'mWELL, you won't have to worry about the expensive cost of 37 commonly prescribed medications.",
      "iWILL 'til i'mWELL has created an Acute Medication Subscription Program that provides 37 drugs at no charge just for you, plus great discounts on all other medications.",
      "Our live Customer Care team is also here to help you find the lowest prices on medications available.",
    ],
  },
  {
    title: "Gold Prescription Plan",
    intro:
      "As a subscriber to iWILL 'til i'mWELL, you won't have to worry about the expensive cost of 200 common medications.",
    body: [
      "That's because iWILL 'til i'mWELL has created a medication subscription program that provides 200 meds at just $15.00, plus great discounts on all other medications.",
      "Consider us your Pharmacy Savings Advocate. Our live Customer Care team is here to help you find the lowest prices on medications available.",
    ],
  },
  {
    title: "Platinum Prescription",
    intro:
      "iWILL 'til i'mWELL has partnered with BestChoiceRx to bring you the best prescription prices possible.",
    body: [
      "As a member of iWILL 'til i'mWELL, there is no need to worry about the high cost of over 1,000 commonly prescribed medications. That's because as a member of iWILL 'til i'm WELL, you get to take advantage of BestChoiceRx's $0 ENHANCED MEDICATION PROGRAM that includes 37 ACUTE and 95 ACA (Affordable Care Act) medications, plus over 1,000 routinely prescribed CHRONIC drugs at no cost to you.",
    ],
  },
];

const whatToExpectCards = [
  {
    title: "Pediatricians",
    image: "/images/pediatrician-v1.png",
    description:
      "Seeking a Pediatrician to deliver comprehensive, compassionate care for children's physical, emotional, and mental health from birth through adolescence.",
  },
  {
    title: "Cold and Flu Symptoms",
    image: "/images/cold-and-flu-symptoms.png",
    description:
      "We treat cold anf flu symptoms which include congestion, cough, sore throat, body aches, fatigue, and fever.",
  },
  {
    title: "Ear Infection",
    image: "/images/ear-infection.png",
    description:
      "An ear infection causes pain, fluid drainage, and sometimes fever due to bacteria or viruses. Prompt treatment helps relieve discomfort and prevent complications.",
  },
  {
    title: "Pharmacists",
    image: "/images/pharmacyinventory.png",
    description:
      "Ensures safe medication use, explains drug interactions, and supports healing by guiding proper dosages with deep care and knowledge.",
  },
];

export default function MedicalCarePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero with image background */}
        <section className="relative overflow-hidden h-[540px] md:h-[600px]">
          {/* Background image */}
          <img
            src="/images/womens-health.png"
            alt="Medical team"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Purple overlay to match brand */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(96, 67, 118, 0.75) 0%, rgba(172, 115, 185, 0.55) 100%)",
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
            <div className="max-w-2xl text-white">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-sm font-medium mb-5">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Medical Wellness
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                Medical Wellness
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium mb-8 max-w-xl">
                Empowering you to live a healthier life with personalized care
                and support on your own terms
              </p>

              <div className="flex flex-wrap gap-3">
                <Button variant="white" size="lg" href="/login">
                  Login
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="accent" size="lg" href="/get-started">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Paragraph */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-4xl">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full hidden md:block" />
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed md:pl-6">
                Healthcare should be as flexible as your lifestyle. Whether you
                need a routine checkup, urgent care, specialized treatment, or
                primary care, we connect you with trusted providers who match
                your preference - giving you control over your health
                decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Medical Services */}
        <section className="section-padding py-16 md:py-20 bg-gray-50">
          <div className="container-main max-w-5xl">
            <div className="mb-10">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Medical <span className="text-primary font-script">Services</span>
              </h2>
            </div>

            <div className="space-y-4">
              {medicalServices.map((item) => (
                <div
                  key={item.title}
                  className="group bg-white rounded-2xl border border-gray-100 p-6 md:p-7 hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[15px] pt-1.5">
                    <span className="font-bold text-gray-900">
                      {item.title} -{" "}
                    </span>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button variant="ghost" size="lg" href="/pricing">
                Choose a plan
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-5xl">
            <div className="mb-10">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Health Tools
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Tools
              </h2>
            </div>

            <div className="space-y-4">
              {tools.map((item) => (
                <div
                  key={item.title}
                  className="group bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-7 hover:shadow-lg hover:border-accent/20 hover:bg-white transition-all duration-300 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <ChevronRight className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[15px] pt-1.5">
                    <span className="font-bold text-gray-900">
                      {item.title} -{" "}
                    </span>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button variant="ghost" size="lg" href="/learn-more">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Prescription Plans */}
        <section className="section-padding py-16 md:py-20 bg-gray-50">
          <div className="container-main max-w-5xl">
            <div className="mb-10">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Savings
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Prescription <span className="text-primary font-script">Plan</span>
              </h2>
            </div>

            <div className="space-y-8">
              {prescriptionPlans.map((plan) => (
                <div
                  key={plan.title}
                  className="bg-white rounded-2xl border border-gray-100 p-7 md:p-8 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {plan.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-[15px] font-medium mb-4">
                    {plan.intro}
                  </p>
                  <div className="space-y-3">
                    {plan.body.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-gray-600 leading-relaxed text-[15px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button variant="ghost" size="lg" href="/pricing">
                Choose a plan
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Trusted Providers / Message A Specialist - Image Collage */}
        <section className="section-padding py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Decorative lotus */}
          <div className="absolute bottom-0 right-0 w-72 h-72 opacity-10 pointer-events-none hidden lg:block">
            <img
              src="/images/logo-favi.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="container-main max-w-6xl relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left column */}
              <div className="space-y-6 md:pt-16">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                    Trusted Medical Providers
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Our network of licensed and board-certified medical
                    providers is dedicated to delivering high-quality care
                    tailored to your needs, ensuring you receive the best
                    possible treatment and support.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/easy-scheduling-v1.png"
                    alt="Medical provider"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/alternative-medicine.png"
                    alt="Medical team meeting"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/pediatrician-v1.png"
                    alt="Specialist"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                    Message A Specialist
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Easily connect with different healthcare specialists via
                    email for personalized advice and support. Whether you
                    have questions or need follow-up care, our specialists are
                    here to assist you remotely, ensuring you get the guidance
                    you need, when you need it.
                  </p>
                </div>
              </div>
            </div>

            {/* Full width image at bottom */}
            <div className="mt-6 rounded-2xl overflow-hidden shadow-lg max-w-xl">
              <img
                src="/images/alternative-medicine.png"
                alt="Medical specialist"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        {/* What to Expect */}
       <WhatToExpectCarousel />

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
              Start Your Wellness Journey Today
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Connect with trusted medical providers and take control of your
              health decisions.
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