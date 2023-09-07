// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //   runtimeConfig: {
  //     public: {
  //       gtagId: "G-WGEXVSDGV1",
  //     },
  //   },
  modules: [
    // https://github.com/davestewart/nuxt-content-assets
    "nuxt-content-assets", // make sure to add before content!
    "@nuxt/content",
    [
      "nuxt-mail",
      {
        message: {
          name: "rpaitw.com",
          to: "rpadigitaltransformer@gmail.com",
        },
        smtp: {
          service: "gmail",
          auth: {
            user: "rpadigitaltransformer@gmail.com",
            pass: "kkejtveutetnqnvp",
          },
        },
      },
    ],
    "nuxt-simple-sitemap",
  ],
  css: ["~/assets/scss/styles.scss"],
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      script: [
        {
          src: "https://use.fontawesome.com/releases/v6.3.0/js/all.js",
          crossorigin: "anonymous",
        },
        {
          src: "js/scripts.js",
        },
      ],
      link: [
        {
          href: "https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic",
          rel: "stylesheet",
          type: "text/css",
        },
        {
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800",
          rel: "stylesheet",
          type: "text/css",
        },
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: "Javascript is required" },
      ],
    },
  },
});
