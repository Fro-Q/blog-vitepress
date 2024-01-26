<script setup>
import { Content } from 'vitepress';
import { useData } from 'vitepress'
import { watch } from 'vue'
import { computed } from 'vue';
import { data as posts } from './posts.data.js'
import { onMounted, onBeforeUnmount, ref, watchEffect } from 'vue'

const { page, site, frontmatter } = useData()

const dateInfo = computed(() => {
  if (frontmatter.value.date) {
    const date = new Date(frontmatter.value.date);
    return {
      time: +date,
      string: date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
  return {
    time: +new Date(),
    string: ''
  }
})

onMounted(() => {
  // filter by parent element id
  if (frontmatter.value.home) {
    return;
  }
  var tocParent = document.getElementById(page.value.frontmatter.timestampId);
  var toc = tocParent.getElementsByClassName('table-of-contents')[0];
  if (toc) {
    addEventListeners(toc);
  }
});

function addEventListeners(toc) {
  toc.addEventListener('mouseenter', function () {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '1px';
  });

  toc.addEventListener('mouseleave', function () {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
  });
}

const thisPost = computed(() => {
  if (frontmatter.value.home) {
    return;
  }
  return posts.find(post => post.frontmatter.timestampId === page.value.frontmatter.timestampId);
})

</script>

<template>
  <div class="post-wrapper">
    <div class="post-title" v-if="!frontmatter.home">
      <h1>{{ frontmatter.title }}</h1>
    </div>
    <div class="post-info">
      <div class="post-date" v-if="!frontmatter.home">
        <span>{{ dateInfo.string }}</span>
      </div>
      <div class="post-reading-info" v-if="!frontmatter.home">
        <span class="post-reading-time">约{{ thisPost.readingInfo.totalTime }}分钟</span>
        <span class="post-word-count">{{ thisPost.readingInfo.wordCount }}字</span>
      </div>

    </div>
    <Content class="content-wrapper" :id="frontmatter.home ? 'home' : 'content'" />
  </div>
</template>
