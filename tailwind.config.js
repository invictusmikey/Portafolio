/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'portafolio-bg': "url('src/assets/fondoPortafolio.jpg')",
    }
  },
  plugins: [],
}