<script setup>
import { useData } from "vitepress";
import { computed } from "vue";
import { data as posts } from "./posts.data.js";
import { onMounted } from "vue";
import Giscus from "@giscus/vue";

import markdownIt from "markdown-it";

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
      .replace(/年|月/g, " / ")
      .replace(/日/g, "");
  }
  return "";
});

const lastUpdatedInfo = computed(() => {
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

  var thisHead = document.querySelector(`meta[name="id"][content="${page.value.frontmatter.timestampId}"]`).parentElement;
  var thisBody = thisHead.nextElementSibling;
  var toc = thisBody.getElementsByClassName("table-of-contents")[0];
  if (toc) {
    addEventListeners(toc);
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

const prevPost = computed(() => {
  if (frontmatter.value.category === "扉") {
    return;
  }
  let thisPostIndex = posts.findIndex((post) => post.frontmatter.timestampId === frontmatter.value.timestampId);
  if (thisPostIndex === posts.length - 1) {
    return;
  }

  while (posts[thisPostIndex + 1].frontmatter.category !== frontmatter.value.category) {
    thisPostIndex++;
    if (thisPostIndex === posts.length - 1) {
      return;
    }
  }

  return posts[thisPostIndex + 1];
});

const nextPost = computed(() => {
  if (frontmatter.value.category === "扉") {
    return;
  }
  let thisPostIndex = posts.findIndex((post) => post.frontmatter.timestampId === frontmatter.value.timestampId);
  if (thisPostIndex <= 0) {
    return;
  }

  while (posts[thisPostIndex - 1].frontmatter.category !== frontmatter.value.category) {
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
  const thisPostIndex = posts.findIndex((post) => post.frontmatter.timestampId === frontmatter.value.timestampId);

  if (thisPostIndex === -1) {
    return { totalTime: 0, wordCount: 0 };
  }

  return posts[thisPostIndex].readingInfo;
});

const thisPostTitle = computed(() => {
  if (frontmatter.value.category === "扉" || page.value.isNotFound) {
    return;
  }

  return markdownIt().render(frontmatter.value.title);
});

const thisPostExcerpt = computed(() => {
  if (frontmatter.value.category === "扉" || page.value.isNotFound) {
    return;
  }

  const rawExcerpt = frontmatter.value.head.filter((item) => item[1].name === "description")[0][1].content;

  return markdownIt().render(rawExcerpt);
});
</script>

<template>
  <div
    class="post-wrapper"
    v-if="frontmatter.category !== '扉' && !page.isNotFound"
  >
    <div class="post-title mx-auto my-10 w-[calc(100%-60px)] max-w-[700px] font-serif text-5xl/relaxed">
      <h1 v-html="thisPostTitle"></h1>
    </div>
    <div
      class="post-info mx-auto mb-5 flex w-[calc(100%-60px)] max-w-[700px] flex-row justify-end font-serif text-neutral-500"
      v-if="frontmatter.category !== '格外'"
    >
      <div class="post-date mr-5">
        <span>{{ dateInfo }}</span>
      </div>
      <div class="post-reading-info flex flex-row gap-5">
        <span class="post-reading-time">约 {{ thisPostReadingInfo.totalTime }} 分钟</span>
        <span class="post-word-count">{{ thisPostReadingInfo.wordCount }} 字</span>
      </div>
    </div>
    <div
      class="post-info mx-auto mb-5 flex w-[calc(100%-60px)] max-w-[700px] flex-row font-serif text-neutral-500"
      v-html="thisPostExcerpt"
    />

    <Content
      class="content-wrapper relative"
      id="content"
    />
    <div class="content-footer mx-auto my-10 w-[calc(100%-60px)] max-w-[700px] font-serif">
      <div class="mt-5 text-sm">
        <span>最后更新于：</span>
        <span>{{ lastUpdatedInfo }}</span>
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
              class="relative inline-block text-neutral-600 transition duration-200 before:absolute before:bottom-[1px] before:h-[1px] before:w-full before:bg-neutral-600 before:transition-all before:duration-200 after:ml-1 after:inline-block after:align-top after:font-[MaterialIcons] after:opacity-100 after:transition-opacity after:duration-200 after:content-['open\_in\_new'] hover:text-neutral-950 hover:before:bg-neutral-950 dark:text-neutral-400 dark:before:bg-neutral-400 dark:hover:text-neutral-50 dark:hover:before:bg-neutral-50"
              v-html="
                markdownIt()
                  .render(prevPost.frontmatter.title)
                  .replace(/<p>|<\/p>/g, '')
              "
            ></a>
            <div v-else>无</div>
          </div>
          <div class="mt-2 flex flex-row items-center">
            下一篇：
            <a
              :href="nextPost.url"
              v-if="nextPost"
              class="relative inline-block text-neutral-600 transition duration-200 before:absolute before:bottom-[1px] before:h-[1px] before:w-full before:bg-neutral-600 before:transition-all before:duration-200 after:ml-1 after:inline-block after:align-top after:font-[MaterialIcons] after:opacity-100 after:transition-opacity after:duration-200 after:content-['open\_in\_new'] hover:text-neutral-950 hover:before:bg-neutral-950 dark:text-neutral-400 dark:before:bg-neutral-400 dark:hover:text-neutral-50 dark:hover:before:bg-neutral-50"
              v-html="
                markdownIt()
                  .render(nextPost.frontmatter.title)
                  .replace(/<p>|<\/p>/g, '')
              "
            ></a>
            <div v-else>无</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Giscus
    src="https://giscus.app/client.js"
    repo="Fro-Q/Fro-Q.github.io"
    repo-id="R_kgDOLISyuA"
    category-id="DIC_kwDOLISyuM4CihU7"
    mapping="url"
    strict="0"
    reactions-enabled="1"
    emit-metadata="0"
    input-position="top"
    theme="https://rawcdn.githack.com/Fro-Q/Fro-Q.github.io/b529e6e7208159e6d81a66f146de816f03461559/docs/.vitepress/theme/giscus.css"
    lang="zh-CN"
    crossorigin="anonymous"
    :key="page.filePath"
    class="relative m-auto min-h-screen w-[calc(100%-60px)] max-w-[700px] items-center text-xl/10"
    async
  ></Giscus>
</template>
