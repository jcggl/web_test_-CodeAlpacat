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
        "main-black": "rgba(25, 25, 25, 1)",
        "main-white": "rgba(237, 237, 237, 1)",
        "font-black": "rgba(31, 31, 31, 1)",
      },
      fontFamily: {
        spline: ["Spline Sans", "Inter", "sans-serif"],
        inter: ["Inter", "Spline Sans", "sans-serif"],
      },
      keyframes: {
        fromBottom: {
          "0%": { top: "clamp(168px,50vh,700px)" },
          "100%": { top: "clamp(84px,19.53vh,227px)" },
        },
      },
    },
    transitionTimingFunction: {
      spring: "cubic-bezier(0,0,0.2,1)",
    },
    screens: {
      mobile: "340px",
      pad: "1080px",
      desktop: "1920px",
    },
  },
  plugins: [],
};
