<script setup>
const emit = defineEmits(["btnClick"]);
</script>

<template>
  <button
    title="Back to top"
    class="sticky h-8 w-8 cursor-pointer opacity-0 transition duration-200 after:font-[MaterialIcons] after:content-['navigation']"
    @click="emit('btnClick')"
  ></button>
</template>
