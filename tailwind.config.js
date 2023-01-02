const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SUIT Variable", ...fontFamily.sans],
        head: ["Meraki", ...fontFamily.sans],
      },
      animation: {
        left: "left 0.5s ease-in-out",
        "left-out": "left-out 0.5s ease-in-out",
      },
      keyframes: {
        left: {
          "0%": { transform: "translateX(10%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "left-out": {
          "0%": { opacity: 1 },
          "100%": { transform: "translateX(-10%)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
