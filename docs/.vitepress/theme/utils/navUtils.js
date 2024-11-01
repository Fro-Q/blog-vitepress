import { reactive } from "vue";

function queryDarkMode() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export const navUtils = reactive({
  darkMode: true,
  updateDarkMode: (darkMode) => {
    navUtils.darkMode = darkMode;
  },
  colorMode: true,
  updateColorMode: (colorMode) => {
    navUtils.colorMode = colorMode;
  },
});
