// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    "app": {
        "baseURL": "/",
        "buildAssetsDir": "/_nuxt/",
        "cdnURL": ""
    },
    runtimeConfig: {
        "app": {
            "baseURL": "/",
            "buildAssetsDir": "/_nuxt/",
            "cdnURL": ""
        },
        public: {
            apiBaseUrl: process.env.API_BASE_URL,
        },
    },
    imports: {
        dirs: ['stores'],
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@kevinmarrec/nuxt-pwa',
        'nuxt-icon',
        '@pinia/nuxt',
        '@vueuse/nuxt',
    ],
    css: [
        {
            src: '~/node_modules/highlight.js/styles/base16/dracula.css',
            lang: 'css',
        },
    ],
    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
    pwa: {
        icon: {
            source: './public/icon.png',
            maskablePadding: 0,
        },
        meta: {
            name: 'PandoraAI',
            description: 'Multiple AI Web Chat Client',
            theme_color: '#7733ff',
            mobileAppIOS: true,
            nativeUI: true,
        },
        manifest: {
            name: 'PandoraAI',
            description: 'Multiple AI Web Chat Client',
            background_color: '#7733ff',
            lang: 'en',
            useWebmanifestExtension: false,
        },
    },
    plugins: [
        { src: '~/plugins/keycloak.js', mode: 'client' }
    ],
    router: {
        middleware: ['auth'],
    }
});
