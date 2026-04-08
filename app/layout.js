import "./globals.css";

export const metadata = {
  title: "iWILL 'til i'mWELL | Medical & Mental Healthcare",
  icons: {
    icon: "images/logo-favi.svg",
    shortcut: "images/logo-favi.svg",
    apple: "images/logo-favi.svg",
  },
  description:
    "Access doctors, therapists, and board-certified providers on your terms. Self-care is the new healthcare. Simple, affordable, and on your time.",
  keywords: [
    "telehealth",
    "mental health",
    "medical care",
    "behavioral health",
    "online therapy",
    "virtual healthcare",
    "wellness",
  ],
  openGraph: {
    title: "iWILL 'til i'mWELL | Medical & Mental Healthcare",
    description:
      "Access doctors, therapists, and board-certified providers on your terms. Simple, affordable, and on your time.",
    url: "https://iwilltilimwell.com",
    siteName: "iWILL 'til i'mWELL",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "iWILL 'til i'mWELL | Medical & Mental Healthcare",
    description:
      "Access doctors, therapists, and board-certified providers on your terms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
