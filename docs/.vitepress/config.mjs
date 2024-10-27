import { defineConfig, defineConfigWithTheme } from "vitepress";
import { RssPlugin } from "vitepress-plugin-rss";
import markdownItFootnote from "markdown-it-footnote";
import markdownItMark from "markdown-it-mark";
import anchor from "markdown-it-anchor";
import path from "path";

const rssOptions = {
  baseUrl: "https://fro-blo.com/",
  title: "froQ",
  language: "zh-cn",
  author: {
    name: "froQ",
    email: "froqqq@outlook.com",
    link: "https://fro-blo.com/",
  },
  icon: false,
  copyRight: "CopyRight © 2023-present, froQ",
};

export default defineConfigWithTheme({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  vite: {
    plugins: [RssPlugin(rssOptions)],
    resolve: {
      alias: {
        "@utils": path.resolve("./docs/.vitepress/theme/utils"),
        // "@utils": path.resolve(".vitepress/theme/utils"),
      },
    },
    build: {
      rollupOptions: {
        external: ["./docs/.vitepress/theme/utils/selfDescription"],
      },
    },
  },
  title: "froQ",
  description: "froQ's personal blog",
  lang: "zh-CN",
  base: "/",
  cleanUrls: true,

  // markdown files to be excluded when building
  srcExclude: ["**/README.md", "**/_dictionary.md", "**/_template/*.md"],
  metaChunks: true,

  themeConfig: {
    email: "froqqq@outlook.com",
    github: "https://github.com/Fro-Q",
    contacts: [
      {
        type: "mastodon",
        text: "Mastodon",
        links: [
          { link: "https://elk.zone/fairy.id/@froq", text: "@froq@fairy.id" },
          { link: "https://elk.zone/moresci.sale/@_froQ_", text: "@_froQ_@moresci.sale" },
          { link: "https://elk.zone/m.otter.homes/@froQ", text: "@froQ@m.otter.homes" },
        ],
        icon: {
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' display='inline-block' height='1.0em' width='1.0em' vertical-align='text-bottom'><path fill='currentColor' d='M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z'/></svg>",
        },
        tailwindColor: { light: "#8b5cf6", dark: "#a78bfa" },
      },
      {
        type: "email",
        text: "Email",
        links: [{ link: "mailto:froqqq@outlook.com", text: "@outlook" }],
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" display="inline-block" height="1.0em" width="1.0em" vertical-align="text-bottom"><path fill="currentColor" d="M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 4.5L12 13.5L3 7.5V7l9 6.5L21 7v.5z"/></svg>',
        },
        tailwindColor: { light: "#0ea5e9", dark: "#38bdf8" },
      },
      {
        type: "github",
        text: "GitHub",
        links: [{ link: "https://github.com/Fro-Q", text: "@Fro-Q" }],
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" display="inline-block" height="1.0em" width="1.0em" vertical-align="text-bottom"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        tailwindColor: { light: "#404040", dark: "#a3a3a3" },
      },
    ],
    socialLinks: [
      {
        ariaLabel: "GitHub",
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" display="inline-block" height="1.0em" width="1.0em" vertical-align="text-bottom"><path fill="currentColor" d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.7 5.7 0 0 0-1.837-2.415a1 1 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.4 4.4 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182M20.737 5.377q.049-.187.09-.42a6.3 6.3 0 0 0-.408-3.293a1 1 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.9 13.9 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a1 1 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357q.037.191.079.354a6.27 6.27 0 0 0-1.256 3.83a8 8 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a5 5 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.7 1.7 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a7 7 0 0 1-.033-.738a4.26 4.26 0 0 1 .92-2.713a3 3 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.4 3.4 0 0 1-.155-.555a4.1 4.1 0 0 1 .079-1.616a7.5 7.5 0 0 1 2.415 1.18a1 1 0 0 0 .827.133a11.8 11.8 0 0 1 6.173.001a1 1 0 0 0 .83-.138a7.6 7.6 0 0 1 2.406-1.19a4 4 0 0 1 .087 1.578a3.2 3.2 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.12 4.12 0 0 1 20 9.203a7 7 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3 3 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a5 5 0 0 0-.155-1.311a4 4 0 0 0-.116-.416a6.51 6.51 0 0 0 5.445-6.424A9 9 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826"/></svg>',
        },
        link: "https://github.com/Fro-Q",
      },
      {
        ariaLabel: "RSS",
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" display="inline-block" height="1.2em" width="1.2em" vertical-align="text-bottom"><path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm5 3a10 10 0 0 0-2 .188v2.062a8 8 0 0 1 2-.25c4.41 0 8 3.59 8 8a8 8 0 0 1-.25 2h2.063A10 10 0 0 0 22 20c0-5.516-4.484-10-10-10m0 4a6 6 0 0 0-2 .344v2.219A3.97 3.97 0 0 1 12 16c2.207 0 4 1.793 4 4c0 .73-.219 1.41-.563 2h2.22A6 6 0 0 0 18 20c0-3.309-2.691-6-6-6m0 4a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"/></svg>',
        },
        link: "https://fro-blo.com//feed.rss",
      },
      {
        ariaLabel: "Mastodon",
        icon: {
          svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' display='inline-block' height='1.0em' width='1.0em' vertical-align='text-bottom'><path fill='currentColor' d='M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z'/></svg>",
        },
        link: "https://elk.zone/fairy.id/@froq",
      },
    ],
  },
  markdown: {
    anchor: {
      permalink: anchor.permalink.headerLink(),
    },
    toc: {
      level: [2, 3, 4, 5],
      // format: (str) => {},
    },
    lineNumbers: true,
    math: true,
    config: (md) => {
      md.use(markdownItFootnote);
      md.use(markdownItMark);
    },
    container: {
      tipLabel: "点触",
      warningLabel: "备患",
      dangerLabel: "存亡",
      infoLabel: "另言",
      detailsLabel: "深尝",
      // cautionLabel: "留心",
      // importantLabel: "",
      // noteLabel: "留记",
    },
  },
});
