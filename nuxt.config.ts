// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            title: 'Savatest'
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    ssr: false,
    modules: [
        'nuxt-gtag',
        'nuxt-simple-sitemap',
    ],
    gtag: {
        id: 'G-6TFHVB169Z'
    },
    sitemap: {
        siteUrl: 'https://savatest.netlify.app',
    },
})
