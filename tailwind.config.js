/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            colors: {
                'cor-primaria': '#00666B'
            }
        },
        fontFamily: {
            lexend: ['Lexend', 'Heveltica', 'sans-serif'],
        }
    },
    plugins: [],
}