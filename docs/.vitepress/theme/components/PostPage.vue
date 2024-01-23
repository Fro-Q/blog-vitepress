<script setup>
import { Content } from 'vitepress';
import { useData } from 'vitepress';

const { page, site, frontmatter } = useData()
console.log('page', page)

</script>

<template>

  <div class="post-title" v-if="!frontmatter.home" >
    <h1>{{ frontmatter.title }}</h1>
  </div>

  <Content class="wrapper" :id="frontmatter.home?'home':'content'" />

</template>