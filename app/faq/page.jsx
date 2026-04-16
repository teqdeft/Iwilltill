import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import FAQTabs from "@/components/sections/FAQTabs";

export const metadata = {
  title: "FAQ | iWILL 'til i'mWELL",
  icons: {
    icon: "./../images/logo-favi.svg",
    shortcut: "./../images/logo-favi.svg",
    apple: "./../images/logo-favi.svg",
  },
  description:
    "Frequently asked questions about iWILL 'til i'mWELL — telemedicine, virtual care, pricing, and how our services work.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden h-[440px] md:h-[500px]">
          <img
            src="/images/faq/faq-banner-v1.png"
            alt="FAQ"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(96, 67, 118, 0.85) 0%, rgba(172, 115, 185, 0.55) 100%)",
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
                FAQ
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                Frequently Asked Questions
              </h1>

              <p className="text-base md:text-lg text-white/95 leading-relaxed mb-8 max-w-xl">
                Have questions? We created this space to give clear answers.
                Whether you want to understand how care works at iWILL 'til
                i'mWELL or what to expect from Essential Care, you will find
                helpful guidance here. Our goal is to support your next step
                toward feeling better - without confusion.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="white"
                  size="md"
                  href="https://app.iwilltilimwell.com/login"
                >
                  Login
                </Button>
                <Button
                  variant="accent"
                  size="md"
                  href="https://app.iwilltilimwell.com/register"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Tabs */}
        <FAQTabs />
      </main>
      <Footer />
    </>
  );
}
