import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-elevated": "var(--bg-elevated)",
        text: "var(--text)",
        "text-secondary": "var(--text-secondary)",
        accent: "var(--accent)",
        border: "var(--border)",
        card: "var(--card)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        lg: "20px",
        md: "14px",
        sm: "10px",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(30px, -20px) scale(1.08)" },
        },
        pulseDot: {
          "0%, 100%": { transform: "scale(0.7)", opacity: "0.5" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
        },
      },
      animation: {
        floatSlow: "floatSlow 14s ease-in-out infinite",
        pulseDot: "pulseDot 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
