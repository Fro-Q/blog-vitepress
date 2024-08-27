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

  <div class="table-of-contents">
    <h2>目录</h2>
    <ul>
      <li>
        <a href="#blog">Blog</a>
      </li>
    </ul>
  </div>

  <div class="posts-list-wrapper">
    <div class="posts-list-title">
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
@import "../style.scss";

#home {
  font-size: 1.8rem;
  font-weight: 600;
  height: calc(100vh - 100px);

  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.table-of-contents {
  padding: 0 30px;
  max-width: 800px;
  width: calc(100% - 60px);
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;

  & h2 {
    font-size: 1.2rem;
    color: var(--text-muted-color);
    margin-bottom: 10px;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;

    & li {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      color: var(--text-muted-color);
      margin-bottom: 10px;

      & a {
        text-decoration: none;
        color: var(--text-muted-color);
        transition: all 0.2s ease;

        &:hover {
          color: var(--accent-color);
        }
      }
    }
  }
}

.posts-list-wrapper {
  padding: 0 30px;
  max-width: 800px;
  width: calc(100% - 60px);
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;

  & .posts-list-title {
    position: sticky;
    top: 0;
    background-color: var(--bg-color);
    z-index: 100;
    margin-bottom: 20px;

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 30px;
      bottom: -30px;
      left: 0;
      // gradient to transparent
      background: linear-gradient(to top, transparent 0%, var(--bg-color) 100%);

      transition: all 0.2s ease;
      z-index: -1;
    }

    & .options {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 0.8rem;
      margin-bottom: 20px;

      & label {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
      }
    }
  }

  & .post-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    height: auto;
    // flex-grow: 1;
    padding: 10px 0;
    background-color: transparent;

    & .post-info {
      & .post-title {
        height: max-content;
        white-space: normal;
        font-size: 1.5rem;
        color: var(--text-color);
        text-decoration: none;
        transition: all 0.2s ease;

        &:hover {
          color: var(--bg-color);
        }
      }

      & .post-excerpt p {
        font-size: 1rem;
        margin: 10px 20px 0 30px;
        padding: 0;
        position: relative;
        display: block;
        height: max-content;
        background-color: transparent;
        color: var(--text-muted-color);
        transition: all 2s ease;

        &::after {
          content: "";
          position: absolute;
          display: block;
          height: 90%;
          width: 1px;
          top: 5%;
          left: -15px;
          background-color: var(--text-muted-color);
          transition: all 0.2s ease;
          z-index: -1;
          border-radius: 2px;
        }
      }
    }

    & .post-other-info {
      position: relative;
      display: flex;
      flex-direction: row;
      height: max-content;
      padding: 10px 0;
      word-wrap: break-word;
      font-size: 1rem;
      font-family: var(--font-mono);
      color: var(--text-muted-color);

      & .post-date {
        margin-right: 20px;
      }

      & .post-reading-info {
        display: flex;
        height: max-content;
        word-wrap: break-word;

        & .post-reading-time {
          margin-right: 20px;
        }

        & .post-word-count {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
