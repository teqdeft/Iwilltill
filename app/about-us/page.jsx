import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { ArrowRight, Check } from "lucide-react";
import WhatToExpectEAP from "@/components/sections/WhatToExpectEAP";

export const metadata = {
  title: "About Us | iWILL 'til i'mWELL",
  icons: {
    icon: "./../images/logo-favi.svg",
    shortcut: "./../images/logo-favi.svg",
    apple: "./../images/logo-favi.svg",
  },
  description:
    "Wellness starts with a promise. We're here to help you keep that promise — providing holistic medical and mental healthcare for body, mind, and soul.",
};

const medicalHealth = [
  "Medical Consultations.",
  "Medical Urgent Care.",
  "Medical Primary Care.",
  "Health Risk Assessments.",
  "Lab Panels.",
  "Dermatological Care.",
  "Prescription Plans.",
  "Musculoskeletal Care.",
  "GLP-1 Medically Managed Weight Loss Program (Semaglutide)",
];

const mentalHealth = [
  "Crisis Management.",
  "In-the-moment Care.",
  "Therapy Sessions.",
  "Psychology Visits.",
  "Psychiatry Visits.",
  "Mental Health Assessments.",
  "Mood Analytics.",
  "Personal Voice Affirmations.",
  "Shareable Data.",
  "Safety Plans.",
  "Daily Affirmations.",
];

const careServices = ["Care Coordination.", "Message Specialists."];

const televetCare = [
  "Pet Consultations.",
  "Pet Prescription Discount Card.",
  "Follow-up Care.",
];

const helpCards = [
  {
    title: "Musculoskeletal Care",
    image: "/images/sports-medicine.png",
  },
  {
    title: "Care Coordinators",
    image: "/images/general-practitioners.png",
  },
  {
    title: "Message A Specialist",
    image: "/images/pediatrician-v1.png",
  },
  {
    title: "Prescription Plans",
    image: "/images/pharmacyinventory.png",
  },
];

const stats = [
  { number: "5,000", label: "Medical Doctors" },
  { number: "25,000", label: "Mental Health Therapists" },
  { number: "500", label: "TeleVet Veterinarians" },
];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[560px] md:h-[640px]">
          <img
            src="/images/alternative-medicine.png"
            alt="Wellness journey"
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

          <div className="relative h-full container-main section-padding flex flex-col justify-center items-center text-center">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.1] tracking-tight mb-6">
                Wellness starts with a promise.
              </h1>

              <p className="text-2xl md:text-3xl lg:text-4xl font-script text-accent italic mb-6 leading-tight">
                "I will keep going until I'm well!"
              </p>

              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                We're here to help you keep that promise.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-5xl">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
              Who We Are
            </span>
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2">
                Our Mission &{" "}
                <span className="text-primary font-script">Vision</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10">
              <div className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-all duration-300">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  To provide hope and empower individuals on their life's
                  journey through holistic care that addresses the
                  interconnected dimensions of mind, body, soul and spirit.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-all duration-300">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  To create a world where medical care and mental health are
                  prioritized, supported, and accessible to all, enabling
                  individuals to lead fulfilling and empowering lives.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] md:text-base">
              <p>
                With a holistic approach, iWILL 'til i'mWELL empowers
                individuals to take control of their well-being through quality
                care, expert guidance, and community support - without the
                limitations of traditional insurance.
              </p>
              <p className="font-bold text-gray-900 uppercase text-sm tracking-wider">
                We are giving you the power to take control of your own health
                care!
              </p>
            </div>

            <div className="mt-8">
              <Button variant="accent" size="lg" href="/get-started">
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* A Journey of Healing */}
        <section className="section-padding py-16 md:py-20 bg-gray-50">
          <div className="container-main max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Our Programs
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 inline-block border-b-2 border-primary pb-2">
                A Journey of Healing and{" "}
                <span className="text-primary font-script">Self-Discovery</span>
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed text-base mt-6">
                <p className="font-semibold">
                  Gain Access to Medical and Mental Healthcare Wellness
                  Programs.
                </p>
                <p>
                  We provide medical and mental health services to individuals
                  in need, ensuring affordability and accessibility.
                </p>
                <p>
                  We are expanding access to medical and mental healthcare
                  through telehealth platforms, allowing individuals to receive
                  support remotely.
                </p>
                <p>
                  We are partnering and collaborating with healthcare providers
                  to offer low-cost, high value virtual medical, mental health
                  and pet care.
                </p>
                <p>We also offer no- and low cost prescription plans.</p>
              </div>
            </div>

            {/* Four columns of services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Medical Health */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-4 inline-block border-b-2 border-primary pb-1">
                  Medical Health.
                </h3>
                <ul className="space-y-2.5">
                  {medicalHealth.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 items-start text-[14px] text-gray-700"
                    >
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mental Health */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-4 inline-block border-b-2 border-primary pb-1">
                  Mental Health.
                </h3>
                <ul className="space-y-2.5">
                  {mentalHealth.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 items-start text-[14px] text-gray-700"
                    >
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Care Services */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-4 inline-block border-b-2 border-primary pb-1">
                  Care Services.
                </h3>
                <ul className="space-y-2.5">
                  {careServices.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 items-start text-[14px] text-gray-700"
                    >
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Televet Pet Care */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-4 inline-block border-b-2 border-primary pb-1">
                  Televet Pet Care.
                </h3>
                <ul className="space-y-2.5">
                  {televetCare.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 items-start text-[14px] text-gray-700"
                    >
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Can We Help */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Our Services
              </span>
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2">
                  How Can We{" "}
                  <span className="text-primary font-script">Help?</span>
                </h2>
              </div>

              <div className="space-y-3 text-gray-700 leading-relaxed text-base mt-6">
                <p>
                  iWILL 'til i'mWELL offers premiere services that are designed
                  to meet your medical and mental health needs.
                </p>
                <p>
                  Communication with Licensed Physicians, Mental Health
                  Specialists, a host of Medical Specialists, Licensed
                  Veterinarians, and Care Coordinators in{" "}
                  <span className="font-bold">
                    both English and Spanish, 24/7, 365 days a year.
                  </span>
                </p>
                <p>
                  The highest quality care for your body, mind, and soul is
                  offered at a flexible, affordable value.
                </p>
              </div>
            </div>

            <WhatToExpectEAP />
          </div>
        </section>

        {/* Stats Banner */}
        <section
          className="relative overflow-hidden section-padding py-16 md:py-20"
          style={{
            background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
          }}
        >
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-15 -translate-y-1/2 translate-x-1/4 pointer-events-none">
            <img
              src="/images/logo-favi.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative container-main text-center text-white max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-5 inline-block border-b-2 border-white/40 pb-2">
              We provide medical care, behavioral health care and pet care.
            </h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
              iWILL 'til I'mWELL offers premiere services that are designed to
              meet your medical and mental health needs. Communication with
              Licensed Physicians & Mental Health Specialists in English and
              Spanish, 24/7, 365 days a year. The highest quality care for your
              body, mind, and soul is offered at a flexible affordable value.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-white/90 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A Word From Our CEO */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-6xl">
            <div className="">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Leadership
              </span>
             
            </div>
             <h2 className="text-3xl md:text-4xl mb-5 font-bold text-gray-900 inline-block border-b-2 border-primary pb-2">
                A Word From Our{" "}
                <span className="text-primary font-script">CEO</span>
              </h2>

            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
              {/* Left - CEO Message */}
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] md:text-base">
                <p>
                  At iWILL 'til i'mWELL, we believe that true wellness goes
                  beyond just treating symptoms - it's about healing the whole
                  person, mind, body, and spirit. Our mission is to provide
                  accessible, compassionate, and innovative care that empowers
                  individuals to take control of their health. With a
                  faith-driven approach and a commitment to excellence, we are
                  redefining healthcare to be more personal, holistic, and
                  impactful. Your wellness journey matters, and we're here to
                  walk alongside you every step of the way.
                </p>
                <p>
                  Dr. Rovaris, fondly known as "Dr. Jill", is a visionary leader
                  with over 40 years experience in the mental health field and
                  13 years experience managing Student Health Centers - doctors,
                  nurses, and various healthcare professionals. As the founder
                  and CEO of iWILL 'til i'mWELL, she is committed to
                  transforming healthcare through a holistic, faith-based
                  approach that prioritizes accessibility, affordability, and
                  whole-person wellness. With a passion for caring for people
                  and addressing the social determinants of health, she has
                  dedicated her career to bridging the gap between mental health
                  and physical well-being, ensuring individuals receive
                  personalized, high-quality care that empowers them to thrive.
                </p>
                <p>
                  Now, after decades of experience, Dr. Rovaris has been
                  accepted into medical school, presenting her with a profound
                  opportunity to further expand her impact in healthcare - one
                  she is prayerfully considering as she continues her mission to
                  serve others.
                </p>
              </div>

              {/* Right - CEO Image & Info */}
              <div>
                <div className="rounded-2xl overflow-hidden shadow-xl mb-5">
                  <img
                    src="/images/about-us/ceo.jpeg"
                    alt="Dr. Jillandra C. Rovaris"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Dr. Jillandra C. Rovaris
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Entrepreneur, Psychologist, Co-Founder of iWill 'til i'mWell
                </p>
                <Button variant="accent" size="md" href="/learn-more">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
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
              Take Control of Your Health Today
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Join thousands who have chosen iWILL 'til i'mWELL for accessible,
              holistic healthcare for body, mind, and soul.
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
