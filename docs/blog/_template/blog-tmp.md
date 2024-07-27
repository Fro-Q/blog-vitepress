---
title: '{{ title }}'
timestampId: <% tp.date.now("YYMMDD[a]") %>
head:
  - - meta
    - name: description
      content: {{ excerpt }}
  - - meta
    - name: keywords
      content:
        - {{ keyword }}
  - - meta
    - name: id
      content: <% tp.date.now("YYMMDD[a]") %>
---

{{ excerpt }}

---

[[toc]]
