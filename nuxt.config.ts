export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true }
  },

  modules: ["@nuxt/content", "@nuxthq/studio", "@nuxt/image"]
})