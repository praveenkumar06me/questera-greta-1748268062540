/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cafe-brown': '#6B4423',
        'cafe-cream': '#FFF8E7',
        'cafe-accent': '#D4A574'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}