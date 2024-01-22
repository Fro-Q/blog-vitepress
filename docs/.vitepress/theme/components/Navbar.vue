<script setup>
import { useData } from 'vitepress'

const { page, site, frontmatter } = useData()
</script>

<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="brand">
        <h1 class="brand-title">
          <a href="/">
            <span>{{ site.title }}</span>
          </a>
        </h1>
      </div>
      <ul class="nav-links">
        <li v-for="item in site.navs">
          <a :href="item.link">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>