/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'magenta-neon': '#F366FF',
        'violeta-neon': '#9350FF',
        'negro-puro': '#181818',
        'blanco-puro': '#FFFFFF',
      },
      fontFamily: {
        headings: ['Golos Text', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'vibe-gradient': 'linear-gradient(to right, #9350FF, #F366FF)',
      }
    },
  },
  plugins: [],
}