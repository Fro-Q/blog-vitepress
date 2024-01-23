import { defineConfig } from 'vitepress'
import { RssPlugin } from 'vitepress-plugin-rss'


const rssOptions = {
  baseUrl: 'https://fro-q.github.io',
  title: 'FroQ',
  copyRight: 'CopyRight © 2023-present, FroQ',
  count: 20,
}

export default defineConfig({
  vite: {
    plugins: [
      RssPlugin(rssOptions),
    ],
  },
  title: "FroQ",
  description: "Write Something",
  lang: "zh-CN",
  base: "/",

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Fro-Q' },
    ],
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

