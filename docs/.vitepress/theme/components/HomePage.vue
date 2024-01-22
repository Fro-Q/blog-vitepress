<script setup>
import { data as posts } from './posts.data.js'
import { computed, ref } from 'vue'

// deal with long titles
const postsComputed = computed(() => {
  return posts.map(post => {
    const title = post.frontmatter.title
    const maxLength = 40
    if (title.length > maxLength) {
      post.frontmatter.title = title.slice(0, maxLength) + '...'
    }
    return post
  })
})

const showExcerpt = ref(false)

</script>

<template>
  <div class="posts-wrapper">
    <div class="title">
      <h1>Blog</h1>
      <div class="options">
        <!-- whether to show excerpt -->
        <label for="">
          <input type="checkbox" class="checkbox" id="show-excerpt" v-model="showExcerpt">
          Show Excerpt
        </label>
  
      </div>
    </div>

    <div v-for="post of postsComputed" class="post-container">
      <div class="post-info">
        <a class="post-title" :href="post.url">{{ post.frontmatter.title }}</a>
        <div v-html="post.excerpt" class="post-excerpt" v-show="showExcerpt"></div>
      </div>
      <div class="post-date">{{ post.date.string }}</div>
    </div>
  </div>
</template>