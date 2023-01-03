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
        "main-grey": "rgba(170, 170, 170, 0.8)"
      },
      fontFamily: {
        spline: ["Spline Sans", "Inter", "sans-serif"],
        inter: ["Inter", "Spline Sans", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
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
