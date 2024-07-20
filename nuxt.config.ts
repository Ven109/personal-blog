export default defineNuxtConfig({
    site: {
        indexable: false,
        url: 'https://example.com',
    },
    modules: [
        "@nuxt/content",
        "@nuxthq/studio",
        "@nuxt/image",
        "@nuxtjs/tailwindcss",
        "@nuxt/eslint",
        "nuxt-icon",
        "@nuxtjs/seo",
    ],
    runtimeConfig: {
        public: {
            mdc: {
                useNuxtImage: true,
            },
        },
    },
    image: {
        provider: 'imagekit',
        imagekit: {
            baseURL: 'https://ik.imagekit.io/gkyuh30xa',
        },
    },
    devtools: { enabled: true },
    devServer: {
        url: 'http://localhost:3000',
    },
    compatibilityDate: "2024-07-20",
});
