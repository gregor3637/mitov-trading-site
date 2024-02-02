/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                accent: {
                    1: 'rgba(var(--color-accent1) / <alpha-value>)',
                    2: 'rgba(var(--color-accent2) / <alpha-value>)',
                },
                bkg: 'rgba(var(--color-bkg) / <alpha-value>)',
                content: 'rgba(var(--color-content) / <alpha-value>)',
            },
            animation: {
                'spin-slower': 'spin 35s ease infinite',
                'spin-slow': 'spin 25s ease-in-out infinite reverse',
            },
        },
        screens: {
            xs: '320px',
            // => @media (min-width: 320px) { ... }

            '2xs': '401px',
            // => @media (min-width: 401px) { ... }

            '3xs': '480px',
            // => @media (min-width: 480px) { ... }

            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            '2md': '960px',
            // => @media (min-width: 960px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }

            '2exl': '1640px',
            // => @media (min-width: 1536px) { ... }

            '3xl': '1921px',
            // => @media (min-width: 1921px) { ... }
        },
    },
    plugins: [],
}
