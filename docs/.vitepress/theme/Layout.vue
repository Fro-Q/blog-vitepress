<script setup>
import { useData } from "vitepress";
import { onMounted } from "vue";
import Giscus from "@giscus/vue";

import Navbar from "./components/Navbar.vue";
import HomePage from "./components/HomePage.vue";
import PostPage from "./components/PostPage.vue";
import Footer from "./components/Footer.vue";
import NotFound from "./components/NotFound.vue";
import BtnTop from "./components/BtnTop.vue";

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
});
</script>

<template>
  <Navbar />

  <PostPage v-if="frontmatter.category !== '扉' && !page.isNotFound" />

  <NotFound v-else-if="page.isNotFound" />

  <HomePage v-else-if="frontmatter.category === '扉'" />

  <Giscus
    src="https://giscus.app/client.js"
    repo="Fro-Q/Fro-Q.github.io"
    repo-id="R_kgDOLISyuA"
    category-id="DIC_kwDOLISyuM4CihU7"
    mapping="url"
    strict="0"
    reactions-enabled="1"
    emit-metadata="0"
    input-position="top"
    theme="light"
    lang="zh-CN"
    crossorigin="anonymous"
    class="relative m-auto min-h-screen w-[calc(100%-60px)] max-w-[700px] items-center text-xl/10"
    async
  ></Giscus>

  <Footer />

  <BtnTop
    @btnClick="backToTop"
    id="back-to-top"
  />
</template>
