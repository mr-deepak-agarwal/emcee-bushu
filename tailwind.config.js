/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F5",
        pearl: "#FFFFFF",
        gold: "#C8A96B",
        "gold-light": "#DFC08A",
        "gold-dark": "#A8893B",
        charcoal: "#1B1B1B",
        beige: "#F4EFE8",
        "warm-gray": "#6D6D6D",
        "dark-bg": "#0E0E0E",
        "dark-surface": "#161616",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        playfair: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        ping2: "ping2 2s ease infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        ping2: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
