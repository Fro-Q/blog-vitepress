<script setup>
import { Content } from 'vitepress';
import { useData } from 'vitepress';

const { page, site, frontmatter } = useData()

const date = new Date(frontmatter.value.date)

const dateInfo ={
  time: +date,
  string: date.toLocaleDateString('zh-CH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

</script>

<template>

  <div class="post-wrapper">
    <div class="post-title" v-if="!frontmatter.home" >
      <h1>{{ frontmatter.title }}</h1>
    </div>
    <div class="post-date" v-if="!frontmatter.home" >
      <span>{{ dateInfo.string }}</span>
    </div>
    <Content class="content-wrapper" :id="frontmatter.home?'home':'content'" />
  </div>


</template>