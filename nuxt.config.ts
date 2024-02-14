// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/lara-light-green/theme.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    components: {
      include: []
    }
  },
  devtools: { enabled: false }
})
