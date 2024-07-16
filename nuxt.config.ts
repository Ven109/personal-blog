export default defineNuxtConfig({
    site: {
        indexable: false,
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
    routeRules: {
        '/': { prerender: true},
    },
    devtools: { enabled: true },
    devServer: {
        url: 'http://localhost:3000',
    },
});
