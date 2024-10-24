<script setup>
import { ref } from "vue";

const props = defineProps(["blinking"]);

const blinkingLetter = ref("o");
</script>

<template>
  <div class="group inline-block">
    <span class="text text-neutral-400 transition-opacity delay-100 duration-200 hover:delay-0 group-hover:opacity-20">fr</span>
    <span
      class="text inline-block text-end text-neutral-400 transition duration-200 group-hover:text-emerald-400"
      :class="props.blinking ? 'blinking min-w-[0.5em]' : ''"
    >
      {{ blinkingLetter }}
    </span>
    <span class="text inline-block text-end text-neutral-400 transition duration-200 group-hover:text-emerald-400">Q</span>
  </div>
</template>

<style scoped>
.text {
  font-family: "noteworthy", cursive;
}

@keyframes blink {
  0% {
    transform: scaleY(1);
  }
  48% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0);
  }
  52% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}

.blinking {
  transform-origin: 100% 60%;
  animation: blink 8000ms infinite;
}
</style>
