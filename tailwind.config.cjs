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
            grotesque: ['Bricolage Grotesque', 'sans-serif']
        }
    },
    plugins: []
}
