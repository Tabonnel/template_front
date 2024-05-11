import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { colors } from "./src/app/[lang]/components/theme/colors";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
      roboto: ["var(--font-roboto)"],
    },
    extend: {
      colors,
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addComponents }) => {
      addComponents({
        ".text-h1": {
          "@apply text-[2.25rem] lg:text-[3rem] font-bold": "",
        },

        ".text-h2": {
          "@apply text-[1.875rem] lg:text-[2.25rem] font-semibold": "",
        },

        ".text-h3": {
          "@apply text-[1.5rem] lg:text-[1.75rem] font-semibold": "",
        },

        ".text-h4": {
          "@apply text-[1.25rem] lg:text-[1.5rem] font-medium": "",
        },

        ".text-body": {
          "@apply text-base lg:text-lg font-normal": "",
        },

        ".text-label": {
          "@apply text-sm lg:text-base font-medium": "",
        },
      });
    }),
  ],
} satisfies Config;

export default config;
