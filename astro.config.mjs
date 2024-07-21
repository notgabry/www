import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import icon from 'astro-icon'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    adapter: vercel(),
    output: 'server',
    site: 'https://notgabry.me',
    integrations: [tailwind(), svelte(), icon(), sitemap()],
    publicDir: './static'
})
