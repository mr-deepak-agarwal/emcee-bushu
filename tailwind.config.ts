import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F0",
        "cream-deep": "#F1E9DC",
        lavender: {
          50: "#F4F0FA",
          100: "#E8E0F4",
          200: "#D2C2E8",
          300: "#B8A2D9",
          400: "#9A7EC4",
          500: "#7E62A8",
          600: "#5B4A82",
          700: "#453761",
        },
        plum: "#2A2233",
        gold: "#C9A66B",
        blush: "#EFD9D2",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(3%, -4%) scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
