<script setup>
import StyledBgLink from "./StyledBgLink.vue";
</script>

<template>
  <div
    class="mx-auto my-10 min-h-screen w-[calc(100%-60px)] max-w-[700px] font-serif"
  >
    <div class="nf-title mb-10 text-5xl">
      <h1>404</h1>
    </div>
    <div class="nf-info text-3xl leading-relaxed">
      <p>未书。</p>
      <p>
        返回
        <StyledBgLink
          href="/"
          text="扉"
        ></StyledBgLink>
        或者
        <StyledBgLink
          href="/contact"
          text="联系"
        ></StyledBgLink>
        我。
      </p>
    </div>
  </div>
</template>
