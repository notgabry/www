import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
    adapter: vercel({
        speedInsights: {
            enabled: true
        }
    }),
    output: 'hybrid',
    integrations: [tailwind(), svelte()],
    publicDir: './static'
})
