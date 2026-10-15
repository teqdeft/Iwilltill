"use client";

import { useState, useEffect } from "react";
import styles from "./PageLoader.module.css";

// Shows for 2s on the first page a visitor opens in a browser session.
// The fade-out is timed in CSS (PageLoader.module.css) so it runs from first
// paint, even before React loads. On later page loads in the same session,
// the inline script in app/layout.js adds "loader-seen" to <html>, which hides
// the loader before it paints.
export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.documentElement.classList.contains("loader-seen")) {
      setIsLoading(false);
      return;
    }

    // Remove from the DOM once the CSS fade-out has finished
    const removeTimer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(removeTimer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`${styles.loader} fixed inset-0 z-[9999] flex items-center justify-center`}
      style={{
        background: "linear-gradient(135deg, #604376 0%, #AC73B9 100%)",
      }}
    >
      {/* Floating ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`${styles.pulseSlow} absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl`}
        />
        <div
          className={`${styles.pulseSlower} absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl`}
        />
      </div>

      {/* Main loader content */}
      <div
        className="relative flex flex-col items-center gap-8"
        aria-hidden="true"
      >
        {/* Lotus logo with animated rings */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outer rotating ring */}
          <div
            className={`${styles.spinSlow} absolute inset-0 rounded-full border-2 border-white/20`}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
          </div>

          {/* Middle pulsing ring */}
          <div
            className={`${styles.pingSlow} absolute inset-3 rounded-full border border-white/30`}
          />

          {/* Inner ring */}
          <div
            className={`${styles.pulseBreath} absolute inset-6 rounded-full bg-white/10 backdrop-blur-sm`}
          />

          {/* Lotus logo */}
          <img
            src="/images/logo-favi.svg"
            alt=""
            className={`${styles.float} relative w-16 h-16 object-contain`}
          />
        </div>

        {/* Brand name (not a heading, so it stays out of the page outline) */}
        <div className={`${styles.fadeInUp} text-center`}>
          <p className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
            iWILL <span className="text-accent">'til i'mWELL</span>
          </p>
          <p className="text-sm text-white/70 tracking-wider uppercase">
            Medical & Mental Healthcare
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className={`${styles.progress} h-full bg-gradient-to-r from-accent to-white/80 rounded-full`}
          />
        </div>
      </div>
    </div>
  );
}
