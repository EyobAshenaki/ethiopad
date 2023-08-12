import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-typed-router', '@vueuse/nuxt', '@nuxtjs/fontaine'],

  devtools: { enabled: true },

  app: {
    head: {
      title: 'EthioPad - Literature done right',
      meta: [
        {
          name: 'description',
          content: 'Literature done right'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poiret+One&family=Roboto&display=swap'
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
    transpile: [
      'vuetify',
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-brands-svg-icons'
    ]
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
