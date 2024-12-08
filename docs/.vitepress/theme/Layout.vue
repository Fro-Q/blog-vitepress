<script setup>
import { useData } from "vitepress";
import { onMounted, watch } from "vue";

import Navbar from "@theme/components/Navbar.vue";
import HomePage from "@theme/components/HomePage.vue";
import PostPage from "@theme/components/PostPage.vue";
import Footer from "@theme/components/Footer.vue";
import NotFound from "@theme/components/NotFound.vue";
import BtnArrow from "@theme/components/BtnArrow.vue";

import { navUtils } from "@theme/utils/navUtils";

const { page, frontmatter } = useData();

const ScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollToBottom = () => {
  const contentWrapperBottom = document.getElementById("content").offsetTop + document.getElementById("content").offsetHeight - window.innerHeight / 2;
  window.scrollTo({
    top: contentWrapperBottom,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    const backToTopButton = document.getElementById("btn-to-top");
    if (backToTopButton) {
      if (window.scrollY > 600) {
        backToTopButton.style.opacity = "1";
      } else {
        backToTopButton.style.opacity = "0";
      }
    }
  });

  window.addEventListener("scroll", () => {
    const backToBottomButton = document.getElementById("btn-to-bottom");
    if (backToBottomButton) {
      if (window.scrollY < document.body.scrollHeight - window.innerHeight - 600) {
        backToBottomButton.style.opacity = "1";
      } else {
        backToBottomButton.style.opacity = "0";
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

  <div
    id="btn-wrapper"
    class="fixed bottom-4 left-4 z-50 flex w-8 flex-col items-center justify-center"
  >
    <BtnArrow
      @btnClick="ScrollToTop"
      id="btn-to-top"
    />
    <BtnArrow
      @btnClick="ScrollToBottom"
      id="btn-to-bottom"
      class="rotate-180 transform"
    />
  </div>
</template>
