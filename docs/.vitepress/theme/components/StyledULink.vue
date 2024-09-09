<script setup>
import { defineProps } from "vue";

const props = defineProps(["href", "text"]);
</script>

<template>
  <a
    :href="props.href"
    class="relative z-0 inline-block px-1 transition after:absolute after:bottom-0 after:left-0 after:-z-[1] after:h-px after:w-0 after:rounded-sm after:bg-neutral-950 after:duration-200 hover:after:w-full dark:after:bg-neutral-50"
  >
    {{ props.text }}
  </a>
</template>
