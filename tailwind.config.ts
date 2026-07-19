import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#14181B",
          light: "#1D2226",
        },
        graphite: {
          DEFAULT: "#3A4147",
          light: "#5B646B",
        },
        brand: {
          DEFAULT: "#1E6B45",
          bright: "#2F9461",
          dark: "#154D32",
        },
        fog: "#F4F5F6",
        line: "#E3E5E7",
        amber: "#D98A2B",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,24,27,0.04), 0 8px 24px -12px rgba(20,24,27,0.12)",
        cardHover: "0 4px 10px rgba(20,24,27,0.06), 0 20px 40px -16px rgba(20,24,27,0.18)",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
