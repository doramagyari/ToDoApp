/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'display': ['Neue Haas Grotesk Display Pro', 'sans-serif']
      },
    },
    screens: {
        'sm': '320px',
        'lg': '1440px'
    }
  },
  plugins: [],
}