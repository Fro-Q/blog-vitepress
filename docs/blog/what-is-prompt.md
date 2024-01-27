---
title: 'What is Prompt?'
date: 2023-06-15
timestampId: "230615a"
lastUpdated: 2023-06-15 18:46
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
        - 机器学习
        - 人机交互
  - - meta
    - name: id
      content: 230615a
---

一篇关于「Prompt」的极极极简介绍。

---

[[toc]]

「*Prompt*」是什么？

由于知识储备的欠缺，这个词的起源我不太能追溯到。但相信在 GPT 时代，大家或多或少都听过这个词。关于「Prompt」，网络上有很多很多的解释：<u>often contains instructions and examples of what you’d like the LLM to do</u>[^1]、<u>instructions issued to a computer system (such as a text-to-image artificial intelligence) in the form of written or spoken language</u>[^2]、<u>an instruction or discussion topic a user provides for the ChatGPT AI model to respond to</u>[^3]……简单概括一下就是：Prompt 是**输入到语言模型中的指示性、引导性信息**。

很多朋友可能在体验 ChatGPT 的时候可能感觉它并没有别人吹的那么惊艳，觉得它不听话、回答毫无价值，废话连篇、不符合期望。我想这部分朋友可能对它的定位和能力有一点误解。所以我在这里大概介绍一下 ChatGPT 这个玩意。

*ChatGPT* 是 [OpenAI](https://openai.com) 开发的一个聊天机器人程序，它<u>使用基于 GPT-3.5、GPT-4 架构的大语言模型（Large Language Model, LLM）并以强化学习（Reinforcement Learing, RL）训练</u>[^4]。它具有很强的处理**自然语言**的能力，可以真正意义上理解用户输入的文本，并生成一个回答。在一些简单的情况下，它的回答还是相对靠谱的。但是由于我们平时使用的自然语言通常**省略了很多逻辑细节和前提条件**，所以当我们使用人类间交流的日常语言来进行输入时，ChatGPT 生成的答案可能并不总是会符合用户的预期。所以在使用 ChatGPT 以及其他的 LLM 时，给出合理的 Prompt 就十分重要了。

对比下面两个 Prompt，虽然都不是很具有编写 Prompt 的规范性，但还是高下立判。

```text
有什么好听的歌曲推荐？
```

```text
你是一名专业的音乐鉴赏师，为一个平常一般听 Mandopop、Cantopop、Contemporary Folk 的年轻男性推荐 5 - 10 首歌曲。
```

可以明显地看出，第二个 Prompt 比第一个提供了更多的信息（音乐类型），并作出了一些限制（歌曲数量），还为 LLM 设定了一个实际的角色。总的来说，第二个 Prompt 可以被认为是一个合格的、有效的 Prompt。

根据不同的分类方式，Prompt 可以被分成不同的类型。最常见的分类是依据样本的数量将其分为 *Zero-Shot Prompt* 和 *Few-Shot Prompt*。前者不向模型提供相关的实例，如
```text
Translate Flower to Spanish.
```
Few-Shot Prompt 则允许模型在少量示例或指导信息的帮助下生成回答，如：
```text
English: music
Spanish: música
English: father
Spanish: padre
English: flower
Spanish: {}
```

Prompt 的编写相当值得学习。后续的文章中我会进一步介绍其常见的的编写规范与技巧。


[^1]: andrew makes things, [Prompt Engineering Tips and Tricks with GPT-3](https://blog.andrewcantino.com/blog/2021/04/21/prompt-engineering-tips-and-tricks/)
[^2]: Wikipedia, [Prompt](https://en.wikipedia.org/wiki/Prompt)
[^3]: Vincent Terrasi, [How To Write ChatGPT Prompts To Get The Best Results](https://www.searchenginejournal.com/how-to-write-chatgpt-prompts/479324/#close)
[^4]: Wikipedia, [ChatGPT](https://zh.wikipedia.org/wiki/ChatGPT)
