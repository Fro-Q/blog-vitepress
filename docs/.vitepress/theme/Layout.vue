<script setup>
import { useData } from 'vitepress'
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import HomePage from './components/HomePage.vue';
import PostPage from './components/PostPage.vue';
import Footer from './components/Footer.vue';
import NotFound from './components/NotFound.vue';

const { page, frontmatter } = useData()

// back to top button
const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
      if (window.scrollY > 600) {
        backToTopButton.style.opacity = '1';
      } else {
        backToTopButton.style.opacity = '0';
      }
    }
  });
});

</script>

<template>
  <Navbar />

  <PostPage v-if="!frontmatter.home && !page.isNotFound" />

  <NotFound v-else-if="page.isNotFound" />

  <HomePage v-else />

  <Footer />

  <button id="back-to-top" title="Back to top" @click="backToTop">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up">
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <line x1="5" y1="12" x2="12" y2="5"></line>
      <line x1="19" y1="12" x2="12" y2="5"></line>
    </svg>
  </button>
</template>
