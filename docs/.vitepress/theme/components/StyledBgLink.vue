<script setup>
const props = defineProps(["href", "text"]);
</script>

<template>
  <a
    :href="props.href"
    class="relative z-0 inline-block px-1 transition after:absolute after:bottom-0 after:left-0 after:-z-[1] after:h-px after:w-full after:rounded-sm after:bg-neutral-950 after:duration-200 hover:text-neutral-50 hover:after:h-full dark:after:bg-neutral-50 dark:hover:text-neutral-950"
  >
    {{ props.text }}
  </a>
</template>
