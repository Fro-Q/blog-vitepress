<script setup>
import { defineProps } from "vue";

const props = defineProps(["text", "type"]);
</script>

<template>
  <div class="badge">
    <span :class="`badge-${props.type}`">
      {{ props.text }}
      <slot />
    </span>
  </div>
</template>

<style scoped>
.badge {
  @apply inline-block align-super font-bold;
}

[class^="badge-"] {
  @apply px-2 py-1 text-[0.6em] font-bold;
}

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
