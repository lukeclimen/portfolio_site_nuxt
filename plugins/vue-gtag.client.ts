import VueGtag, { trackRouter } from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: process.env.NUXT_GOOGLE_ANALYTICS_TAG || "",
    },
  });
  trackRouter(useRouter());
});
