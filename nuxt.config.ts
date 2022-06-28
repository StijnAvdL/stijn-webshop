import { defineNuxtConfig } from 'nuxt'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }],
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    vite: {
        plugins: [svgLoader()]
    }
})