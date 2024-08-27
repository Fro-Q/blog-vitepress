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

<style scoped lang="scss">
.navbar {
  top: 20px;
  left: 20px;
  right: 20px;
  height: 50px;
  background-color: transparent;
  z-index: 1000;
  position: fixed;
  // border-bottom: 1px solid #eaecef;

  & .navbar-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    box-sizing: border-box;

    & .brand {
      & .brand-title {
        padding: 0 10px;
        display: flex;
        margin: 0;
        font-size: 48px;
        text-decoration: none;

        & a {
          text-decoration: none;
          font-weight: 200;
          color: var(--accent-color);
          // font-family: "snell roundhand", sans-serif;
          font-family: noteworthy, sans-serif;
        }
      }
    }

    & .buttons {
      & a {
        display: block;
        margin: 0 10px;
        text-decoration: none;
        color: var(--text-muted-color);
        font-size: 1.2rem;
        transition: all 0.2s ease;

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }
}
</style>
