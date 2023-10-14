/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,ts,tsx,svelte}'],
    theme: {
        extend: {
            colors: {
                'p-text': '#fdebf3',
                'p-text-secondary': '#f9e7f0',
                'p-bg': '#1e1e2e',
                'p-bg-secondary': '#363654',
                'p-secondary': '#584966',
                'p-underline': '#375a7f'
            }
        },
        fontFamily: {
            'young-serif': ['Young Serif', 'serif'],
            josefin: ['Josefin Sans', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif']
        }
    },
    plugins: [require('tailwind-scrollbar')]
}
