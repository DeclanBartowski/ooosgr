// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
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
  plugins: [
    '~/plugins/alignCatText.ts',
    '~/plugins/custom.ts',
    '~/plugins/vue-recaptcha-v3.ts'
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      baseAPI: process.env.BASE_API
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  devtools: { enabled: false }
})
