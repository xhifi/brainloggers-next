import colors from "tailwindcss/colors";
import svgToDataUri from "mini-svg-data-uri";

import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

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
  plugins: [addVariablesForColors, gridPlugin],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

function gridPlugin({ matchUtilities, theme }) {
  matchUtilities(
    {
      "bg-grid": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
        )}")`,
      }),
      "bg-grid-small": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
        )}")`,
      }),
      "bg-dot": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme("backgroundColor")), type: "color" },
  );
}
