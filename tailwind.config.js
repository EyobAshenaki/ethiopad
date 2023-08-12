/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  prefix: 'tw-',
  important: true,
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poiret One', 'sans-serif'],
        body: ['Roboto', 'sans-serif']
      },
      colors: {
        // primary: '#27fc78',
        primary: '#00FEB0',
        accent: '#ff6700',
        // 'accent-background': '#f79c91',
        // accent: '#f4677c',
        secondary: '#004740',
        background: '#0F172A',
        'text-color': '#F8FAFC'
      }
    }
  },
  plugins: []
};
