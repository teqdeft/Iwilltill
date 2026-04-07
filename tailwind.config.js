/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f2f8",
          100: "#ece6f1",
          200: "#d4c8de",
          300: "#b5a3c5",
          400: "#947ea8",
          500: "#7d6595",
          600: "#6d578e",
          700: "#5a4775",
          800: "#473962",
          900: "#352b4a",
          DEFAULT: "#6d578e",
        },
        accent: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          DEFAULT: "#22c55e",
        },
        brand: {
          purple: "#6d578e",
          "purple-dark": "#6d578e",
          "purple-light": "#6d578e",
          green: "#22c55e",
          "green-dark": "#16a34a",
          dark: "#6d578e",
          gray: "#f8f9fa",
        },
      },
      fontFamily: {
        heading: ['"DM Sans"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        script: ['"Dancing Script"', "cursive"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #6d578e 0%, #6d578e 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #6d578e 0%, #6d578e 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
