import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoRequestForm from "@/components/sections/DemoRequestForm";

export const metadata = {
  title: "Request a Demo | iWILL 'til i'mWELL",
  icons: {
    icon: "./../images/logo-favi.svg",
    shortcut: "./../images/logo-favi.svg",
    apple: "./../images/logo-favi.svg",
  },
  description:
    "Schedule a personalized demo to see how iWILL 'til i'mWELL's virtual approach supports and makes benefits easier to understand.",
};

export default function RequestADemoPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[440px] md:h-[500px]">
          <img
            src="/images/contact/request-a-demo.jpg"
            alt="Request a Demo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(96, 67, 118, 0.85) 0%, rgba(172, 115, 185, 0.50) 100%)",
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
                Request a Demo
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                Request a Demo
              </h1>

              <p className="text-base md:text-lg text-white/95 font-semibold leading-relaxed max-w-xl">
                Schedule a personalized demo to see how iWILL 'til i'mWELL's
                virtual approach supports and makes benefits easier to
                understand and more relevant to members at every step of their
                journey.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <DemoRequestForm />
      </main>
      <Footer />
    </>
  );
}