import { defineNuxtConfig } from 'nuxt'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        htmlAttrs: {
          lang: 'en'
        },
        title: 'awesome title',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
      },
      
    // https://nuxtjs.org/docs/configuration-glossary/configuration-target/
    target: 'static',
    modules: [
        ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }],
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxt/image-edge',
    ],
    vite: {
        plugins: [svgLoader()]
    },

    // https://v3.nuxtjs.org/guide/deploy/static-hosting/
    ssr: false,
})