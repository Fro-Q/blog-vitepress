export default {
  // config options
  build: {
    rollupOptions: {
      external: ["./docs/.vitepress/theme/utils/selfDescription.js"],
    },
  },
};
