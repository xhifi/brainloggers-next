import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      serif: ["var(--font-serif)", "Georgia", "serif"],
      mono: ["var(--font-mono)", "Menlo", "monospace"],
    },
    extend: {
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "calc(1.2625rem + 0.15vw)",
        "2xl": "calc(1.2875rem + 0.45vw)",
        "3xl": "calc(1.3375rem + 1.05vw)",
        "4xl": "calc(1.425rem + 2.1vw)",
        "5xl": "calc(1.475rem + 2.7vw)",
        "display-1": "calc(6.25rem + 2.7vw)",
        "display-2": "calc(4.5rem + 2vw)",
        "display-3": "calc(4rem + 1.5vw)",
        "display-4": "calc(3.75rem + 1.2vw)",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        md: "0.3125rem",
        lg: "0.7125rem",
        xl: "1rem",
        "2xl": "2rem",
      },
      colors: {
        "primary-light": colors.zinc[500],
        primary: colors.zinc[900],
        "primary-dark": colors.black,

        "secondary-light": "#97a6c9",
        secondary: "#51596C",
        "secondary-dark": "#343945",

        light: colors.zinc[100],
        dark: colors.zinc[900],

        success: "#077C76",
        info: "#334AC0",
        warning: colors.yellow[300],
        error: "#692340",
      },
    },
  },
  plugins: [],
};
