/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            textShadow: {
                neon: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa',
            },
            keyframes: {
                underlineSlide: {
                    '0%': { transform: 'scaleX(0)' },
                    '100%': { transform: 'scaleX(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                squiggle: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-100%)' },
                },
                // Add the fadeInUp keyframe
                fadeInUp: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                // Add the carpetReveal keyframe
                carpetReveal: {
                    '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
                    '100%': { transform: 'scaleY(1)', transformOrigin: 'top' },
                },
            },
            animation: {
                'slide-underline': 'underlineSlide 0.5s ease-in-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'float-delay': 'float 6s ease-in-out 3s infinite',
                'squiggle': 'squiggle 20s linear infinite',
                // Add the fadeInUp animation
                fadeInUp: 'fadeInUp 0.8s ease-out',
                // Add the carpetReveal animation
                carpetReveal: 'carpetReveal 0.8s ease-out forwards',
            },
        },
    },
    plugins: [
        require('tailwindcss-textshadow'), // Add a plugin for text-shadow
    ]
}