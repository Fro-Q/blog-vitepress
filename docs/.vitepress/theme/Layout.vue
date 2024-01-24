<script setup>
import { useData } from 'vitepress'
import { onMounted, onBeforeUnmount } from 'vue'
import Navbar from './components/Navbar.vue';
import HomePage from './components/HomePage.vue';
import PostPage from './components/PostPage.vue';

const { page, site, frontmatter } = useData()

// when scroll position is at the top, prevent the page from scrolling

let lastScrollTop = 0

const preventScroll = (event) => {
  const st = window.scrollY || document.documentElement.scrollTop
  if (st > lastScrollTop && st === 0) {
    event.preventDefault()
  }
  lastScrollTop = st <= 0 ? 0 : st
}

onMounted(() => {
  window.addEventListener('scroll', preventScroll, { passive: false })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', preventScroll)
})

</script>

<template>

  <div v-if="page.isNotFound">
    Custom 404 page!
  </div>

  <Navbar />

  <PostPage />

  <HomePage v-if="frontmatter.home" />

</template>
