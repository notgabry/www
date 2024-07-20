/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,ts,tsx,svelte}'],
    theme: {
        extend: {
            colors: {
                p: {
                    bg: '#171717',
                    text: '#e8e8e8',
                    secondary: '#8b8b8b',
                    star: '#e3b341',
                    accent: '#1d1d1d',
                    'accent-2': '#262626',
                    'accent-3': '#204eeb'
                }
            }
        }
    },
    plugins: []
}
