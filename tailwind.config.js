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
    },
  },
  plugins: [],
};
