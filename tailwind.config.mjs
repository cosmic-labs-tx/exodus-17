const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: colors.transparent,
      black: "#222222",
      white: colors.white,
      gray: colors.gray,
      zinc: colors.zinc,
      // brand colors
      linen: "#faf3ef",
      green: "#447d7e",
      purple: "#4b4e6d",
    },
  },
};
