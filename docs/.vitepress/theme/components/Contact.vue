<script setup>
import { useData } from "vitepress";

const { site } = useData();

// (function (C, A, L) {let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
// Cal("init", "long", { origin: "https://cal.com" });

// `data-cal-link="froblo/long"`
// data-cal-namespace="long"
// `data-cal-config='{"layout":"month_view"}'`

// Cal.ns.long("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
</script>

<template>
  <div class="contacts-wrapper">
    <div class="title">
      <h2 id="contact">Contact</h2>
    </div>
    <div class="contacts-info">
      <div class="contact-email contact-info">
        <p>
          向我发送
          <a :href="`mailto:${site.themeConfig.email}`">邮件</a>
        </p>
      </div>
      <div class="contact-github contact-info">
        <p>
          在
          <a :href="site.themeConfig.github">GitHub</a>
          上找到我
        </p>
      </div>
      <!-- <div class="contact-calendar contact-info">
        <p>在 Cal.com 上 <span data-cal-link=" froblo/long" data-cal-namespace="long"
            data-cal-config='{"layout":"month_view"}'>预约</span></p>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss">
.contacts-wrapper {
  height: calc(100vh - 60px);
  padding: 0 30px;
  max-width: 800px;
  width: calc(100% - 60px);
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;

  & .title {
    position: sticky;
    top: 0;
    background-color: var(--bg-color);
    z-index: 100;
    margin-bottom: 20px;

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 30px;
      bottom: -30px;
      left: 0;
      // gradient to transparent
      background: linear-gradient(to top, transparent 0%, var(--bg-color) 100%);

      transition: all 0.2s ease;
      z-index: -1;
    }
  }

  & .contacts-info {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    & .contact-info {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      margin-bottom: 20px;

      & p {
        font-size: 1.5rem;
        color: var(--text-muted-color);
        transition: all 0.2s ease;

        & a,
        & span {
          color: var(--text-muted-color);
          text-decoration: underline;
          cursor: pointer;
          transition: all 0.2s ease;

          &:hover {
            color: var(--accent-color);
          }
        }
      }
    }
  }
}
</style>
