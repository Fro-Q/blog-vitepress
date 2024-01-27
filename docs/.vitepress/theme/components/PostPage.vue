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

const lastUpdated = computed(() => {
  if (frontmatter.value.lastUpdated) {
    const date = new Date(frontmatter.value.lastUpdated);
    return {
      time: +date,
      string: date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
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

const nextPost = computed(() => {
  if (frontmatter.value.home) {
    return;
  }
  const thisPostIndex = posts.findIndex(post => post.frontmatter.timestampId === page.value.frontmatter.timestampId);
  if (thisPostIndex === posts.length - 1) {
    return;
  }
  return posts[thisPostIndex + 1];
})

const prevPost = computed(() => {
  if (frontmatter.value.home) {
    return;
  }
  const thisPostIndex = posts.findIndex(post => post.frontmatter.timestampId === page.value.frontmatter.timestampId);
  if (thisPostIndex === 0) {
    return;
  }
  return posts[thisPostIndex - 1];
})

const thisPostReadingInfo = computed(() => {
  if (frontmatter.value.home || page.value.isNotFound) {
    return;
  }
  const thisPostIndex = posts.findIndex(post => post.frontmatter.timestampId === page.value.frontmatter.timestampId);

  return posts[thisPostIndex].readingInfo;
})

onMounted(() => {
  if (frontmatter.value.home) {
    return;
  }
  var content = document.getElementById('content');
  var imgs = content.getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    var p = img.parentNode;
    if (p.tagName === 'P') {
      p.setAttribute('alt', img.getAttribute('alt'));
    }
  }
});

</script>

<template>
  <div class="post-wrapper" v-if="!frontmatter.home && !page.isNotFound">
    <div class="post-title">
      <h1>{{ frontmatter.title }}</h1>
    </div>
    <div class="post-info">
      <div class="post-date">
        <span>{{ dateInfo.string }}</span>
      </div>
      <div class="post-reading-info">
        <span class="post-reading-time">约{{ thisPostReadingInfo.totalTime }}分钟</span>
        <span class="post-word-count">{{ thisPostReadingInfo.wordCount }}字</span>
      </div>
    </div>
    <Content class="content-wrapper" id="content" />
    <div class="content-footer">
      <div class="last-updated">
        <span>最后更新于</span>
        <span>{{ lastUpdated.string }}</span>
      </div>
      <div class="related-posts">
        <div class="related-posts-container">
          <div class="related-post">
            <div class="related-post-title">上一篇：</div>
            <a :href="prevPost.url" v-if="prevPost">{{ prevPost.frontmatter.title }}</a>
            <div v-else>无</div>
          </div>
          <div class="related-post">
            <div class="related-post-title">下一篇：</div>
            <a :href="nextPost.url" v-if="nextPost">{{ nextPost.frontmatter.title }}</a>
            <div v-else>无</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
