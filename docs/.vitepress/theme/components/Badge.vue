<script setup>
import { defineProps } from "vue";

const props = defineProps([
  "text",
  "type",
]);
</script>

<template>
  <div class="badge inline-block font-bold">
    <span
      class="my-auto px-2 py-1 align-bottom text-[0.6em] font-bold"
      :class="`badge-${props.type}`"
    >
      {{ props.text }}
      <slot />
    </span>
  </div>
</template>

<style scoped>
.badge-info {
  @apply rounded-sm border border-neutral-500 text-neutral-500;
}

.badge-warning {
  @apply rounded-sm border border-yellow-500 text-yellow-500;
}

.badge-danger {
  @apply rounded-sm border border-red-500 text-red-500;
}

.badge-tip {
  @apply rounded-sm border border-blue-500 text-blue-500;
}
</style>
