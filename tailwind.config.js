/** @type {import('tailwindcss').Config} */

const path = require("path");

const pxToRem = (px, base = 16) => `${px / base}rem`;
const spacing = {
  ...Array.from(Array(2000))
    .map((_, i) => i + 1)
    .reduce((acc, px) => {
      acc[`${px}pxr`] = pxToRem(px);
      return acc;
    }, {}),
};

module.exports = {
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [path.join(__dirname, "./src/**/*.(js|jsx|ts|tsx)")],
  theme: {
    extend: {
      spacing,
      colors: {
        "nav-black": "rgba(25, 25, 25, 1)",
        "nav-white": "rgba(237, 237, 237, 1)",
      },
    },
  },
  plugins: [],
};
