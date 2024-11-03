<script setup>
import { useData } from "vitepress";
import { onMounted, watch } from "vue";

import Navbar from "@theme/components/Navbar.vue";
import HomePage from "@theme/components/HomePage.vue";
import PostPage from "@theme/components/PostPage.vue";
import Footer from "@theme/components/Footer.vue";
import NotFound from "@theme/components/NotFound.vue";
import BtnTop from "@theme/components/BtnTop.vue";

import { navUtils } from "@theme/utils/navUtils";

const { page, frontmatter } = useData();

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    const backToTopButton = document.getElementById("back-to-top");
    if (backToTopButton) {
      if (window.scrollY > 600) {
        backToTopButton.style.opacity = "1";
      } else {
        backToTopButton.style.opacity = "0";
      }
    }
  });

  const isDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  navUtils.updateDarkMode(isDarkScheme.matches);

  isDarkScheme.addEventListener("change", (event) => {
    navUtils.updateDarkMode(event.matches);
    // add class to html element
    document.documentElement.classList.toggle("dark", event.matches);
  });

  // add listener for navUtils.darkMode
  watch(
    navUtils,
    (newVal) => {
      // add class to html element
      document.documentElement.classList.toggle("dark", newVal.darkMode);
      document.documentElement.classList.toggle("color", newVal.colorMode);
    },
    { immediate: true },
  );
});
</script>

<template>
  <Navbar />

  <PostPage v-if="frontmatter.category !== '扉' && !page.isNotFound" />

  <NotFound v-else-if="page.isNotFound" />

  <HomePage v-else-if="frontmatter.category === '扉'" />

  <Footer />

  <BtnTop
    @btnClick="backToTop"
    id="back-to-top"
  />
</template>
