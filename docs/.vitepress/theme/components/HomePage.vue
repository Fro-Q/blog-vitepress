<script setup>
import { data as posts } from "./posts.data.js";
import { computed, ref } from "vue";
import PostPage from "./PostPage.vue";
import Contact from "./Contact.vue";
import { Content } from "vitepress";

const showExcerpt = ref(false);
</script>

<template>
  <div class="post-wrapper">
    <Content
      class="content-wrapper"
      id="home"
    />
  </div>

  <div class="posts-wrapper">
    <div class="title">
      <h2 id="blog">Blog</h2>
      <div class="options">
        <!-- whether to show excerpt -->
        <label for="">
          <input
            type="checkbox"
            class="checkbox"
            id="show-excerpt"
            v-model="showExcerpt"
          />
          <!-- Show Excerpt -->
          摘要
        </label>
      </div>
    </div>

    <div
      v-for="post of posts"
      class="post-container"
    >
      <div class="post-info">
        <a
          class="post-title"
          :href="post.url"
        >
          {{ post.frontmatter.title }}
        </a>
        <div
          v-html="post.excerpt"
          class="post-excerpt"
          v-show="showExcerpt"
        ></div>
      </div>
      <div class="post-other-info">
        <div class="post-date">{{ post.date.string }}</div>
        <div class="post-reading-info">
          <span class="post-reading-time">
            约{{ post.readingInfo.totalTime }}分钟
          </span>
          <span class="post-word-count">
            {{ post.readingInfo.wordCount }}字
          </span>
        </div>
      </div>
    </div>
  </div>
  <Contact></Contact>
</template>

<style lang="scss">
#home {
  font-size: 1.8rem;
  font-weight: 600;
  height: calc(100vh - 100px);

  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
</style>
