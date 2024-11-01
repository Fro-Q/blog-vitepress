<script setup>
import { useData } from "vitepress";
import { ref, watch } from "vue";
import { navUtils } from "@theme/utils/navUtils";
import { selfDesc } from "../utils/selfDesc";

const { page, site, frontmatter } = useData();

const socialLinks = site.value.themeConfig.socialLinks;
const navUtilsConfig = site.value.themeConfig.navUtils;
</script>

<template>
  <div class="navbar sticky z-40 h-auto w-full bg-neutral-50 p-5 dark:bg-neutral-950">
    <div class="navbar-inner box-border flex h-full flex-row items-center justify-between">
      <div class="brand flex flex-row items-end gap-4">
        <h1 class="brand-title relative flex gap-5 px-2 text-5xl">
          <a
            href="/"
            class="font-['noteworthy'] font-light text-neutral-600 transition duration-200 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            <Logo blinking="true"></Logo>
          </a>
          <div
            class="m-auto inline-block h-max rounded-sm border border-emerald-500 px-2 py-1 align-bottom text-[0.4em] font-bold text-emerald-500"
            v-if="selfDesc.content"
          >
            #{{ selfDesc.content }}
          </div>
        </h1>
      </div>
      <div class="flex flex-row gap-6">
        <div class="links flex flex-row gap-4">
          <div
            class="link-wrapper align-middle"
            v-for="link in socialLinks"
            :key="link.ariaLabel"
          >
            <a
              :href="link.link"
              class="link m-1 block text-xl text-neutral-500 transition-colors duration-200 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200"
              :title="link.ariaLabel"
            >
              <div
                v-html="link.icon.svg"
                class="icon flex h-6 w-6 items-center justify-center"
              ></div>
            </a>
          </div>
        </div>
        <div class="flex flex-row gap-4">
          <div
            class="link-wrapper align-middle"
            v-for="util in navUtilsConfig"
            :key="util.ariaLabel"
          >
            <div
              @click="navUtils[util.id] = !navUtils[util.id]"
              class="link m-1 block cursor-pointer text-xl transition-colors duration-200"
              :title="util.ariaLabel"
            >
              <div
                v-html="util.icon.svg[navUtils[util.id] ? 'on' : 'off']"
                class="icon flex h-6 w-6 items-center justify-center transition-colors duration-200"
                :class="
                  util.id == 'colorMode' ?
                    navUtils[util.id] ?
                      'text-emerald-500 hover:text-emerald-600 dark:text-emerald-500 dark:hover:text-emerald-400'
                    : 'text-neutral-500 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200'
                  : 'text-neutral-500 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200'
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
