---
lang: zh-CN
title: 'froQ'
timestampId: 240125a
category: 扉
head:
  - - meta
    - name: description
      content: /
  - - meta
    - name: keywords
      content: 首页 博客 技术博客 生活博客 froQ blog tech_blog live_blog
  - - meta
    - name: id
      content: 240125a
created: 2024-01-25 12:23
last_modified: 2024-10-26 23:56
---

[[toc]]

<script setup>
import { ref, watch } from 'vue';

const selfDescription = ref('');

</script>

您好。

我是 <Logo />，一位 <input type="text" class="input-text" id="self-description" autocomplete="off" maxlength="10" v-model="selfDescription" />。

不太擅长给自己贴标签，或许您可以在我的文章中找到一些线索。


<style>

@media (prefers-color-scheme: light) {
  :root {
    --text-muted-color: rgb(82, 82, 82);
    --text-normal-color: rgb(64, 64, 64);
    --color-segmented-control-bg: transparent;
    --blur-bg: rgba(0, 0, 0, 0.1);
    --color-fg-default: var(--text-normal-color);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-muted-color: rgb(163, 163, 163);
    --text-normal-color: rgb(212, 212, 212);
    --color-segmented-control-bg: transparent;
    --blur-bg: rgba(255, 255, 255, 0.1);
    --color-fg-default: var(--text-normal-color);
  }
}

.input-text {
  display: inline;
  height: 1.2em;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  outline: none;
  position: relative;
  border-bottom: 2px inset var(--color-fg-default);
  text-align: center;
  color: var(--text-muted-color);
  font-weight: 100;
}

</style>
