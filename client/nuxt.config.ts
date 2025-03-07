// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@nuxt/ui', '@prisma/nuxt', '@pinia/nuxt'],
  css: ['@/assets/styles/main.scss'],
})