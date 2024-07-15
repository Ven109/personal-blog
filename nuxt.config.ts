export default defineNuxtConfig({
    modules: [
        "@nuxt/content",
        "@nuxthq/studio",
        "@nuxt/image",
        "@nuxtjs/tailwindcss",
        "@nuxt/eslint",
        "nuxt-icon",
    ],
    runtimeConfig: {
        public: {
            mdc: {
                useNuxtImage: true,
            },
        },
    },
});
