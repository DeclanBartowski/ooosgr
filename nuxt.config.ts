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
  ],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  devtools: { enabled: false }
})
