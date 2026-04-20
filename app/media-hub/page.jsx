import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MediaTabs from "@/components/sections/media/MediaTabs";


export const metadata = {
  title: "Podcast | iWILL 'til i'mWELL",
  icons: {
    icon: "./../images/logo-favi.svg",
    shortcut: "./../images/logo-favi.svg",
    apple: "./../images/logo-favi.svg",
  },
  description:
    "Explore iWILL 'til i'mWELL podcasts, knowledge library, blogs, brochures, articles, and inspirational content.",
};

export default function PodcastPage() {
  return (
    <>
      <Navbar />
      <main>
        <MediaTabs />
      </main>
      <Footer />
    </>
  );
}