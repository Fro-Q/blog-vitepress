---
title: '来查表 · 日用公式/快捷键/概念定义等等之收集整理'
timestampId: 240924a
category: 共读
head:
  - - meta
    - name: description
      content: 一些收集整理。
  - - meta
    - name: keywords
      content: latex
  - - meta
    - name: id
      content: 240924a
created: 2024-09-24 16:35
last_modified: 2024-09-24 16:35
---

一些收集整理。

---

[[toc]]

## 序

平常总会遇到一些东西老是需要去查，比如 $\LaTeX$ 公式、命令行指令等等。查过一次也不想着记，一直查一直不爽。于是开了个坑，方便自己，如果可能的话也方便大家。

::: tip  
本文内容较长，将对一部分内容进行详细介绍而非~~类似网络上大多数其它收集整理文章那样~~仅仅进行罗列。

本文将长期处于更新中。

截至 2024 年 9 月 24 日，本站暂不支持搜索功能，请通过 `cmd/ctrl + F` 使用浏览器的搜索功能进行检索。  
:::

## `LaTeX` 中的公式

::: tip  
本节仅介绍 $\LaTeX$ 中的数学公式部分。有关 $\LaTeX$ 使用方法（排版、页码管理等）的内容，请阅读其它文章或访问 [The $\LaTeX$ Project 官网](https://www.latex-project.org/)。  
:::

### 希腊字母｜Greek Letters

| 渲染                              | 输入                              | 渲染                        | 输入                        |
| ------------------------------- | ------------------------------- | ------------------------- | ------------------------- |
| $\alpha$, $A$                   | `\alpha`, `A`                   | $\nu$, $N$                | `\nu`, `N`                |
| $\beta$, $B$                    | `\beta`, `B`                    | $\xi$, $\Xi$              | `\xi`, `\Xi`              |
| $\gamma$, $\Gamma$              | `\gamma`, `\Gamma`              | $o$, $O$                  | `o`, `O`                  |
| $\delta$, $\Delta$              | `\delta`, `\Delta`              | $\pi$, $\Pi$              | `\pi`, `\Pi`              |
| $\epsilon$, $\varepsilon$, $E$  | `\epsilon`, `\varepsilon`, `E`  | $\rho$, $\varrho$, $P$    | `\rho`, `\varrho`, `P`    |
| $\zeta$, $Z$                    | `\zeta`, `Z`                    | $\sigma$, $\Sigma$        | `\sigma`, `\Sigma`        |
| $\eta$, $H$                     | `\eta`, `H`                     | $\tau$, $T$               | `\tau`, `T`               |
| $\theta$, $\vartheta$, $\Theta$ | `\theta`, `\vartheta`, `\Theta` | $\upsilon$, $\Upsilon$    | `\upsilon`, `\Upsilon`    |
| $\iota$, $I$                    | `\iota`, `I`                    | $\phi$, $\varphi$, $\Phi$ | `\phi`, `\varphi`, `\Phi` |
| $\kappa$, $K$                   | `\kappa`, `K`                   | $\chi$, $X$               | `\chi`, `X`               |
| $\lambda$, $\Lambda$            | `\lambda`, `\Lambda`            | $\psi$, $\Psi$            | `\psi`, `\Psi`            |
| $\mu$, $M$                      | `\mu`, `M`                      | $\omega$, $\Omega$        | `\omega`, `\Omega`        |

值得注意的是，epsilon、theta、rho 以及 phi 四个字母拥有三种变体，而其它的（/大多数）字母仅拥有两种变体，即大写（Upper）与小写（Small）。

关于此现象的更多讨论，请阅读 [LaTeX 中的 `\epsilon` 与 `\varepsilon`](latex_epsilon_vs_varepsilon.md)。

### 二元与关系

#### 加减乘除等

| 渲染                             | 输入                             |
| ------------------------------ | ------------------------------ |
| $+$, $-$, $\times$, $\div$     | `+`, `-`, `\times`. `\div`     |
| $\cdot$, $\ast$, $\colon$      | `\cdot`, `\ast`, `\colon`      |
| $\pm$, $\mp$, $\divideontimes$ | `\pm`, `\mp`, `\divideontimes` |

#### 相等与相似

| 渲染                                                           | 输入                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| $\equiv$, $=$, $\neq$                                        | `\equiv`, `=`, `\ne`                                         |
| $\approx$, $\approxeq$, $\thickapprox$                       | `\approx`, `\approxeq`, `\thickapprox`                       |
| $\precapprox$, $\succapprox$, $\precnapprox$, $\succnapprox$ | `\precapprox`, `\succapprox`, `\precnapprox`, `\succnapprox` |
| $\sim$, $\simeq$, $\backsim$, $\backsimeq$, $\thicksim$      | `\sim`, `\simeq`, `\backsim`, `\backsimeq`, `\thicksim`      |
| $\precsim$, $\succsim$, $\precnsim$, $\succnsim$             | `\precsim`, `\succsim`, `\precnsim`, `\succnsim`             |
|                                                              |                                                              |
