import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import WhatToExpectCounselling from "@/components/sections/WhatToExpectCounselling";
import { ArrowRight, Check, ArrowLeft, Dot } from "lucide-react";
import Link from "next/link";
import SelfCareSection from "@/components/sections/SelfCareSection";

export const metadata = {
  title: "Counseling Care Services | iWILL 'til i'mWELL",
  icons: {
    icon: "./../images/logo-favi.svg",
    shortcut: "./../images/logo-favi.svg",
    apple: "./../images/logo-favi.svg",
  },
  description:
    "Life is beautiful — but even beauty has its struggles. Compassionate Counseling, therapy, and mental wellness support, on your terms.",
};

const counsellingServices = [
  {
    title: "Personalized Support",
    description: "We focus on the unique needs of each individual.",
  },
  {
    title: "In-the-Moment Counseling",
    description:
      "When you need immediate support, someone to talk to in the moment. Call any time. We are here for you.",
  },
  {
    title: "Short Term Therapy - Scheduled Appointments with a Counselor",
    description:
      "We offer regularly scheduled counseling sessions to provide structured, ongoing support.",
  },
  {
    title: "Long Term Therapy - Meet with a Psychologist",
    description:
      "Gain deeper insight into your psychological health through comprehensive therapy sessions.",
  },
  {
    title:
      "Long Term Therapy Support, Medication Management - Meet with a Psychiatrist",
    description:
      "When medication management is necessary to ensure a holistic approach to care.",
  },
  {
    title: "Community & Connection",
    description:
      "We foster a supportive and safe environment where individuals can engage in meaningful discussions, access resources, and build resilience.",
  },
  {
    title: "Affordability & Access",
    description:
      "Quality mental wellness support is affordable and within reach for those in need.",
  },
];

const behavioralTools = [
  "Additional mental health assessments",
  "Personal journal (verbal/written)",
  "Shareable information (optional)",
  "Record Voice Affirmations",
  "Track Moods & Feelings",
  "Cognitive Behavior inquiries",
  "Safety Plans",
  "Personal Analytics",
  "Daily Affirmations",
  "Curated News Feeds",
];

export default function CounsellingCareServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[540px] md:h-[600px]">
          <div
            className="absolute inset-0 z-[0] "
            style={{
              background: "black",
            }}
          />
          {/* Image in front with 60% opacity */}
          <img
            src="/images/counseling/iwilltilimwell-services.png"
            alt="Medical team"
            className="absolute inset-0 w-full h-full object-cover opacity-70 z-[1]"
          />
            <Link
            href="/"
            className="absolute top-6 left-6 z-[4] inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-medium hover:bg-white/25 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>

          <div className="relative z-[3] h-full container-main section-padding flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4">
                Life is Beautiful!
              </h1>

              <p className="text-xl md:text-2xl text-white/90 font-medium italic mb-5">
                …but even beauty has its struggles.
              </p>

              <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                Challenges test our strength and resilience, but at{" "}
                <em>iWILL 'til i'mWELL</em>, we see them as opportunities for
                breakthrough.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="white"
                  size="lg"
                  href="https://app.iwilltilimwell.com/login"
                >
                  Login
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="accent"
                  size="lg"
                  href="https://app.iwilltilimwell.com/register"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <SelfCareSection />

      
        {/* Counseling Services */}
        <section className="section-padding py-16 md:py-20 bg-gray-50">
          <div className="container-main max-w-5xl">
            <div className="mb-10">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Counseling{" "}
                <span className="text-primary font-script">Services</span>
              </h2>
            </div>

            <div className="space-y-4">
              {counsellingServices.map((item) => (
                <div
                  key={item.title}
                  className="group bg-white rounded-2xl border border-gray-100 p-6 md:p-7 hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Dot className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[15px] pt-1.5">
                    <span className="font-bold text-gray-900">
                      {item.title}:{" "}
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

        {/* Advanced Behavioral Health Tools */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-5xl">
            <div className="mb-10">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Mental Wellness Tools
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Advanced Behavioral{" "}
                <span className="text-primary font-script">Health Tools</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mt-4 max-w-2xl">
                A complete toolkit to support your mental wellness journey —
                track, reflect, and grow at your own pace.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {behavioralTools.map((tool) => (
                <div
                  key={tool}
                  className="group bg-gray-50 rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-accent/20 hover:bg-white transition-all duration-300 flex gap-3 items-center"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-gray-700 font-medium text-[15px]">
                    {tool}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button variant="ghost" size="lg" href="/faq">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* We Care / We Are Here For You - Image Collage */}
        <section className="section-padding py-16 md:py-24 bg-gray-50 relative overflow-hidden">
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
              <div className="space-y-6 md:pt-20">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <p className="text-xs text-accent font-bold uppercase tracking-wider mb-3">
                    We Care
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                    You may feel no once cares, but we do.
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    We're here to listen, help guide you through life's
                    challenges, and support you in making the decisions that
                    matter most.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/counseling/another-therapist.jpg"
                    alt="Counsellor supporting a client"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>
                <div className="rounded-2xl  overflow-hidden shadow-lg">
                  <img
                    src="/images/counseling/a-psychiatrist.jpg"
                    alt="Support session"
                    className="w-full h-auto  object-cover  aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/counseling/counselor_therapist.jpg"
                    alt="Therapist in session"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/counseling/register.jpg"
                    alt="Reflection session"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <p className="text-xs text-accent font-bold uppercase tracking-wider mb-3">
                    We Are Here For You
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                    Compassionate care, every step of the way.
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Whether you're navigating stress, anxiety, trauma, or any
                    other mental health challenge, we're here to provide
                    compassionate support and personalized care every step of
                    the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
          {/* Intro Paragraph */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-4xl">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full hidden md:block" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight md:pl-6 mb-6">
                Cura personalis: empowering your journey to total holistic
                wellness.
              </h2>
              <div className="md:pl-6 space-y-4 text-gray-700 leading-relaxed text-[15px] md:text-base">
                <p>
                  iWILL 'til i'mWELL is{" "}
                  <span className="font-bold">rooted in "Cura Personalis"</span>{" "}
                  - a Latin term -{" "}
                  <span className="font-bold">
                    caring for the whole person.
                  </span>
                </p>
                <p>
                  We are committed to empowering individuals to achieve complete
                  well-being - mentally, physically, emotionally, and
                  spiritually.
                </p>
                <p>
                  Our mission is to{" "}
                  <span className="font-bold">
                    empower every individual to take charge of their health
                  </span>{" "}
                  by providing actionable insights, evidence-based strategies,
                  and a supportive community until they truly feel well.
                </p>
                <p>
                  We embrace a holistic approach to wellness, understanding that{" "}
                  <span className="font-bold">
                    healing is a journey and every person's journey is unique.
                  </span>{" "}
                  We are dedicated to making wellness an achievable, everyday
                  reality, inspiring everyone to{" "}
                  <span className="font-bold">
                    embrace their health journey with confidence and resilience.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* What to Expect - Carousel */}
        <WhatToExpectCounselling />

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
              We Hear. We Listen. We Care.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Start your Counseling journey today with licensed professionals
              who prioritize your mental well-being.
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
