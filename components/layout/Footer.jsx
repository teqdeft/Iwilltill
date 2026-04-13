import Image from "next/image";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

const quickLinks = [
  { label: "Join the Mission", href: "/join-the-mission" },
  { label: "Speak to a Therapist", href: "/counseling/counseling-care-services" },
  { label: "Speak to a Veterinarian", href: "/televet" },
  { label: "Request a Demo", href: "/request-a-demo" },
  { label: "Enterprise EAP", href: "/eap/enterprise-eap" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Insurance Disclaimer", href: "/insurance-disclaimer" },
];

const certifications = [
  { name: "WBENC Certified", image: "/images/footer/wbenc-new-v1.png" },
  { name: "SBA WOSB Certified", image: "/images/footer/wosb-logo-v2.png" },
  { name: "HIPAA Compliant", image: "/images/footer/hipaa-logo-new-v2.png" },
  { name: "BBB Accredited Business", image: "/images/footer/bbb-logo-v1.png" },
  { name: "USPCC Certified", image: "/images/footer/verified-vendor-seal-2025-med.png" },
];

export default function Footer() {
  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #604376 0%, #6d4f85 100%)",
      }}
    >
      {/* Decorative lotus */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-10 -translate-y-1/2 translate-x-1/4 pointer-events-none hidden lg:block">
        <img
          src="/images/logo-favi.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative section-padding">
        <div className="container-main">
          {/* Main Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-10 lg:gap-12 py-14 md:py-20">
            {/* Left Column - Verification & Disclaimer */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white inline-block border-b-2 border-white/40 pb-1.5 mb-5">
                We are officially verified.
              </h3>

              <p className="text-sm text-white/85 leading-relaxed mb-5">
                Our verification confirms authenticity and trust.
                <br />
                Customers can confidently engage with us, knowing we meet all
                required standards for reliability and security.
              </p>

              {/* State Licensing Disclosure */}
              <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white/40 rounded-r-lg px-4 py-3 mb-5">
                <p className="text-sm text-white/90 leading-relaxed">
                  State Licensing Disclosure — disclosure that services are
                  available in all 50 states
                </p>
              </div>

              {/* Mandatory Disclaimer Card */}
              <div className="bg-[#fdf6dc] rounded-xl p-5 text-gray-800">
                <h4 className="text-base font-bold text-gray-900 inline-block border-b-2 border-primary pb-1 mb-3">
                  Mandatory Disclaimer
                </h4>
                <p className="text-[13px] leading-relaxed mb-3">
                  <Link
                    href="/"
                    className="text-primary font-semibold hover:underline"
                  >
                    iwilltilimwell.com
                  </Link>{" "}
                  does not sell, dispense, ship, or fulfill prescription drugs
                  or pharmaceutical products of any kind. We provide:
                </p>
                <ol className="space-y-1.5 text-[13px] leading-relaxed list-decimal ml-4 mb-3 marker:text-gray-600">
                  <li>Virtual general medical consultations.</li>
                  <li>Mental health and behavioral health consultations.</li>
                  <li>Pet and veterinary consultations.</li>
                  <li>
                    Membership access to third-party drug discount programs
                    that members may use at participating pharmacies.
                  </li>
                </ol>
                <p className="text-[13px] leading-relaxed">
                  All services are subscription-based access. No pharmaceutical
                  products are sold or fulfilled.
                </p>
              </div>
            </div>

            {/* Middle Column - Quick Links */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white inline-block border-b-2 border-white/40 pb-1.5 mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/90 hover:text-accent transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - QR Code & Certifications */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white inline-block border-b-2 border-white/40 pb-1.5 mb-5">
                Scan to Visit Our Website
              </h3>

              {/* QR Code (placeholder) */}
              <div className="bg-white rounded-xl p-3 inline-block mb-4">
                <img
                  src="/images/footer/iwilltilimwell-qr.png"
                  alt="QR code to visit website"
                  className="w-32 h-32 object-contain"
                />
              </div>

              {/* Email */}
              <Link
                href="mailto:support@iwilltilimwell.com"
                className="flex items-center gap-2 text-sm text-white/90 hover:text-accent transition-colors mb-5"
              >
                <Mail className="w-4 h-4" />
                support@iwilltilimwell.com
              </Link>

              {/* Login & Get Started Buttons */}
              <div className="flex gap-3 mb-6">
                <Button variant="white" size="sm" href="/login">
                  Login
                </Button>
                <Button variant="white" size="sm" href="/get-started">
                  Get Started
                </Button>
              </div>

              {/* Certification Badges */}
              <div className="grid grid-cols-3 gap-2.5 max-w-[260px]">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="rounded-md p-2 flex items-center justify-center aspect-[3/2] hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/15">
            <p className="text-xs text-white/70">
              &copy; {new Date().getFullYear()} iWILL &apos;til i&apos;mWELL.
              All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>HIPAA Compliant &middot; Licensed Providers &middot; Secure</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}