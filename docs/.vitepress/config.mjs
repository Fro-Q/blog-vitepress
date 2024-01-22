import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FroQ",
  description: "Write Something",
  lang: "zh-CN",

  themeConfig: {
  },
  markdown: {
    anchor: { permalink: true },
    toc: { level: [1, 2, 3] },
    lineNumbers: true,
    math: true,
    // container: {
    //   tipLabel: '提示',
    //   warningLabel: '警告',
    //   dangerLabel: '危险',
    //   infoLabel: '信息',
    //   detailsLabel: '详细信息'
    // }
  },
})

