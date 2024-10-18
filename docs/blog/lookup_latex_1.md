---
title: '*unfinished*｜来查表 · 日用公式/快捷键/概念定义等等之收集整理 · LaTeX 公式（一）'
timestampId: 241001a
category: 共读
head:
  - - meta
    - name: description
      content: 一些收集整理——LaTeX 公式（一）。
  - - meta
    - name: keywords
      content: latex greekletter binaryoperator
  - - meta
    - name: id
      content: 241001a
created: 2024-10-01 19:25
last_modified: 2024-10-01 19:25
---

一些收集整理——LaTeX 公式（一）。

---

[[toc]]

## `LaTeX` 中的公式 <Badge text="Unfinished" type="warning" />

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

### 二元与关系｜Binary Operators and Relations

| 渲染                                                                               | 输入                                                                               |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| $+$, $-$, $\times$, $\div$                                                       | `+`, `-`, `\times`. `\div`                                                       |
| $\cdot$, $\ast$, $\colon$                                                        | `\cdot`, `\ast`, `\colon`                                                        |
| $\pm$, $\mp$, $\divideontimes$                                                   | `\pm`, `\mp`, `\divideontimes`                                                   |
| $\prec$, $\succ$, $\preceq$, $\succeq$                                           | `\prec`, `\succ`, `\preceq`, `\succeq`                                           |
| $\nprec$, $\nsucc$, $\npreceq$, $\nsucceq$                                       | `\nprec`, `\nsucc`, `\npreceq`, `\nsucceq`                                       |
| $\preccurlyeq$. $\succcurlyeq$, $\curlyeqprec$, $\curlyeqsucc$                   | `\preccurlyeq`, `\succcurlyeq`, `\curlyeqprec`, `\curlyeqsucc`                   |
| $\precsim$, $\succsim$, $\precnsim$, $\succnsim$                                 | `\precsim`, `\succsim`, `\precnsim`, `\succnsim`                                 |
| $\precapprox$, $\succapprox$, $\precnapprox$, $\succnapprox$                     | `\precapprox`, `\succapprox`, `\precnapprox`, `\succnapprox`                     |
| $\cong$, $\ncong$                                                                | `\cong`, `\ncong`                                                                |
| $\asymp$                                                                         | `\asymp`                                                                         |
| $\dashv$                                                                         | `\dashv`                                                                         |
| $\vdash$, $\vDash$, $\Vdash$, $\Vvdash$                                          | `\vdash`, `\vDash`, `\Vdash`, `\Vvdash`                                          |
| $\nvdash$, $\nvDash$, $\nVdash$                                                  | `\nvdash`, `\nvDash`, `\nVvdash`                                                 |
| $\perp$, $\parallel$, $\nparallel$                                               | `\perp`, `\parallel`, `\nparallel`                                               |
| $\mid$, $\nmid$                                                                  | `\mid`, `\nmid`                                                                  |
| $\Join$                                                                          | `\bowtie`                                                                        |
| $\propto$, $\varpropto$                                                          | `\propto`, `\varpropto`                                                          |
| $\between$                                                                       | `\between`                                                                       |
| $\in$, $\ni$, $\notin$                                                           | `\in`, `\ni`, `\notin`                                                           |
| $\subset$, $\supset$, $\subseteq$, $\supseteq$                                   | `\subset`, `\supset`, `\subseteq`, `\supseteq`                                   |
| $\sqsubset$, $\sqsupset$, $\sqsubseteq$, $\sqsupseteq$                           | `\sqsubset`, `\sqsupset`, `\sqsubseteq`, `\sqsupseteq`                           |
| $\nsubseteq$, $\nsupseteq$, $\subsetneq$, $\supsetneq$                           | `\nsubseteq`, `\nsupseteq`, `\subsetneq`, `\supsetneq`                           |
| $\subseteqq$, $\supseteqq$                                                       | `\subseteq`, `\supseteq`                                                         |
| $\nsubseteqq$, $\nsupseteqq$, $\subsetneqq$, $\supsetneqq$                       | `\nsubseteqq`, `\nsupseteqq`, `\subsetneqq`, `\supsetneqq`                       |
| $\Subset$, $\Supset$                                                             | `\Subset`, `\Supset`                                                             |
| $\lt$, $\gt$, $\leq$, $\geq$                                                     | `\lt`, `\gt`, `\leq`, `\geq`                                                     |
| $\nless$, $\ngtr$, $\nleq$, $\ngeq$, $\lneq$, $\gneq$                            | `\nless`, `\ngtr`, `\nleq`, `\ngeq`, `\lneq`, `\gneq`                            |
| $\ll$, $\lll$, $\gg$, $\ggg$                                                     | `\ll`, `\lll`, `\gg`, `\ggg`                                                     |
| $\leqq$, $\geqq$, $\lessapprox$, $\gtrapprox$, $\lesssim$, $\gtrsim$             | `\leqq`, `\geqq`, `\lessapprox`, `\gtrapprox`, `\lesssim`, `\gtrsim`             |
| $\nleqq$, $\ngeqq$                                                               | `\nleqq`, `\ngeqq`                                                               |
| $\lneqq$, $\gneqq$, $\lnapprox$, $\gnapprox$, $\lnsim$, $\gnsim$                 | `\lneqq`, `\gneqq`, `\lnapprox`, `\gnapprox`, `\lnsim`, `\gnsim`                 |
| $\lvertneqq$, $\gvertneqq$                                                       | `\lvertneqq`, `\gvertneqq`                                                       |
| $\leqslant$, $\geqslant$, $\eqslantless$, $\eqslantgtr$                          | `\leqslant`, `\geqslant`, `\eqslantless`, `\eqslantgtr`                          |
| $\lesseqgtr$, $\gtreqless$, $\lesseqqgtr$, $\gtreqqless$, $\lessgtr$, $\gtrless$ | `\lesseqgtr`, `\gtreqless`, `\lesseqqgtr`, `\gtreqqless`, `\lessgtr`, `\gtrless` |
|                                                                                  |                                                                                  |

### 箭头｜Arrows

| 渲染                                                                             | 输入                                                                             |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| $\leftarrow$, $\rightarrow$, $\leftrightarrow$                                 | `\leftarrow`, `\rightarrow`, `\leftrightarrow`                                 |
| $\Leftarrow$, $\Rightarrow$, $\Leftrightarrow$                                 | `\Leftarrow`, `\Rightarrow`, `\Leftrightarrow`                                 |
| $\hookleftarrow$, $\hookrightarrow$, $\leadsto$                                | `\hookleftarrow`, `\hookrightarrow`, `\leadsto`                                |
| $\longleftarrow$, $\longrightarrow$, $\longleftrightarrow$                     | `\longleftarrow`, `\longrightarrow`, `\longleftrightarrow`                     |
| $\Longleftarrow$, $\Longrightarrow$, $\Longleftrightarrow$                     | `\Longleftarrow`, `\Longrightarrow`, `\Longleftrightarrow`                     |
| $\mapsto$, $\longmapsto$                                                       | `\mapsto`, `\longmapsto`                                                       |
| $\uparrow$, $\downarrow$, $\updownarrow$                                       | `\uparrow`, `\downarrow`, `\updownarrow`                                       |
| $\Uparrow$, $\Downarrow$, $\Updownarrow$                                       | `\Uparrow`, `\Downarrow`, `\Updownarrow`                                       |
| $\nearrow$, $\nwarrow$, $\swarrow$, $\searrow$                                 | `\nearrow`, `\nwarrow`, `\swarrow`, `\searrow`                                 |
| $\leftharpoondown$, $\leftharpoonup$, $\rightharpoondown$, $\rightharpoonup$   | `\leftharpoondown`, `\leftharpoonup`, `\rightharpoondown`, `\rightharpoonup`   |
| $\rightleftharpoons$                                                           | `\rightleftharpoons`                                                           |
| $\circlearrowleft$, $\circlearrowright$, $\curvearrowleft$, $\curvearrowright$ | `\circlearrowleft`, `\circlearrowright`, `\curvearrowleft`, `\curvearrowright` |
|                                                                                |                                                                                |
