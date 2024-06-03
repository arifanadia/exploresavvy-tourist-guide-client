/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        yellow : '#8fce00 '
      },
      fontFamily:{
        satisfy : ['Satisfy', 'cursive'],
        maven : ['Maven Pro', 'sans-serif'],

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

