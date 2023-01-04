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
        "main-grey": "rgba(170, 170, 170, 0.8)",
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
        mobileSlideDown: {
          "0%": { top: "0px" },
          "100%": { top: "clamp(213px,59.167vw,229px)" },
        },
        padSlideDown: {
          "0%": { top: "0px" },
          "100%": { top: "clamp(229px,21.204vw,295px)" },
        },
        desktopSlideDown: {
          "0%": { top: "0px" },
          "100%": { top: "clamp(295px,15.365vw,350px)" },
        },
        mobileSlideUp: {
          "0%": { top: "88%" },
          "100%": { top: "clamp(386px,107.222vw,524px)" },
        },
        padSlideUp: {
          "0%": { top: "88%" },
          "100%": { top: "clamp(524px,48.519vw,741px)" },
        },
        desktopSlideUp: {
          "0%": { top: "88%" },
          "100%": { top: "clamp(741px,38.594vw,1000px)" },
        },
        zoomBlurIn: {
          "0%": { transform: "scale(150%, 150%)", filter: "blur(64px)" },
          "100%": { transform: "scale(100%, 100%)", filter: "blur(0px)" },
        },
        navSlideDown: {
          "0%": { transform: "translate3d(0,-100%,0)", opacity: 0 },
          "100%": { transform: "translate3d(0,0,0)", opacity: 1 }
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
