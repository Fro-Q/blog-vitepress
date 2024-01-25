<script setup>
import { useData } from 'vitepress'
import { onMounted, onBeforeUnmount } from 'vue';
import Navbar from './components/Navbar.vue';
import HomePage from './components/HomePage.vue';
import PostPage from './components/PostPage.vue';

const { page, site, frontmatter } = useData()



</script>

<template>
  <div v-if="page.isNotFound">
    Custom 404 page!
  </div>

  <Navbar />

  <PostPage v-if="!frontmatter.home" />

  <HomePage v-else />

</template>
