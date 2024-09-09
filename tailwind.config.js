/** @type {import('tailwindcss').Config} */

export default {
  // content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "selector",
  content: [
    "./docs/.vitepress/theme/**/*.{vue,js,ts,jsx,tsx}",
    "./docs/.vitepress/theme/Layout.vue",
  ],
  theme: {
    fontFamily: {
      sans: [
        "'Hiragino Sans GB'",
        "'Microsoft YaHei'",
        "'Helvetica Neue'",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      serif: [
        "ui-serif",
        "Georgia",
        "Cambria",
        "'Times New Roman'",
        "Times",
        "serif",
      ],
      mono: ["'MesloLGMDZ Nerd Font'", "Menlo", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
