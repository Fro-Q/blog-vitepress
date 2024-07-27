---
title: '所有人都在说的「Prompt」'
timestampId: 230615a
head:
  - - meta
    - name: description
      content: 一篇关于「Prompt」的极极极简介绍。
  - - meta
    - name: keywords
      content:
        - Prompt
        - LLM
        - ChatGPT
        - 人工智能
  - - meta
    - name: id
      content: 230615a
created: 2024-01-26 17:00
last_modified: 2024-07-27 15:78
---

一篇关于「Prompt」的极极极简介绍。

---

[[toc]]

## 「Prompt」是什么？

由于知识储备的欠缺，这个词的起源我不太能追溯到。但相信在 GPT 时代，大家或多或少都听过这个词。关于「Prompt」，网络上有很多很多的解释：

1. <u>often contains instructions and examples of what you'd like the LLM to do</u>[^1].
2. <u>instructions issued to a computer system (such as a text-to-image artificial intelligence) in the form of written or spoken language</u>[^2].
3. <u>an instruction or discussion topic a user provides for the ChatGPT AI model to respond to</u>[^3].
4. ……

简单概括一下就是：Prompt 是**输入到语言模型中的指示性、引导性信息**。

## 「Prompt」能干啥？

很多朋友在体验 ChatGPT 的时候可能会感觉它并没有别人吹的那么惊艳，觉得它不听话、回答毫无价值、废话连篇、不符合期望。不可否认这玩意确实有很多问题，不过我想很大一部分朋友可能还是对它的定位和能力有一些误解。

[ChatGPT](https://chat.openai.com/) 是 [OpenAI](https://openai.com) 开发的一个聊天机器人程序，它<u>使用基于 GPT-3.5、GPT-4 架构的大语言模型（Large Language Model, LLM）并以强化学习（Reinforcement Learing, RL）训练</u>[^4]。它具有很强的**自然语言处理**能力，可以真正意义上理解用户输入的文本（一定程度上），并生成一个回答。在一些简单的情况下，它的回答还是相对靠谱的。但是由于我们平时使用的自然语言通常省略了很多**逻辑细节和前提条件**，所以当我们使用人类间交流的语言来跟 ChatGPT 交流时，它生成的答案并不总是合理。所以在使用 ChatGPT 以及其他的 LLM 时，给出精确的、有效的 Prompt 就显得十分重要。

对比下面两个 Prompt，虽然都并非完全规范，但还是高下立判。

```text
有什么好听的歌曲推荐给我？
```

```text
你是一名专业的音乐鉴赏师，为一个平常一般听 Mandopop、Cantopop、Contemporary Folk 的人推荐 5 - 10 首歌曲。
```

可以明显地看出，第二个 Prompt 比第一个提供了更多的信息（音乐类型），并作出了一些限制（歌曲数量），还为模型设定了一个角色。则比起第一个 Prompt，第二个自然更有可能生成更靠谱的回答。

## 「Prompt」都有哪些类型

根据不同的分类方式，Prompt 可以被分成不同的类型。较为常见的分类方式之一是依据**样本的数量**将其分为 **Zero-Shot Prompt** 和 **Few-Shot Prompt**。前者不向模型提供相关的实例，如

```text
Translate Flower to Spanish.
```

后者则允许模型在少量示例或指导信息的帮助下生成回答，如：

```text
English: music
Spanish: música
English: father
Spanish: padre
English: flower
Spanish: {}
```

Prompt 的编写相当值得学习。[后续的文章](basics_of_prompting.md) 中我会进一步介绍其常见的的编写规范与技巧。

[^1]: andrew makes things, [Prompt Engineering Tips and Tricks with GPT-3](https://blog.andrewcantino.com/blog/2021/04/21/prompt-engineering-tips-and-tricks/)
[^2]: Wikipedia, [Prompt](https://en.wikipedia.org/wiki/Prompt)
[^3]: Vincent Terrasi, [How To Write ChatGPT Prompts To Get The Best Results](https://www.searchenginejournal.com/how-to-write-chatgpt-prompts/479324/#close)
[^4]: Wikipedia, [ChatGPT](https://zh.wikipedia.org/wiki/ChatGPT)
