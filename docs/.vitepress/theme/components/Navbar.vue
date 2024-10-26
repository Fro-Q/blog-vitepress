<script setup>
import { useData } from "vitepress";
import { ref, watch } from "vue";

const { page, site, frontmatter } = useData();

const socialLinks = site.value.themeConfig.socialLinks;
</script>

<template>
  <div class="navbar sticky z-40 h-auto w-full bg-neutral-50 p-5 dark:bg-neutral-950">
    <div class="navbar-inner box-border flex h-full flex-row items-center justify-between">
      <div class="brand">
        <h1 class="brand-title flex px-2 text-5xl">
          <a
            href="/"
            class="font-['noteworthy'] font-light text-neutral-600 transition duration-200 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            <Logo blinking="true"></Logo>
          </a>
        </h1>
      </div>
      <div class="flex flex-row gap-6">
        <div class="links flex flex-row gap-4">
          <div
            class="link-wrapper align-middle"
            v-for="link in socialLinks"
            :key="link.icon"
          >
            <a
              :href="link.link"
              class="link m-1 block text-xl text-neutral-500 transition duration-200 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200"
              :title="link.ariaLabel"
            >
              <div
                v-html="link.icon.svg"
                class="icon flex h-6 w-6 items-center justify-center"
              ></div>
            </a>
          </div>
        </div>
        <div class="utilities flex flex-row">
          <div class="utility-wrapper">
            <a
              href="/blog/contact"
              class="utility m-1 text-2xl text-neutral-500 transition duration-200 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200"
            >
              相与
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
