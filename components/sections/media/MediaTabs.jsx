"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import PodcastContent from "@/components/sections/media/PodcastContent";
import KnowledgeLibrary from "@/components/sections/media/KnowledgeLibrary";
import BlogsContent from "@/components/sections/media/BlogsContent";
import BrochuresContent from "@/components/sections/media/BrochuresContent";
import ArticlesContent from "@/components/sections/media/ArticlesContent";
import InspirationalContent from "@/components/sections/media/InspirationalContent";

const tabs = [
  { id: "podcast", label: "Podcast", component: PodcastContent },
  { id: "knowledge", label: "Knowledge Library", component: KnowledgeLibrary },
  { id: "blogs", label: "Blogs", component: BlogsContent },
  { id: "brochures", label: "Brochures", component: BrochuresContent },
  
  { id: "inspirational", label: "Inspirational", component: InspirationalContent },
];

export default function MediaTabs() {
  const [activeTab, setActiveTab] = useState("podcast");

  const activeTabData = tabs.find((t) => t.id === activeTab);
  const ActiveComponent = activeTabData?.component;

  return (
    <>
      {/* Dynamic Hero */}
      <section
        className="relative overflow-hidden h-[280px] md:h-[320px]"
        style={{
          background: "linear-gradient(135deg, #4a3260 0%, #604376 100%)",
        }}
      >
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-15 -translate-y-1/2 translate-x-1/4 pointer-events-none hidden lg:block">
          <img
            src="/images/logo-favi.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative h-full container-main section-padding flex flex-col justify-center items-center text-center">
          <h1
            key={activeTab}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight animate-fade-in"
            style={{ fontFamily: "serif" }}
          >
            {activeTabData?.label}
          </h1>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="section-padding py-12 md:py-16 bg-white">
        <div className="container-main max-w-6xl">
          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-14">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-600 hover:text-primary hover:bg-primary-50"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Component */}
          <div key={activeTab} className="min-h-[400px] animate-fade-in">
            {ActiveComponent && <ActiveComponent />}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </>
  );
}