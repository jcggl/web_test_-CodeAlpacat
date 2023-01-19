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
        "sub-grey": "rgba(130, 130, 130, 1)",
        "third-grey": "rgba(169, 169, 169, 1)",
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
          "100%": { top: "clamp(190px,52.778vw,228px)" },
        },
        padSlideDown: {
          "0%": { top: "0px" },
          "100%": { top: "clamp(251px,23.241vw,307px)" },
        },
        desktopSlideDown: {
          "0%": { top: "0px" },
          "100%": { top: "clamp(307px,15.99vw,360px)" },
        },
        mobileSlideUp: {
          "0%": { top: "clamp(500px,138.889vw,600px)" },
          "100%": { top: "clamp(344px,95.556vw,442.8px)" },
        },
        padSlideUp: {
          "0%": { top: "clamp(700px,64.815vw,900px)" },
          "100%": { top: "clamp(496px,45.926vw,690px)" },
        },
        desktopSlideUp: {
          "0%": { top: "clamp(950px,49.479vw,1050px)" },
          "100%": { top: "clamp(690px,35.938vw,828px)" },
        },
        zoomBlurIn: {
          "0%": { transform: "scale(200%, 200%)", filter: "blur(64px)" },
          "30%": { transform: "scale(150%, 150%)", filter: "blur(0px)" },
          "100%": { transform: "scale(100%, 100%)", filter: "blur(0px)" },
        },
        navSlideDown: {
          "0%": { transform: "translate3d(0,-100%,0)", opacity: 0 },
          "100%": { transform: "translate3d(0,0,0)", opacity: 1 },
        },
      },
    },
    transitionTimingFunction: {
      spring: "cubic-bezier(0,0,0.2,1)",
    },
    screens: {
      mobile: "340px",
      middleMobile: "510px",
      pad: "1080px",
      middlePad: "1250px",
      desktop: "1920px",
    },
  },
  plugins: [],
};
