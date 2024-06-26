/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,ts,tsx,svelte}'],
    theme: {
        extend: {
            colors: {
                p: {
                    bg: '#f472b6',
                    secondary: '#b7d4da',
                    selection: '#ffffff4d',
                    star: '#e3b341',
                    accent: '#4ade80',
                    'card-1': '#e879f9',
                    'card-2': '#a3e635',
                    'card-3': '#e879f9',
                    'card-4': '#22d3ee',
                    'card-5': '#c084fc'
                }
            },
            boxShadow: {
                neobrutalist: '8px 8px 0px rgba(0,0,0,1)',
                'neobrutalist-low': '4px 4px 0px rgba(0,0,0,1)'
            },
            keyframes: {
                shadowPulse: {
                    '0%': { boxShadow: '0 0 0 0 var(--shadow-color)' },
                    '80%': { boxShadow: '0 0 0 8px var(--shadow-color)44' },
                    '100%': { boxShadow: '0 0 0 8px var(--shadow-color)00' }
                }
            },
            animation: {
                shadowPulse: 'shadowPulse 2s infinite'
            }
        },
        fontFamily: {
            grotesque: ['Bricolage Grotesque', 'sans-serif'],
            space: ['Space Mono', 'monospace']
        }
    },
    plugins: []
}
