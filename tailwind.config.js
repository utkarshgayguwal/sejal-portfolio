/** @type {import('tailwindcss').Config} */
const c = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Colors are RGB-channel CSS variables set from `theme` in src/data.jsx
      // (so opacity modifiers like bg-peach/60 work)
      colors: {
        navy: c("--navy"),
        "navy-light": c("--navy-light"),
        peach: c("--peach"),
        "peach-dark": c("--peach-dark"),
        cream: c("--cream"),
        gold: c("--gold"),
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        script: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
