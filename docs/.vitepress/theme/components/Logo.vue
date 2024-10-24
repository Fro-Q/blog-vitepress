<script setup>
import { ref } from "vue";

const props = defineProps(["blinking"]);

const logoHead = ref("fr");
const logoTail = ref("oQ");

if (props.blinking) {
  setInterval(
    () => {
      if (logoTail.value === "oQ") {
        logoTail.value = "-Q";
        setTimeout(
          () => {
            logoTail.value = "oQ";
          },
          Math.floor(Math.random() * 100) + 200,
        );
      } else {
        logoTail.value = "oQ";
      }
    },
    Math.floor(Math.random() * 10000) + 5000,
  );
}
</script>

<template>
  <div class="group inline-block">
    <span class="text duration-400 text-neutral-400 transition-opacity delay-500 group-hover:opacity-20">{{ logoHead }}</span>
    <span
      class="text duration-400 inline-block text-end text-neutral-400 transition group-hover:text-emerald-400"
      :class="props.blinking ? 'min-w-[1.3em]' : ''"
    >
      {{ logoTail }}
    </span>
  </div>
</template>

<style scoped>
.text {
  font-family: "noteworthy", cursive;
}
</style>
