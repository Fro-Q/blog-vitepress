<script setup>
import { useData } from "vitepress";

const { site } = useData();

const contacts = site.value.themeConfig.contacts;

const colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
</script>

<template>
  <p />
  <p>
    <div
      class="contact-wrapper inline-block"
      v-for="contact in contacts"
      :key="contact.icon"
    >
      <div
        @click="contact.link"
        class="unstyled link m-1 flex flex-row flex-wrap transition duration-200 items-center justify-start px-2 py-1 rounded-sm border"
        :style="`border-color: ${contact.tailwindColor[colorScheme]}; color: ${contact.tailwindColor[colorScheme]}`"
        :title="contact.text"
      >
        <div class="contact-title">
          {{ contact.text }}
        </div>
        <div
          v-html="contact.icon.svg"
          class="icon flex h-6 w-6 items-center justify-center"
        />
        <div
          v-for="link in contact.links"
          :key="link.link"
        >
          <a
            :href="link.link ? link.link : null"
            target="_blank"
            rel="noopener noreferrer"
            class="link unstyled transition duration-200"
          >
            <code class="text-sm contact-url">
              {{ link.text }}
            </code>
          </a>
          <span v-if="link !== contact.links[contact.links.length - 1]" class="text-neutral-400 dark:text-neutral-600">//</span>
        </div>
      </div>
    </div>
  </p>
</template>

<style lang="scss">
@media (prefers-color-scheme: light) {
  :root {
    --text-muted-color: rgb(82, 82, 82);
    --text-normal-color: rgb(64, 64, 64);
    --color-segmented-control-bg: transparent;
    --blur-bg: rgba(0, 0, 0, 0.1);
    --color-fg-default: var(--text-normal-color);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-muted-color: rgb(163, 163, 163);
    --text-normal-color: rgb(212, 212, 212);
    --color-segmented-control-bg: transparent;
    --blur-bg: rgba(255, 255, 255, 0.1);
    --color-fg-default: var(--text-normal-color);
  }
}

.contact-wrapper {
  &:hover {
    & .contact-title {
    }
  }
}

.contact-title {
  color: var(--text-normal-color);
}

.contact-url {
  transition: all 0.2s;
  border: 1px solid transparent;

  &:hover {
    color: inherit;
    border: 1px solid currentColor;
  }

  &::before,
  &::after {
    content: "";
  }
}
</style>
