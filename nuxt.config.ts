import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-typed-router', '@vueuse/nuxt', '@nuxtjs/fontaine'],

  devtools: { enabled: true },

  app: {
    head: {
      title: 'EthioPad',
      meta: [
        {
          name: 'description',
          content: 'Literature done right'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poiret+One&display=swap'
        }
      ]
    }
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/main.css'
    // '~/assets/css/poiret_one.css'
  ],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
