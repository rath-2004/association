/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{html,js}'
    ],
    theme: {
        extend: {
            animation: {
                'gradient': 'gradient 15s ease infinite',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                }
            },
            colors: {
                'gold-dark': '#906c2d',
                'gold-main': '#ffd700',
                'gold-light': '#f4d03f',
                'gold-accent': '#daa520',
                'gold-deep': '#b8860b',
            }
        }
    },
    plugins: [],
}
