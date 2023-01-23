/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#422680',
          default: '#341671',
          dark: '#280659'
        },
        secundary: {
          light: '#AE2D68',
          default: '#F54952',
          dark: '#660F56',
        }
      },
      backgroundImage: {
        'background': "url('../public/background.jpg')"
      },
      boxShadow: {
        'newShadow': '0 2px 8px rgb(0 0 0 / 10%)'
      }
    },
  },
  plugins: [],
}
