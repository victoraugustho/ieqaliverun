import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        acid: "#cbd91c",
        gold: "#ffd200",
        asphalt: "#192726",
      },
      fontFamily: {
        placard: ["var(--font-placard)", "Impact", "Arial Narrow", "sans-serif"],
        bluscreens: ["var(--font-bluscreens)", "Arial", "sans-serif"],
      },
      boxShadow: {
        "race-glow": "0 0 50px rgba(203, 217, 28, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
