/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /[wh]-(1|2|3|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|px)/,
    },
    {
      pattern: /[wh]-(1\/2|2\/3|3\/4|4\/5|5\/6|11\/12|full)/,
    },
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2A3D66",
          100: "#ebeff7",
          200: "#c3cee6",
          300: "#9badd6",
          400: "#738dc5",
          500: "#4a6cb5",
          600: "#3a548c",
          700: "#293c64",
          800: "#19243c",
          900: "#090c14",
        },
        secondary: { light: "#f4ece3", dark: "#443721" },
        accent: {
          light: "#ac6a46",
          dark: "#DEBEAD",
          100: "#f7efeb",
          200: "#e6cfc3",
          300: "#e6cfc3",
          400: "#d6af9a",
          500: "#c69072",
          600: "#8d5739",
          700: "#653e29",
          800: "#3c2519",
          900: "#140c08",
        },
        background: {
          light: "#faf9f8",
          dark: "#121217",
          "light-50": "#faf8f7",
          "light-75": "#f3f2f0",
          "light-100": "#efebe7",
          "light-150": "#e4ddd7",
          "light-200": "#d9d0c7",
          "light-250": "#cfc3b7",
          "light-300": "#c4b5a6",
          "dark-950": "#060608",
          "dark-900": "#121217",
          "dark-875": "#1f1f28",
          "dark-850": "#1d1d26",
          "dark-800": "#292935",
          "dark-750": "#353544",
          "dark-700": "#414153",
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -30px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 10px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      boxShadow: {
        sm: "0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -2px rgb(0 0 0 / 0.1)",
        md: "0 0 15px -3px rgb(0 0 0 / 0.1), 0 0 6px -4px rgb(0 0 0 / 0.1)",
        lg: "0 0 25px -5px rgb(0 0 0 / 0.1), 0 0 10px -6px rgb(0 0 0 / 0.1)",
        xl: "0 0 50px -12px rgb(0 0 0 / 0.25)",
      },
      height: {
        "11/12": "91.666667%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
