// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "Inventory Management System",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content: "Inventory Management System",
        },
        {
          name: "og:title",
          content: "Inventory Management System",
        },
        {
          name: "og:description",
          content: "Inventory Management System",
        },
        {
          name: "og:image",
          content:
            "https://th.bing.com/th/id/R.fee0eae5a704343c3f409e14542c0cb1?rik=qAsEILg0wwaUyw&riu=http%3a%2f%2fintegratedelectronics.co.in%2fwp-content%2fuploads%2f2018%2f07%2fwarehouse-inventory-icon-6.png&ehk=TxZHpKAX3mCTWYoo%2fos%2fR%2f341ZcEcnLC%2fn7cpECbzOM%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          name: "og:url",
          content:
            "https://th.bing.com/th/id/R.fee0eae5a704343c3f409e14542c0cb1?rik=qAsEILg0wwaUyw&riu=http%3a%2f%2fintegratedelectronics.co.in%2fwp-content%2fuploads%2f2018%2f07%2fwarehouse-inventory-icon-6.png&ehk=TxZHpKAX3mCTWYoo%2fos%2fR%2f341ZcEcnLC%2fn7cpECbzOM%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          name: "twitter:title",
          content: "Inventory Management System",
        },
        {
          name: "twitter:description",
          content: "Inventory Management System",
        },
        {
          name: "twitter:image",
          content:
            "https://th.bing.com/th/id/R.fee0eae5a704343c3f409e14542c0cb1?rik=qAsEILg0wwaUyw&riu=http%3a%2f%2fintegratedelectronics.co.in%2fwp-content%2fuploads%2f2018%2f07%2fwarehouse-inventory-icon-6.png&ehk=TxZHpKAX3mCTWYoo%2fos%2fR%2f341ZcEcnLC%2fn7cpECbzOM%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "R.png",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
  },
  css: ["~/assets/styles/css/main.css"],
  imports: {
    dirs: ["./stores"],
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@invictus.codes/nuxt-vuetify",
  ],
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  runtimeConfig: <
    {
      mongooDbUri: string;
      dbName: string;
    }
  >{
    mongooDbUri: process.env.MONGOODB_URI,
    dbName: process.env.DB_NAME,
  },
});
