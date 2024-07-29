<script setup>
import { Content } from "vitepress";
import { useData } from "vitepress";
import { computed } from "vue";
import { data as posts } from "./posts.data.js";
import { onMounted } from "vue";

const { page, frontmatter } = useData();

const dateInfo = computed(() => {
  if (frontmatter.value.date) {
    const date = new Date(frontmatter.value.created);
    return {
      time: +date,
      string: date.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
  }
  return {
    time: +new Date(),
    string: "",
  };
});

const lastUpdated = computed(() => {
  if (frontmatter.value.lastUpdated) {
    const date = new Date(frontmatter.value.last_modified);
    return {
      time: +date,
      string: date.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }),
    };
  }
  return {
    time: +new Date(),
    string: "",
  };
});

onMounted(() => {
  // filter by parent element id
  if (frontmatter.value.home) {
    return;
  }
  var thisHead = document.querySelector(
    `meta[name="id"][content="${page.value.frontmatter.timestampId}"]`,
  ).parentElement;
  var thisBody = thisHead.nextElementSibling;
  var toc = thisBody.getElementsByClassName("table-of-contents")[0];
  if (toc) {
    addEventListeners(toc);
  }
});

function addEventListeners(toc) {
  toc.addEventListener("mouseenter", function () {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "1px";
  });

  toc.addEventListener("mouseleave", function () {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  });
}

const nextPost = computed(() => {
  if (frontmatter.value.home) {
    return;
  }
  const thisPostIndex = posts.findIndex(
    (post) =>
      post.frontmatter.timestampId === page.value.frontmatter.timestampId,
  );
  if (thisPostIndex === posts.length - 1) {
    return;
  }
  return posts[thisPostIndex + 1];
});

const prevPost = computed(() => {
  if (frontmatter.value.home) {
    return;
  }
  const thisPostIndex = posts.findIndex(
    (post) =>
      post.frontmatter.timestampId === page.value.frontmatter.timestampId,
  );
  if (thisPostIndex === 0) {
    return;
  }
  return posts[thisPostIndex - 1];
});

const thisPostReadingInfo = computed(() => {
  if (frontmatter.value.home || page.value.isNotFound) {
    return;
  }
  const thisPostIndex = posts.findIndex(
    (post) =>
      post.frontmatter.timestampId === page.value.frontmatter.timestampId,
  );

  if (thisPostIndex === -1) {
    return { totalTime: 0, wordCount: 0 };
  }

  return posts[thisPostIndex].readingInfo;
});

onMounted(() => {
  if (frontmatter.value.home) {
    return;
  }
  var content = document.getElementById("content");
  var imgs = content.getElementsByTagName("img");
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    var p = img.parentNode;
    if (p.tagName === "P") {
      p.setAttribute("alt", img.getAttribute("alt"));
    }
  }
});
</script>

<template>
  <div
    class="post-wrapper"
    v-if="!frontmatter.home && !page.isNotFound"
  >
    <div class="post-title">
      <h1>{{ frontmatter.title }}</h1>
    </div>
    <div class="post-info">
      <div class="post-date">
        <span>{{ dateInfo.string }}</span>
      </div>
      <div class="post-reading-info">
        <span class="post-reading-time">
          约{{ thisPostReadingInfo.totalTime }}分钟
        </span>
        <span class="post-word-count">
          {{ thisPostReadingInfo.wordCount }}字
        </span>
      </div>
    </div>
    <Content
      class="content-wrapper"
      id="content"
    />
    <div class="content-footer">
      <div class="last-updated">
        <span>最后更新于</span>
        <span>{{ lastUpdated.string }}</span>
      </div>
      <div class="related-posts">
        <div class="related-posts-container">
          <div class="related-post">
            <div class="related-post-title">上一篇：</div>
            <a
              :href="prevPost.url"
              v-if="prevPost"
            >
              {{ prevPost.frontmatter.title }}
            </a>
            <div v-else>无</div>
          </div>
          <div class="related-post">
            <div class="related-post-title">下一篇：</div>
            <a
              :href="nextPost.url"
              v-if="nextPost"
            >
              {{ nextPost.frontmatter.title }}
            </a>
            <div v-else>无</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#content {
  & > div {
    width: 100%;
  }

  max-width: 700px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  line-height: 2;
  font-size: 1.2rem;

  & > div > p:first-child {
    display: none;
  }

  & .table-of-contents {
    overflow-y: auto;
    position: fixed;
    top: 100px;
    z-index: 100;
    left: 0;
    display: flex;
    // height: calc(100vh - 200px);
    max-width: calc((100% - 840px) / 2);
    min-width: 200px;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--toc-bg-color);
    backdrop-filter: blur(3px);
    font-size: 1rem;
    line-height: 1.5;
    color: var(--text-muted-color);
    border-left: 1px solid var(--text-muted-color);
    opacity: 0.2;
    transition: all 0.5s ease;

    // @media screen and (max-width: 1200px) {
    //   display: none;
    // }

    &:hover {
      opacity: 1;
    }

    & ul {
      overflow-y: auto;
      padding-left: 20px;
      margin: 0;

      &::-webkit-scrollbar {
        position: absolute;
        width: 1px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--text-muted-color);
      }

      & li {
        margin: 20px 0;

        & a {
          color: var(--text-muted-color);
          transition: all 0.2s ease;

          &:hover {
            color: var(--accent-color);
          }
        }

        &::marker {
          color: transparent;
        }
      }
    }

    & a {
      color: var(--text-muted-color);

      &:hover {
        color: var(--text-color);
      }

      &::after {
        display: none;
      }
    }
  }

  & div[class*="language-"] {
    position: relative;
    margin: 16px auto;
    background-color: var(--code-block-bg);
    border-radius: 4px;
    font-size: 0.9rem;

    &:hover button.copy {
      opacity: 1;
    }

    & button.copy {
      position: absolute;
      top: 0;
      right: 0;
      margin: 10px;
      width: 50px;
      height: 30px;
      appearance: none;
      border: 1px solid var(--code-numbers-border);
      border-radius: 3px;
      background-color: var(--code-block-bg);
      transition: all 0.2s ease;
      opacity: 0;

      &.copied {
        &::after {
          content: "\2713";
          color: var(--accent-color);
        }
      }

      &::after {
        content: "Copy";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        color: var(--text-muted-color);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease;
      }

      &:hover {
        border: 1px solid var(--text-muted-color);

        &::after {
          color: var(--accent-color);
        }
      }
    }

    & span.lang {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 20px;
      margin: 10px;
      padding: 0 6px;
      color: var(--text-faded-color);
    }

    & pre {
      padding: 20px 0;
      margin: 0;
      overflow-x: auto;

      &::-webkit-scrollbar {
        height: 1px;
        position: absolute;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--text-muted-color);
      }

      & code {
        padding: 0 30px;
        display: block;
        font-family: var(--font-mono);
        width: auto;

        & span {
          @media (prefers-color-scheme: dark) {
            color: var(--shiki-dark, inherit);
          }

          @media (prefers-color-scheme: light) {
            color: var(--shiki-light, inherit);
          }
        }
      }

      &.has-highlighted .line.highlighted {
        padding: 0 30px;
        margin: 0 -30px;
        display: inline-block;
        width: calc(100% + 40px);
        background-color: var(--code-highlight-bg);

        &.error {
          background-color: var(--code-error-bg);
        }

        &.warning {
          background-color: var(--code-warning-bg);
        }
      }

      &.has-focused-lines {
        & .line:not(.has-focus) {
          filter: blur(0.095rem);
          opacity: 0.5;
          transition: all 0.2s ease;
        }

        &:hover {
          .line:not(.has-focus) {
            filter: none;
            opacity: 1;
          }
        }
      }

      &.has-diff .line.diff {
        &.remove {
          padding: 0 30px;
          margin: 0 -30px;
          display: inline-block;
          width: calc(100% + 40px);
          background-color: var(--code-remove-bg);

          &::before {
            content: "-";
            position: absolute;
            transform: translateX(-200%);
            color: var(--code-remove-color);
          }
        }

        &.add {
          padding: 0 30px;
          margin: 0 -30px;
          display: inline-block;
          width: calc(100% + 40px);
          background-color: var(--code-add-bg);

          &::before {
            content: "+";
            position: absolute;
            transform: translateX(-200%);
            color: var(--code-add-color);
          }
        }
      }
    }

    &.line-numbers-mode {
      padding-left: 2.8em;

      & .line-numbers-wrapper {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
        color: var(--text-muted-color);
        border-right: 1px solid var(--code-numbers-border);
        padding-top: 20px;
        width: 2.8em;
        text-align: center;
        transition:
          border-color 0.5s,
          color 0.5s;
      }
    }
  }

  & .custom-block {
    margin: 16px auto;
    padding: 20px 30px;
    background-color: var(--code-block-bg);
    border-radius: 4px;

    &.info {
      background-color: var(--block-info-bg);
    }

    &.tip {
      background-color: var(--block-tip-bg);
    }

    &.warning {
      background-color: var(--block-warning-bg);
    }

    &.danger {
      background-color: var(--block-danger-bg);
    }

    &.details {
      background-color: var(--block-details-bg);
    }

    & .custom-block-title {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  & :is(h1, h2, h3, h4, h5, h6) {
    margin: 60px auto 5px auto;
    padding: 0;
    font-weight: 600;
    position: relative;
    color: var(--text-title-color);

    &:hover a {
      opacity: 1;
    }

    & a {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-120%);
      color: var(--text-muted-color);
      transition: all 0.2s ease;
      opacity: 0;

      &::after {
        display: none;
      }

      &:hover {
        color: var(--text-color);
      }
    }
  }

  & blockquote {
    margin: 16px auto;
    padding: 20px 30px;
    background-color: var(--quote-bg);
    border-radius: 4px;
    font-size: 1.2rem;
    color: var(--text-muted-color);
    border-left: 4px solid var(--text-muted-color);
    transition: all 0.2s ease;
    position: relative;

    & p strong {
      color: var(--text-color);
    }

    & > p:first-child::before {
      content: "format_quote";
      font-family: "Material Icons";
      position: absolute;
      display: block;
      top: -20px;
      right: 10px;
      font-size: 3rem;
      color: var(--text-muted-color);
      opacity: 0.2;
    }

    &:hover {
      border-left-color: var(--text-color);
    }

    & p {
      margin-top: 0;
    }
  }

  & p {
    code {
      padding: 2px 4px;
      font-size: 0.9em;
      color: var(--text-muted-color);
      background-color: var(--code-block-bg);
      border-radius: 4px;

      &::before {
        content: "\`";
      }

      &::after {
        content: "\`";
      }
    }

    & strong {
      font-weight: 900;
      color: var(--accent-color);
    }

    & u {
      text-underline-offset: 3px;
    }

    & mark {
      background-color: var(--accent-color);
      color: var(--bg-color);
      padding: 2px 4px;
      border-radius: 4px;
      margin: 0 2px;
    }

    & sup {
      font-size: 0.8em;
      vertical-align: super;
      line-height: 1;
      top: -0.5em;

      & a {
        color: var(--text-muted-color);

        &::after {
          display: none;
        }

        &:hover {
          color: var(--accent-color);
        }
      }
    }

    & ul,
    & ol {
      & li::marker {
        color: var(--accent-color);
      }
    }
  }

  & img {
    max-width: 80%;
    height: auto;
    margin: 0 auto;
    display: block;
  }

  & p:has(> img) {
    &::after {
      content: attr(alt);
      display: block;
      width: 60%;
      height: auto;
      margin: 10px auto 0 auto;
      text-align: center;
      color: var(--text-muted-color);
      font-size: 0.8rem;
    }
  }

  & section.footnotes {
    font-size: 0.8rem;
    margin: 50px 0;

    &::before {
      content: "参考资料";
      display: block;
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 10px;
    }

    & ol,
    & ul {
      padding-left: 1rem;
    }

    & .footnote-backref {
      color: var(--text-muted-color);
      font-size: 0.8rem;
      text-decoration: none;
      vertical-align: middle;
      line-height: 1;
      // top: -0.5em;

      &::after {
        display: none;
      }

      &:hover {
        color: var(--accent-color);
      }
    }
  }
}
</style>
