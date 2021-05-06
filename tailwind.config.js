const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    '*.html',
    'src/**/*.html',
    'src/**/*.js'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lightblue': colors.lightBlue,
        gray: {
          50: '#FAFAFA',
          100: '#ECEFF4',
          200: '#E5E9F0',
          300: '#D8DEE9',
          500: '#4C566A',
          600: '#434C5E',
          700: '#2E3440'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
