<script setup>
import { data as posts } from './posts.data.js'
import { computed, ref } from 'vue'
import { watch } from 'vue'
import { getReadingTime } from '../utils/readTime'
import PostPage from './PostPage.vue';

// deal with long titles
const postsComputed = computed(() => {
  return posts.map(post => {
    const title = post.frontmatter.title
    const maxLength = 40
    if (title.length > maxLength) {
      post.frontmatter.title = title.slice(0, maxLength) + '...'
    }
    post.readingInfo = getReadingTime(post.src)
    return post
  })
})

const showExcerpt = ref(false)


</script>

<template>

  <PostPage />
  
  <div class="posts-wrapper">
    <div class="title">
      <h2 id="blog">Blog</h2>
      <div class="options">
        <!-- whether to show excerpt -->
        <label for="">
          <input type="checkbox" class="checkbox" id="show-excerpt" v-model="showExcerpt">
          <!-- Show Excerpt -->
          摘要
        </label>
  
      </div>
    </div>

    <div v-for="post of postsComputed" class="post-container">
      <div class="post-info">
        <a class="post-title" :href="post.url">{{ post.frontmatter.title }}</a>
        <div v-html="post.excerpt" class="post-excerpt" v-show="showExcerpt"></div>
      </div>
      <div class="post-other-info">
        <div class="post-date">{{ post.date.string }}</div>
        <div class="post-reading-info">
          <span class="post-reading-time">约{{ post.readingInfo.totalTime }}分钟</span>
          <span class="post-word-count">{{ post.readingInfo.wordCount }}字</span>
        </div>
      </div>
    </div>
  </div>
</template>