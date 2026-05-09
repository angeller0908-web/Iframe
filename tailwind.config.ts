import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f1117",
        panel: "#1a1f2b",
        text: "#e5e7eb",
        muted: "#9ca3af",
        accent: "#22d3ee",
        accentDark: "#0891b2"
      },
      boxShadow: {
        panel: "0 8px 28px rgba(0, 0, 0, 0.32)"
      }
    }
  },
  plugins: []
};

export default config;
