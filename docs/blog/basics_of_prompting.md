---
title: 'Prompt 入门'
timestampId: 230628a
head:
  - - meta
    - name: description
      content: 一些关于 prompt 的入门知识，包括一种基础的 prompt 格式、两种常用的 prompt 类型、prompt 的组成元素以及 prompt 设计的通用思维与方法。
  - - meta
    - name: keywords
      content:
        - Prompt
        - LLM
        - ChatGPT
        - 人工智能
  - - meta
    - name: id
      content: 230628a
created: 2023-06-28 19:00
last_modified: 2024-07-27 15:88
---

一些关于 prompt 的入门知识，包括一种基础的 prompt 格式、两种常用的 prompt 类型、prompt 的组成元素以及 prompt 设计的通用思维与方法。

---

[[toc]]

前面提到过，在使用 ChatGPT 之类的 LLM 时，prompt 的质量决定了生成回复的质量，prompt 的质量则取决于其提供的信息。一个 prompt 所包含的信息可以有：<u>instruction、qusetion、context、inputs、examples</u>[^1] 等，它们将引导模型给出更符合预期的结果。

## 一个简单的 Prompt 格式

LLM 的本质是**概率模型**，即根据已有的 token 来预测下一个 token 的概率分布。如果**提供的信息不充分**或**给出的引导不明确**，LLM——如 ChatGPT——可能会给出一些预期之外的回答，所以早期的 LLM 会出现下面这类问题：
*input:*

```text
I want to
```

*output:*

```text
see a movie.
```

目前，ChatGPT 已经在一定程度上解决了这个问题。对于以上输入，ChatGPT 给出的回复是：

```text
Certainly! How can I assist you today? Please provide me with more details or let me know what you would like to do, and I'll do my best to help you.
```

但无论如何，在 prompt 中向 LLM 明确其需要完成的任务是非常重要的。一个简单的 prompt 格式——Question Answering(**QA**) 模式，可以表示为：

```text
Q: <Question>?
A:
```

## 两种常用的 Prompt 类型

向 ChatGPT 询问「**什么是 GPT？**」：

```text
Q: What is GPT?
A:
```

上面这种**不提供 examples** 的 prompt 被称为「**Zero-shot Prompt**」。虽然 LLM 具备应答 Zero-shot Promp 的能力，但如果问题过于复杂、描述具有歧义或者需要指定输出格式，则通常需要提供一些 examples 以增强对于**任务类型**、**涉及领域**、**回答格式**等的指向性。如：

```text
Q: What is LLM?
A: LLM stands for Large Language Model.
Q: What is NLP?
A: NLP stands for Natural Language Processing.
Q: What is GPT?
A:
```

得到的结果会更加符合预期（虽然在这一个例子、这一次实践中，仍没有做到格式上与 examples 的完全统一）：

```text
GPT stands for "Generative Pre-trained Transformer." It is a type of large language model developed by OpenAI.
```

上面这种提供 examples 的 prompt 被称为「**Few-shot Prompt**」。

## Prompt 的组成

关于 prompt 的组成，学者们给出了不同的意见。

澳大利亚未来学家 *Ross Dawson* 认为 prompt 的主要组成元素包括 [^2]：

- Persona（角色）
- Context（语境）
- Audience（受众）
- Instructions（指令）
- Style（风格）
- Format（格式）
- Examples（范例）
- Variability（变量）
- Constraints（限制）
- Refinement（改进）

Microsoft 在 *Azure OpenAI Service Documentation* 中将 prompt 的组成阐述为 [^3]：

- Instructions（指令）
- Primary content（主要内容）
- Examples（范例）
- Cue（提示）
- Supporting content（支持内容）

虽然各种观点看似差异较大，但总地来说，prompt 的组成元素可以被形容为 [^4]：

- Instructions（指令）
- Context（语境）
- Input data（输入数据）
- Output Indicator（输出指示）

## TIPS

具体的 prompt 设计技巧与规范我会在后面的文章里详细介绍，这里先罗列出一些在使用 ChatGPT 时需要注意的原则。

### 明确表达

对于一些特定的要求（如字数要求（基本就没听话过）），即使提供了非常明确的信息，ChatGPT 也时常给出不符合要求的回答。但无论如何，**进行尽可能明确的表达**能够显著提高回答的可靠性与有效性。注意，这里的「明确」包括**词意**、**语意**以及**语境**层面。下面提供了一些负面案例：

```text
用几句话来解释一下写 prompt 需要注意的事。
----------
用 3 - 5 句话阐述 prompt 编写中能够提高回复质量的技巧。
```

或：

```
我今天要写一个实验报告，有点多，老师让我们明天交，我都不知道怎么开头。你帮我写一个开头吧。
----------
我需要写一篇实验报告，课程名称是《GIS 算法与数据结构》，实验报告的结构为：实验预习报告（实验目的、实验原理、实验设备）、实验过程记录、实验结果（结论、小结、建议、体会）。以下是实验内容的更多信息：
    {content}
请帮我写第一篇实验报告的实验预习部分，不超过 500 字。
```

### 拆分任务

对任务进行拆分一方面可以避免 ChatGPT 由于单次生成文字的限制而导致的**回答中断**，另一方面可以**基于各个子任务对其进行更精确的引导**以得到更可靠的回复。如对于「一篇论文的撰写」这个任务，可以将任务拆分为「确定论文框架」、「确定论文标题」、「确定写作大纲」、「各部分内容的撰写」、「检查与修正」等。

### 善用迭代

ChatGPT 毕竟不是完美的产品，所以难免会出现生成的回复与预期不符的情况。在使用时根据实际情况，**修正**与**改进** prompt，才能使回复逐渐趋近于用户的期望。

### 扬长避短

作为一个 LLM，ChatGPT 有其擅长与不擅长的领域。它**擅长**创造、设计方案、回答普适性知识、无中生有（「螺丝钉炒面是一道中国家常菜」）等；它**不擅长**数数（经常算错字数）、回答实时性问题、中文词辨识等等。在实际运用中，尽量避免涉及其不擅长的工作，对提升回答的质量与稳定用户的心情都具有莫大的益处。

[^1]: Prompt Engineering Guide, [Basics of Prompting](https://www.promptingguide.ai/introduction/basics)
[^2]: Ross Dawson, [Humans + AI: Prompt Elements](https://rossdawson.com/humans-plus-ai/humans-ai-prompt_elements/)
[^3]: Microsoft, [Introduction to prompt engineering](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/prompt-engineering#cue)
[^4]: Prompt Engineering Guide, [Elements of a Prompt](https://www.promptingguide.ai/introduction/elements)
