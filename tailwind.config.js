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
          "0%": { top: "0vh" },
          "100%": { top: "clamp(190px,29.688vh,100vh)" },
        },
        padSlideDown: {
          "0%": { top: "0vh" },
          "100%": { top: "clamp(251px,32.682vh,100vh)" },
        },
        desktopSlideDown: {
          "0%": { top: "0vh" },
          "100%": { top: "clamp(307px,28.426vh,100vh)" },
        },
        mobileSlideUp: {
          "0%": { top: "80vh" },
          "100%": { top: "clamp(344px,53.750vh,100vh)" },
        },
        padSlideUp: {
          "0%": { top: "80vh" },
          "100%": { top: "clamp(496px,64.583vh,100vh)" },
        },
        desktopSlideUp: {
          "0%": { top: "80vh" },
          "100%": { top: "clamp(690px,63.889vh,100vh)" },
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
