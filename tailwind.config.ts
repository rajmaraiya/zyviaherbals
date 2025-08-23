import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/styles/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1.25rem" },
    extend: {
      colors: {
        ink: "#0B0B0C",
        charcoal: "#121212",
        gold: "#D4AF37",
        "gold-soft": "#E5C76B",
        cream: "#F5EFE6",
        eucalyptus: "#D6E8DF",
        ash: "#777777",
        sand: "#E8DCBF",
      },
      borderRadius: {
        DEFAULT: "1rem",     // rounded-2xl default
        card: "1.5rem",      // rounded-3xl for cards
      },
      boxShadow: {
        ambient: "0 10px 30px rgba(0,0,0,0.08)",              // soft ambient
        "edge-highlight": "inset 0 1px 0 rgba(255,255,255,0.2), 0 20px 40px rgba(0,0,0,0.15)", // premium edge
      },
      transitionTimingFunction: {
        // motion tokens (easing)
        "elegant": "cubic-bezier(0.22, 1, 0.36, 1)",
        "snap": "cubic-bezier(0.15, 1.1, 0.3, 1)",
      },
      transitionDuration: {
        // motion tokens (durations)
        "fast": "150ms",
        "base": "250ms",
        "slow": "450ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms elegant both",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        ui: ["var(--font-inter)", "system-ui", "sans-serif"],
        mont: ["var(--font-montserrat)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
