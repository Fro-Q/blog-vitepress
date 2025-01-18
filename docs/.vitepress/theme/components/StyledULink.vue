<script setup>
import markdownit from "markdown-it";
const props = defineProps([
  "href",
  "text",
]);
</script>

<template>
  <a
    :href="props.href"
    class="relative z-0 inline-block px-1 text-neutral-600 transition before:absolute before:-bottom-px before:left-0 before:-z-[2] before:h-px before:w-full before:rounded-sm before:bg-neutral-500 after:absolute after:-bottom-[2px] after:left-0 after:-z-[1] after:h-[2px] after:w-0 after:rounded-sm after:bg-neutral-800 after:duration-200 hover:text-neutral-800 hover:after:w-full dark:text-neutral-400 dark:after:bg-neutral-200 dark:hover:text-neutral-200"
    v-html="markdownit().renderInline(props.text)"
  ></a>
</template>
