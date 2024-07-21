/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,ts,tsx,svelte}'],
    theme: {
        extend: {
            colors: {
                neutral: {
                    850: '#1d1d1d'
                }
            },
            fontFamily: {
                grotesque: ['Bricolage Grotesque Variable', 'sans-serif']
            }
        }
    },
    plugins: []
}
