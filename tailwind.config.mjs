/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                w: {
                    accent: {
                        1: '#E39774',
                        2: '#88D18A',
                        3: '#72B89C',
                        4: '#5C9EAD',
                        5: '#BBD5ED',
                        6: '#A288E3',
                        7: '#A93F55',
                        8: '#A6649C',
                        9: '#F9DC5C',
                        10: '#B8CE80',
                        11: '#77BFA3'
                    }
                }
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            }
        }
    },
    plugins: []
}
