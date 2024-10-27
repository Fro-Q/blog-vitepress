export default {
  // config options
  build: {
    rollupOptions: {
      external: [".vitepress/theme/utils/selfDescription.js"],
    },
  },
};
