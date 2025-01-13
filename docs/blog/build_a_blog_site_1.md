---
title: '从零开始搭建博客网站（一）'
timestampId: 250109a
category: 共读
head:
  - - meta
    - name: description
      content: 从零开始搭建博客网站（一）：预备知识与安装。
  - - meta
    - name: keywords
      content: 博客网站 个人网站 博客 vitepress vue vite tailwindcss github_pages typescript
  - - meta
    - name: id
      content: 250109a
created: 2025-01-09 10:34
last_modified: 2025-01-13 13:34
---

从零开始搭建博客网站（一）：预备知识与安装。

---

[[toc]]

## 引

没有啥好引的，看我详细操作。

## 预备知识

### 选择们

做一个博客网站的选择有很多。

直接在博客平台上写文章是最简单的方法，譬如国内的 [CSDN](https://www.csdn.net/)、[博客园](https://www.cnblogs.com/)、[掘金](https://juejin.cn/) 等，以及国外的 [Medium](https://medium.com/)、[Tumblr](https://www.tumblr.com/) 等。这类方式的不足之处在于可定制性较低，不过对于只是想写文章的人来说，感觉已经足够了。

如果选择基于博客框架建站，可以选择低代码平台，如 [WordPress](https://wordpress.org/)。WordPress 几乎是全球最流行的 CMS，有着丰富的插件和主题，可以满足大部分需求。

对于更加追求个性化的人，可以选择自己搭建静态站点。这样可以（几乎）完全控制网站的内容和样式，但是需要一定的编程基础。代表性的静态站点生成器有 [VitePress](https://vitepress.dev/)、[Hugo](https://gohugo.io/)、[Jekyll](https://jekyllrb.com/) 等。

如果使用静态站点生成器，则需要把生成的静态文件部署到服务器上。[GitHub Pages](https://pages.github.com/) 提供了免费的静态站点托管服务，可以直接将静态文件推送到 GitHub 仓库，然后通过 GitHub Pages 服务访问。

### 本站

本站使用的是 VitePress——一个基于 [Vue 3](https://vuejs.org/) 和 [Vite](https://vitejs.dev/) 的静态站点生成器，使用 [Tailwind CSS](https://tailwindcss.com/) 进行样式设计，并托管在 GitHub Pages 上。

本站并没有使用 TypeScript，但是文章中会同时提供 TypeScript 和 JavaScript 的代码示例。

::: warning
由于本站开发使用 macOS 系统，本文中的操作可能会有一些与 Windows 以及 Linux 系统不同的地方。
:::

### 你应该知道的

要达成这个系列的基本目标，你需要对以下技术有一定的了解。

- [Markdown](https://www.markdownguide.org/)
- [git](https://git-scm.com/) 和 [GitHub](https://www.github.com/)
- [Vue.js](https://vuejs.org/)
- [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
- [Tailwind CSS](https://tailwindcss.com/)
- [JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

你也会在这个过程中学到关于它们的更多知识。

## 安装一堆

### 安装 Node.js

VitePress 基于 18+ 版本的 [Node.js](https://nodejs.org/)，截至 2025 年 1 月，最新的 LTS 版本是 22.13.0，最新的 Current 版本是 23.0.0。可以在 [Node.js 官网](https://nodejs.org/) 下载安装包进行安装，也可以使用包管理器进行安装。

如果使用 nvm 管理 Node.js 版本，可以使用以下命令安装 Node.js：

```bash:no-line-numbers
nvm install 22
```

如果需要使用 pnpm 或 yarn 作为包管理器，可以用以下命令安装并启用：

::: code-group

```bash:no-line-numbers [pnpm]
corepack enable pnpm
```

```bash:no-line-numbers [yarn]
corepack enable yarn
```

:::

以下操作均以 npm 为例。

### 安装 VitePress

定位到你想要创建博客的目录，然后使用运行 VitePress 的初始化命令：

```bash:no-line-numbers
npx vitepress init
```

VitePress 官网提供了详细的安装与初始化配置说明，可以参考 [这里](https://vitepress.dev/guide/getting-started#installation)。

在进行 setup 的时候，需要选择主题为 Default Theme / Default Theme + Customization / Custom Theme。如果仅仅是想快速搭建一个博客网站，可以选择 Default Theme。如果想要更高程度的自定义，可以选择 Custom Theme。本站的样式几乎是完全自定义的。选择 Custom Theme，你可以了解到更多关于 VitePress 配置和 Vue 开发的内容。

setup 时还需要设置一些基本信息：

```:no-line-numbers
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  TypeScript Example Site / JavaScript Example Site
│
◇  Site description:
│  A VitePress Site.
│
◇  Theme:
│  Custom Theme
│
◇  Use TypeScript for config and theme files?
│  Yes / No
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
└  Done! Now run npm run docs:dev and start writing.
```

以上操作将会生成这样的文件树：

```tree:no-line-numbers
.
├── docs
│   ├── .vitepress
│   │   ├── config.mjs  // 如果使用 TypeScript，则为 config.ts
│   │   └── theme
│   │       ├── Layout.vue
│   │       ├── index.js // 如果使用 TypeScript，则为 index.ts
│   │       └── style.css
│   ├── api-examples.md
│   ├── index.md
│   └── markdown-examples.md
└── package.json
```

其中 `docs` 目录是在 setup 阶段配置的 VitePress 初始化目录，其中包含了文章的 Markdown 文件，以及 VitePress 的配置文件夹 `.vitepress/`。

此外，由于选择了 Custom Theme，则需要显式安装 Vue 3：

```bash:no-line-numbers
npm install vue@latest
```

### 安装 Tailwind CSS

对于一个博客网站来说，元素样式的复用通常并不常见。使用 Tailwind CSS 可以专注于页面的布局和排版，同时不用过多担心复用导致的样式冲突。

使用 npm 安装 Tailwind CSS：

```bash:no-line-numbers
npm install -D tailwindcss

npx tailwindcss init
```

以上操作将会生成一个 `tailwind.config.js` 文件，其中包含了 Tailwind CSS 的配置。

## 结

到这里，关键的准备工作已经完成。