import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PathsToWellness from "@/components/sections/PathsToWellness";
import Testimonial from "@/components/sections/Testimonial";
import UseCases from "@/components/sections/UseCases";
import Steps from "@/components/sections/Steps";
import Features from "@/components/sections/Features";
import MediaLogos from "@/components/sections/MediaLogos";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PathsToWellness />
        <Testimonial />
        <UseCases />
        <Steps />
        <Features />
        <MediaLogos />
        <WhyChooseUs />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
