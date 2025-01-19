// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import "./style.css";
import "@shikijs/vitepress-twoslash/style.css";

import { useRoute } from "vitepress";
import { nextTick, onMounted, watch } from "vue";
import mediumZoom from "medium-zoom";
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";

import Badge from "@theme/components/Badge.vue";
import Logo from "@theme/components/Logo.vue";
import StyledULink from "@theme/components/StyledULink.vue";

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component("Badge", Badge);
    app.component("Logo", Logo);
    app.component("StyledULink", StyledULink);
    app.use(TwoslashFloatingVue);
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
      () => nextTick(() => initZoom()),
    );
  },
};
