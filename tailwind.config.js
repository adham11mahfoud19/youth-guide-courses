/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bluePrime:"#1bb5d3",
        greenPrime:"#1cdcc5",
        greenBox: "#27DEBF",
        darkbg: "#181818",
        trns: "#c3f7ef",
        grayPrime: "#061E23"
      }
      
    },
  },
  plugins: [],
};
