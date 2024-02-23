// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
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
  ],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  primevue: {
    components: {
      include: [
          'Carousel'
      ]
    }
  },
  devtools: { enabled: false }
})
