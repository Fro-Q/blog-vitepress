// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import './style.scss'
import { useRoute } from "vitepress";
import { nextTick, onMounted, watch } from "vue";
import mediumZoom from "medium-zoom";

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom("#content p img", {
        background: "var(--bg-color)",
        container: document.body,
      });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
}
