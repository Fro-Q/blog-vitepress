<script setup>
import { data as posts } from "./posts.data.js";
import { computed, ref } from "vue";
import { Content } from "vitepress";
import StyledBgLink from "./StyledBgLink.vue";
import StyledULink from "./StyledULink.vue";

const showExcerpt = ref([
  {
    title: "共",
    show: false,
  },
  {
    title: "成言",
    show: false,
  },
  {
    title: "代序",
    show: false,
  },
  {
    title: "鞿羁",
    show: false,
  },
  {
    title: "前脩",
    show: false,
  },
  {
    title: "初服",
    show: false,
  },
  {
    title: "日志",
    show: false,
  },
  {
    title: "格外",
    show: false,
  },
]);

const tocContents = [
  {
    title: "共",
    link: "#gs",
  },
  {
    title: "成言",
    link: "#igyj",
  },
  {
    title: "代序",
    link: "#dlxu",
  },
  {
    title: "鞿羁",
    link: "#jiji",
  },
  {
    title: "前脩",
    link: "#qmxq",
  },
  {
    title: "初服",
    link: "#iufu",
  },
  {
    title: "日志",
    link: "#rivi",
  },
  {
    title: "格外",
    link: "#gewl",
  },
];

const blogCategory = [
  {
    title: "共",
    id: "gs",
  },
  {
    title: "成言",
    id: "igyj",
  },
  {
    title: "代序",
    id: "dlxu",
  },
  {
    title: "鞿羁",
    id: "jiji",
  },
  {
    title: "前脩",
    id: "qmxq",
  },
  {
    title: "初服",
    id: "iufu",
  },
  {
    title: "日志",
    id: "rivi",
  },
  {
    title: "格外",
    id: "gewl",
  },
];
</script>

<template>
  <div class="post-wrapper">
    <Content
      id="home"
      class="content-wrapper weight-600 mx-auto flex h-[calc(100vh-100px)] w-[calc(100%-60px)] max-w-[800px] items-center px-6 text-3xl/[4rem] font-black antialiased"
    />
  </div>

  <div
    class="table-of-contents mx-auto flex w-[calc(100%-60px)] max-w-[800px] flex-col justify-start px-6"
  >
    <div
      class="toc-title sticky top-0 z-10 mb-5 bg-neutral-50 py-10 after:absolute after:-bottom-8 after:left-0 after:z-[-1] after:h-8 after:w-full after:bg-gradient-to-b after:from-neutral-50 dark:bg-neutral-950 dark:after:bg-gradient-to-b dark:after:from-neutral-950"
    >
      <h2 class="font-serif text-4xl">目录</h2>
    </div>
    <div class="toc-content">
      <div
        v-for="toc of tocContents"
        :key="toc.title"
        class="link-wrapper pl-2"
      >
        <StyledULink
          :href="toc.link"
          :text="toc.title"
          class="toc-link my-4 font-serif text-2xl italic"
        />
      </div>
    </div>
  </div>

  <div
    class="mx-auto flex min-h-[calc(100vh-100px)] w-[calc(100%-60px)] max-w-[800px] flex-col justify-start px-6"
    v-for="category of blogCategory"
  >
    <div
      class="sticky top-0 z-10 mb-5 bg-neutral-50 py-10 after:absolute after:-bottom-8 after:left-0 after:z-[-1] after:h-8 after:w-full after:bg-gradient-to-b after:from-neutral-50 dark:bg-neutral-950 dark:after:bg-gradient-to-b dark:after:from-neutral-950"
    >
      <h2
        :id="category.id"
        class="font-serif text-4xl"
      >
        {{ category.title }}
      </h2>
      <div
        class="options my-5 flex flex-row items-center text-sm"
        v-if="category.title !== '格外'"
      >
        <input
          type="checkbox"
          class="relative mr-2 inline-block h-4 w-4 cursor-pointer appearance-none border border-neutral-600 before:absolute before:left-1/2 before:top-1/2 before:block before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:bg-neutral-700 before:transition before:duration-200 checked:before:scale-100 hover:border-neutral-900 hover:before:scale-[0.3] checked:hover:before:scale-[0.7] dark:border-neutral-400 before:dark:bg-neutral-300 dark:hover:border-neutral-100"
          id="show-excerpt"
          v-model="
            showExcerpt.find((item) => item.title === category.title).show
          "
        />
        <label for="show-excerpt">摘要</label>
      </div>
    </div>

    <div
      v-for="post of category.id == 'gs' ?
        posts.filter((post) => post.frontmatter.category !== '格外')
      : posts.filter((post) => post.frontmatter.category === category.title)"
      class="post-container flex h-auto w-full flex-col flex-wrap justify-start py-2"
    >
      <div class="post-info">
        <StyledBgLink
          :href="post.url"
          :text="post.frontmatter.title"
          class="post-title font-serif text-2xl"
        />
        <div
          v-html="post.excerpt"
          class="post-excerpt mt-2 pl-8 text-neutral-600 dark:text-neutral-400"
          v-show="
            showExcerpt.find((item) => item.title === category.title).show
          "
        ></div>
      </div>
      <div
        class="post-other-info relative flex h-max flex-row py-2 font-serif"
        v-if="category.title !== '格外'"
      >
        <div class="post-date mr-5">
          {{ post.dateString }}
        </div>
        <div class="post-reading-info flex gap-5">
          <span class="post-reading-time">
            约 {{ post.readingInfo.totalTime }} 分钟
          </span>
          <span class="post-word-count">
            {{ post.readingInfo.wordCount }} 字
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- <Contact /> -->
</template>
