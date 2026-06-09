import Script from "next/script";
// import PageLoader from "@/components/layout/PageLoader";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://iwilltilimwell.com"),
  title: "iWILL 'til i'mWELL | Medical & Mental Healthcare",
  icons: {
    icon: "/images/logo-favi.svg",
    shortcut: "/images/logo-favi.svg",
    apple: "/images/logo-favi.svg",
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NGFWMV3B');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGFWMV3B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* <PageLoader /> */}
        {children}
      </body>
    </html>
  );
}
