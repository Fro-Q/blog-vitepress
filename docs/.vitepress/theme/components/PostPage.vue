<script setup>
import { Content } from "vitepress";
import { useData } from "vitepress";
import { computed } from "vue";
import { data as posts } from "./posts.data.js";
import { onMounted } from "vue";

const { page, frontmatter } = useData();

const dateInfo = computed(() => {
  if (frontmatter.value.created) {
    const date = new Date(frontmatter.value.created);
    return date
      .toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      .replace(/年|月/g, "/")
      .replace(/日/g, "");
  }
  return "";
});

const 日志lastUpdatedInfo = computed(() => {
  if (frontmatter.value.last_modified) {
    const date = new Date(frontmatter.value.last_modified);
    return date
      .toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      .replace(/年|月/g, "/")
      .replace(/日/g, "");
  }
  return "";
});

onMounted(() => {
  if (frontmatter.value.category === "扉") {
    return;
  }

  var thisHead = document.querySelector(
    `meta[name="id"][content="${page.value.frontmatter.timestampId}"]`,
  ).parentElement;
  var thisBody = thisHead.nextElementSibling;
  var toc = thisBody.getElementsByClassName("table-of-contents")[0];
  if (toc) {
    addEventListeners(toc);
  }
});

function addEventListeners(toc) {
  toc.addEventListener("mouseenter", function () {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "1px";
  });

  toc.addEventListener("mouseleave", function () {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  });
}

const nextPost = computed(() => {
  if (frontmatter.value.category === "扉") {
    return;
  }
  let thisPostIndex = posts.findIndex(
    (post) => post.frontmatter.timestampId === frontmatter.timestampId,
  );
  if (thisPostIndex === posts.length - 1) {
    return;
  }

  while (
    posts[thisPostIndex + 1].frontmatter.category !== frontmatter.value.category
  ) {
    thisPostIndex++;
    if (thisPostIndex === posts.length - 1) {
      return;
    }
  }

  return posts[thisPostIndex + 1];
});

const prevPost = computed(() => {
  if (frontmatter.value.category === "扉") {
    return;
  }
  let thisPostIndex = posts.findIndex(
    (post) => post.frontmatter.timestampId === frontmatter.timestampId,
  );
  if (thisPostIndex <= 0) {
    return;
  }

  while (
    posts[thisPostIndex - 1].frontmatter.category !== frontmatter.value.category
  ) {
    thisPostIndex--;
    if (thisPostIndex === 0) {
      return;
    }
  }

  return posts[thisPostIndex - 1];
});

const thisPostReadingInfo = computed(() => {
  if (frontmatter.value.category === "扉" || page.value.isNotFound) {
    return;
  }
  const thisPostIndex = posts.findIndex(
    (post) => post.frontmatter.timestampId === frontmatter.timestampId,
  );

  if (thisPostIndex === -1) {
    return { totalTime: 0, wordCount: 0 };
  }

  return posts[thisPostIndex].readingInfo;
});

onMounted(() => {
  if (frontmatter.value.category === "扉") {
    return;
  }
  var content = document.getElementById("content");
  var imgs = content.getElementsByTagName("img");
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    var p = img.parentNode;
    if (p.tagName === "P") {
      p.setAttribute("alt", img.getAttribute("alt"));
    }
  }
});
</script>

<template>
  <div
    class="post-wrapper"
    v-if="frontmatter.category !== '扉' && !page.isNotFound"
  >
    <div
      class="post-title mx-auto my-10 w-[calc(100%-60px)] max-w-[700px] font-serif text-5xl"
    >
      <h1>{{ frontmatter.title }}</h1>
    </div>
    <div
      class="post-info mx-auto mb-5 flex w-[calc(100%-60px)] max-w-[700px] flex-row justify-end font-serif"
      v-if="frontmatter.category !== '格外'"
    >
      <div class="post-date mr-5">
        <span>{{ dateInfo }}</span>
      </div>
      <div class="post-reading-info flex flex-row gap-5">
        <span class="post-reading-time">
          约 {{ thisPostReadingInfo.totalTime }} 分钟
        </span>
        <span class="post-word-count">
          {{ thisPostReadingInfo.wordCount }} 字
        </span>
      </div>
    </div>
    <Content
      class="content-wrapper relative"
      id="content"
    />
    <div
      class="content-footer mx-auto my-10 w-[calc(100%-60px)] max-w-[700px] font-serif"
    >
      <div class="mt-5 text-sm">
        <span>最后更新于：</span>
        <span>{{ 日志lastUpdatedInfo }}</span>
      </div>
      <div
        class="mt-5 flex flex-col"
        v-if="frontmatter.category !== '格外'"
      >
        <div class="">
          <div class="mt-2 flex flex-row items-center">
            上一篇：
            <a
              :href="prevPost.url"
              v-if="prevPost"
              class="inline-block text-neutral-600 underline decoration-1 underline-offset-4 transition duration-200 after:ml-1 after:inline-block after:align-top after:font-[MaterialIcons] after:opacity-100 after:transition-opacity after:duration-200 after:content-['open\_in\_new'] hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
            >
              {{ prevPost.frontmatter.title }}
            </a>
            <div v-else>无</div>
          </div>
          <div class="mt-2 flex flex-row items-center">
            下一篇：
            <a
              :href="nextPost.url"
              v-if="nextPost"
              class="inline-block text-neutral-600 underline decoration-1 underline-offset-4 transition duration-200 after:ml-1 after:inline-block after:align-top after:font-[MaterialIcons] after:opacity-100 after:transition-opacity after:duration-200 after:content-['open\_in\_new'] hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
            >
              {{ nextPost.frontmatter.title }}
            </a>
            <div v-else>无</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
