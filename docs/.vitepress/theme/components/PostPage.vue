<script setup>
import { Content } from 'vitepress';
import { useData } from 'vitepress'
import { watch } from 'vue'
import { computed } from 'vue';
import { data as posts } from './posts.data.js'
import { onMounted, onBeforeUnmount, ref, watchEffect } from 'vue';

const { page, site, frontmatter } = useData()

const date = new Date(frontmatter.value.date)


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


let observer

onMounted(() => {
  console.log('mounted');
  // filter by parent element id
  if (frontmatter.value.home) {
    console.log('home page');
    return;
  }
  console.log(page.value.frontmatter.title);
  var tocParent = document.getElementById(page.value.frontmatter.title);
  console.log(tocParent);
  var toc = tocParent.getElementsByClassName('table-of-contents')[0];
  console.log(toc);
  if (toc) {
    console.log('toc found');
    addEventListeners(toc);
  } else {
    observer = new MutationObserver((mutationsList, observer) => {
      for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          var toc = document.getElementsByClassName('table-of-contents')[0];
          if (toc) {
            addEventListeners(toc);
            observer.disconnect();
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});

function addEventListeners(toc) {
  toc.addEventListener('mouseenter', function() {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '1px';
    console.log('mouseenter');
  });

  toc.addEventListener('mouseleave', function() {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
    console.log('mouseleave');
  });
}

</script>

<template>
  <div class="post-wrapper">
    <div class="post-title" v-if="!frontmatter.home" >
      <h1>{{ frontmatter.title }}</h1>
    </div>
    <div class="post-date" v-if="!frontmatter.home" >
      <span>{{ dateInfo.string }}</span>
    </div>
    <Content class="content-wrapper" :id="frontmatter.home?'home':'content'" />
  </div>
</template>