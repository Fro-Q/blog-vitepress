<script setup>
import { data as posts } from "./posts.data.js";
import { computed, ref, watch, onMounted } from "vue";
import { selfDesc } from "../utils/selfDesc.js";

const showExcerpt = ref([
  {
    title: "全",
    show: false,
  },
  {
    title: "成言",
    show: false,
  },
  {
    title: "共读",
    show: false,
  },
  {
    title: "代序",
    show: false,
  },
  {
    title: "前脩",
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
    title: "全",
    link: "#qr",
  },
  {
    title: "成言",
    link: "#igyj",
  },
  {
    title: "共读",
    link: "#gsdu",
  },
  {
    title: "代序",
    link: "#dlxu",
  },
  {
    title: "前脩",
    link: "#qmxq",
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
    title: "全",
    id: "qr",
  },
  {
    title: "成言",
    id: "igyj",
  },
  {
    title: "共读",
    id: "gsdu",
  },
  {
    title: "代序",
    id: "dlxu",
  },
  {
    title: "前脩",
    id: "qmxq",
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
  <div class="mx-auto flex h-[calc(100vh-100px)] max-w-[800px] items-center px-6 font-serif text-3xl/[4rem] font-bold antialiased">
    <div class="select-none">
      <div class="mb-10 inline">
        您好。<br />我是 <span class="font-[noteworthy]">froQ</span>，一位

        <div class="group relative inline h-max w-max">
          <input
            type="text"
            class="relative z-20 inline h-8 appearance-none rounded-none bg-transparent text-center font-thin shadow-underline shadow-emerald-500 outline-none"
            id="self-description"
            autocomplete="off"
            maxlength="10"
            v-model="selfDesc.content"
          />
        </div>
        。
      </div>

      <br />

      <div class="inline w-[calc(100vh-60px)] max-w-[800px]">不太擅长给自己贴标签，或许您能帮我贴一个。</div>
    </div>
  </div>

  <div class="table-of-contents mx-auto flex w-[calc(100%-60px)] max-w-[800px] flex-col justify-start px-6">
    <div
      class="toc-title sticky top-0 z-10 mb-5 bg-neutral-50 py-10 after:absolute after:-bottom-8 after:left-0 after:z-[-1] after:h-8 after:w-full after:bg-gradient-to-b after:from-neutral-50 dark:bg-neutral-950 dark:after:bg-gradient-to-b dark:after:from-neutral-950"
    >
      <h2 class="font-serif text-4xl">目录</h2>
    </div>
    <div class="toc-content flex flex-col">
      <div
        v-for="toc of tocContents"
        :key="toc.title"
        class="link-wrapper ml-[25%] even:pl-10"
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
          class="relative mr-2 inline-block h-4 w-4 cursor-pointer appearance-none rounded-none border border-neutral-600 before:absolute before:left-1/2 before:top-1/2 before:block before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:bg-neutral-700 before:transition before:duration-200 checked:before:scale-100 hover:border-neutral-900 hover:before:scale-[0.3] checked:hover:before:scale-[0.7] dark:border-neutral-400 before:dark:bg-neutral-300 dark:hover:border-neutral-100"
          id="show-excerpt"
          v-model="showExcerpt.find((item) => item.title === category.title).show"
        />
        <label for="show-excerpt">摘要</label>
      </div>
    </div>

    <div class="px-1 pb-4">
      <div
        v-for="post of category.id == 'qr' ? posts.filter((post) => post.frontmatter.category !== '格外') : posts.filter((post) => post.frontmatter.category === category.title)"
        class="post-container flex h-auto w-full flex-row flex-wrap justify-end gap-2"
      >
        <div class="peer max-w-[80%] py-4">
          <div class="post-info flex flex-row justify-end">
            <StyledULink
              :href="post.url"
              :text="post.frontmatter.title"
              class="post-title font-serif text-2xl"
            />
          </div>
          <div
            v-html="post.excerpt"
            class="post-excerpt mt-2 flex flex-row justify-end text-neutral-400 dark:text-neutral-600"
            v-show="showExcerpt.find((item) => item.title === category.title).show"
          ></div>
          <div
            class="post-other-info relative flex h-max flex-row justify-end py-2 font-serif text-neutral-500"
            v-if="category.title !== '格外'"
          >
            <!-- if the screen width is wide, hide this -->
            <div class="post-date mr-5">
              {{ post.dateString }}
            </div>
            <div class="post-reading-info flex gap-5">
              <span class="post-reading-time">约 {{ post.readingInfo.totalTime }} 分钟</span>
              <span class="post-word-count">{{ post.readingInfo.wordCount }} 字</span>
            </div>
          </div>
        </div>
        <div
          class="relative w-10 before:absolute before:left-[50%] before:block before:h-full before:w-px before:-translate-x-[50%] before:bg-neutral-500 after:absolute after:left-[50%] after:top-[50%] after:block after:h-px after:w-2 after:-translate-x-[50%] after:-translate-y-[50%] after:rounded-full after:border after:border-neutral-800 after:bg-neutral-200 after:transition-all hover:after:h-4 hover:after:w-4 peer-hover:after:h-4 peer-hover:after:w-4 dark:after:border-neutral-200 dark:after:bg-neutral-800"
        ></div>
      </div>
    </div>
  </div>
</template>
