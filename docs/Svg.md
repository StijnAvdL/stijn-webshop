# SVG loader
Dynamic svg loader is not working yet for Nuxt 3
https://github.com/damianstasik/vue-svg-loader/issues/180

Svg sprite not working. Schoonste oplossing gevonden is het volgende:
```bash
yarn add @nuxtjs/svg vite-svg-loader --dev
```
In **nuxt.config.ts**:

```TypeScript
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
    vite: {
        plugins: [svgLoader()]
    },
    ...
})
```
Zie voor meer informatie de repo:
https://www.npmjs.com/package/vite-svg-loader