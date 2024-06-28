import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
    adapter: vercel({
        speedInsights: {
            enabled: true
        }
    }),
    output: 'server',
    integrations: [tailwind(), svelte(), icon()],
    publicDir: './static'
})
