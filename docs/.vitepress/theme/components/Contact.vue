<script setup>
import { useData } from "vitepress";
import StyledULink from "./StyledULink.vue";

const { site } = useData();

// (function (C, A, L) {let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
// Cal("init", "long", { origin: "https://cal.com" });

// `data-cal-link="froblo/long"`
// data-cal-namespace="long"
// `data-cal-config='{"layout":"month_view"}'`

// Cal.ns.long("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
</script>

<template>
  <div class="mx-auto flex h-[calc(100vh-100px)] w-[calc(100%-60px)] max-w-[800px] flex-col justify-start px-6">
    <div
      class="sticky top-0 z-10 mb-5 bg-neutral-50 py-10 after:absolute after:-bottom-8 after:left-0 after:z-[-1] after:h-8 after:w-full after:bg-gradient-to-t after:from-transparent after:to-neutral-50"
    >
      <h2
        id="contact"
        class="font-serif text-4xl"
      >
        相与
      </h2>
    </div>
    <div class="contacts-info flex flex-col items-start justify-start">
      <div class="contact-email contact-info mb-5">
        <p class="text-xl transition duration-200">
          向我发送
          <!-- <a :href="`mailto:${site.themeConfig.email}`">邮件</a> -->
          <StyledULink
            :href="`mailto:${site.themeConfig.email}`"
            text="邮件"
          ></StyledULink>
        </p>
      </div>
      <div class="contact-github contact-info">
        <p class="text-xl transition duration-200">
          在
          <!-- <a :href="site.themeConfig.github">GitHub</a> -->
          <StyledULink
            :href="site.themeConfig.github"
            text="GitHub"
          ></StyledULink>
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
