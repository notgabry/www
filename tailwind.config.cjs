/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,ts,tsx,svelte}'],
    theme: {
        extend: {
            colors: {
                p: {
                    text: '#fdebf3',
                    'text-secondary': '#f9e7f0',
                    bg: '#1e1e2e',
                    'bg-secondary': '#363654',
                    secondary: '#584966',
                    underline: '#375a7f',
                    selection: '#ffffff4d',
                    star: '#e3b341'
                }
            }
        },
        fontFamily: {
            'young-serif': ['Young Serif', 'serif'],
            josefin: ['Josefin Sans', 'sans-serif'],
            space: ['Space Mono', 'monospace']
        }
    },
    plugins: [require('tailwind-scrollbar')]
}
