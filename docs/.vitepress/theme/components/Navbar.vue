<script setup>
import { useData } from "vitepress";
import { ref, watch } from "vue";

const { page, site, frontmatter } = useData();

const socialLinks = site.value.themeConfig.socialLinks;
</script>

<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="brand">
        <h1 class="brand-title">
          <a href="/">
            <span>{{ site.title }}</span>
          </a>
        </h1>
      </div>
      <div class="buttons">
        <div class="button">
          <a
            v-for="link in socialLinks"
            :key="link.icon"
            :href="link.link"
            class="link"
            v-show="link.ariaLabel != 'RSS'"
            :title="link.ariaLabel"
          >
            <div
              v-html="link.icon.svg"
              class="icon"
            ></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
