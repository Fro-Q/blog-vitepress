---
title: '需要时间'
date: 2023/06/21
timestamp: "230621a"
lastUpdated: true
---

遥感和毛概考完了，时间快来了。

---

<div :id="$frontmatter.timestampId">

[[toc]]

</div>

## 考试

本学期最大的两科——遥感和毛概——考完了，明天后天没==有考试==，不用很紧，慢慢溜溜看看地质学看看算法与数据结构看看英语，这学期就完全结束了。

很气，我大概记得起来 TM 的第 6 波段和全色波段的分辨率一个 15m 一个 60m，但是说实话有点记不清楚谁是谁，本来写的是对的，但是保险起见改成了两个 15m，总能对一个。保守派。

其实还好，些微有点可惜，但是我也不认为这是我应该拿到的分，毕竟我确实印象不是特别深，归根结底还是我的问题。直面问题，不找借口。

## 忙

最近感觉特别忙。上周在赶遥感实验报告和实习报告、习思想报告，三天睡了五个小时；赶完了马上来整理之前没整理完的遥感笔记，整理完了忙着背，昨天下午考完了遥感今天上午就毛概，纯不给喘息时间，这两天也没睡几个小时。

感觉我现在极度需要时间。有很多事情需要我花很多时间去做，但是暂时不举例了。这段时间一直忙着干学校的事，自己的事很少顾到。但是问题不是很大，毕竟暑假里我有一个多月的时间来干这些事，而且某些东西是长线计划，反正总之是不太急的。

## 后续

后续可能会有一些值得期待的行动，毕竟一个多月的纯 Spare Time，有点想入非非了已经。

```js
import { defineConfig } from 'vitepress'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItFoo from 'markdown-it-foo'

export default defineConfig({
  markdown: {
    // markdown-it-anchor 的选项
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {
      permalink: markdownItAnchor.permalink.headerLink()
    },
    // @mdit-vue/plugin-toc 的选项
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: { level: [1, 2] },
    config: (md) => {
      // 使用更多的 Markdown-it 插件！
      md.use(markdownItFoo)
    }
  }
})
```

> okokokokokok `okokokokokok` ok

okok `okok` okokokokokokokoko

==nihnih==

[Basics of Prompting](https://www.promptingguide.ai/introduction/basics)