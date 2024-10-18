/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js, jpg, avif}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins"],
            },
        },
    },
    plugins: [],
};
