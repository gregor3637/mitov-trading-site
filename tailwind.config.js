/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "rgba(var(--color-accent1) / <alpha-value>)",
          2: "rgba(var(--color-accent2) / <alpha-value>)",
        },
        bkg: "rgba(var(--color-bkg) / <alpha-value>)",
        content: "rgba(var(--color-content) / <alpha-value>)",
      },
      animation: {
        "spin-slower": "spin 35s ease infinite",
        "spin-slow": "spin 25s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [],
}

