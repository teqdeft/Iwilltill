"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Medical", href: "/" },
  {
    label: "Counseling",
    href: "/counseling",
    children: [
      { label: "Individual Therapy", href: "/counseling/individual" },
      { label: "Couples Therapy", href: "/counseling/couples" },
      { label: "Family Therapy", href: "/counseling/family" },
    ],
  },
  {
    label: "TeleVet Pet",
    href: "/TeleVet",
  },
  { label: "EAP", href: "/EAP" },
  { label: "Pricing", href: "/Pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full z-50 sticky top-0">
      {/* Announcement Bar */}
      <div className="announcement-bar text-white text-xs py-2 text-center section-padding">
        <p>
        Confidential virtual care | Medical, Behavioral | TeleVet support — for individuals, families, and employees.
         
          |
          <a href="/services" className="font-semibold hover:underline">
            View services and providers
          </a>
        </p>
      </div>

      {/* Main Nav */}
      <nav className="section-padding"
      style={{ background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)" }}>
        <div className="container-main flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0" aria-label="Home">
            <Image
              src="/images/logo-white.svg"
              alt="iWILL 'til i'mWELL"
              width={200}
              height={48}
              className="h-16 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white hover:text-primary rounded-lg hover:bg-primary-50 transition-colors"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </a>
                {link.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-primary-50 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
           <Button variant="white" size="sm" href="/get-started">
              Login
            </Button>
            <Button variant="primary" size="sm" href="/get-started">
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-1 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 px-4">
              <Button variant="primary" className="w-full" href="/get-started">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
