<script setup>
import { ref } from "vue";

const props = defineProps(["blinking"]);

const blinkingLetter = ref("o");
</script>

<template>
  <div class="group inline">
    <span class="text text-neutral-400 transition-opacity delay-100 duration-200 hover:delay-0 group-hover:opacity-20">fr</span>
    <span
      class="text inline-block text-end text-neutral-400 transition duration-200 group-hover:text-emerald-500"
      :class="props.blinking ? 'blinking' : ''"
    >
      {{ blinkingLetter }}
    </span>
    <span class="text inline text-end text-neutral-400 transition duration-200 group-hover:text-emerald-500">Q</span>
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
  24% {
    transform: scaleY(1);
  }
  25% {
    transform: scaleY(0);
  }
  26% {
    transform: scaleY(1);
  }
  73% {
    transform: scaleY(1);
  }
  74% {
    transform: scaleY(0);
  }
  75% {
    transform: scaleY(1);
  }
  76% {
    transform: scaleY(0);
  }
  77% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}

.blinking {
  transform-origin: 100% 80%;
  animation: blink 12000ms infinite;
}
</style>
