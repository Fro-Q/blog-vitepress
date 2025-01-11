---
title: '从零开始搭建博客网站（一）'
timestampId: 250109a
category: 共读
head:
  - - meta
    - name: description
      content: 从零开始搭建博客网站（一）：预备知识与准备工作。
  - - meta
    - name: keywords
      content: 博客网站 个人网站 博客 vitepress vue vite tailwindcss github_pages
  - - meta
    - name: id
      content: 250109a
created: 2025-01-09 10:34
last_modified: 2025-01-11 20:44
---

从零开始搭建博客网站（一）：预备知识与准备工作。

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

本站使用的是 VitePress——一个基于 [Vue 3](https://vuejs.org/) 和 [Vite](https://vitejs.dev/) 的静态站点生成器，使用 [SCSS](https://sass-lang.com/) 和 [Tailwind CSS](https://tailwindcss.com/) 进行样式设计，并托管在 GitHub Pages 上。

::: warning
由于本站开发使用 macOS 系统，本文中的操作可能会有一些与 Windows 以及 Linux 系统不同的地方。
:::

## 准备工作

### 安装 Node.js

VitePress 基于 18+ 版本的 [Node.js](https://nodejs.org/)，截至 2025 年 1 月，最新的 LTS 版本是 22.13.0，最新的 Current 版本是 23.0.0。可以在 [Node.js 官网](https://nodejs.org/) 下载安装包进行安装，也可以使用包管理器进行安装。

如果使用 nvm 管理 Node.js 版本，可以使用以下命令安装 Node.js：

```bash
nvm install 22
```

此外，还需安装 npm、pnpm 或 yarn 以管理项目依赖。

::: code-group

```bash [npm]
npm
```

```bash [pnpm]
123
```

:::
