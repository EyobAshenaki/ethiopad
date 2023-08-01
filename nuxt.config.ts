// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-typed-router', '@vueuse/nuxt', '@nuxtjs/fontaine'],

  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    'vuetify/lib/styles/main.sass',
    '@fortawesome/fontawesome-svg-core/styles.css'
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
