import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  "Care Services": [
    { label: "Medical Care", href: "/services/medical" },
    { label: "Behavioral Health", href: "/services/behavioral" },
    { label: "TeleVet Pet Care", href: "/services/televet" },
    { label: "Family Care", href: "/services/family" },
    { label: "Crisis Support", href: "/services/crisis" },
    { label: "Prescription Refills", href: "/services/prescriptions" },
  ],
  "For Employers": [
    { label: "Employee Wellness", href: "/employers" },
    { label: "Engagement Plans", href: "/employers/plans" },
    { label: "ROI Calculator", href: "/employers/roi" },
    { label: "Key Features & Health", href: "/employers/features" },
    { label: "Admin Dashboard", href: "/employers/dashboard" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Help Center", href: "/help" },
    { label: "FAQs", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],
};

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-white section-padding">
      <div className="container-main">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 py-12 md:py-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-5">
              <Image
                src="/images/IWTIWLogo.svg"
                alt="iWILL 'til i'mWELL"
                width={180}
                height={44}
                className="h-16 w-auto"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              iWILL &apos;til i&apos;mWELL is a nationwide telehealth platform
              offering medical, behavioral health, and veterinary care.
              Connect with trusted providers whenever you need them.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:info@iwilltilimwell.com"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@iwilltilimwell.com
              </a>
              <a
                href="tel:+18001234567"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                1-800-123-4567
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Nationwide Telehealth Services</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} iWILL &apos;til i&apos;mWELL.
            All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </a>
            <div className="flex items-center gap-3 ml-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-500 hover:text-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
