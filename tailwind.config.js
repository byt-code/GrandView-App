/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts}'],
  theme: {
    extend: {
      colors: {
        'blizzard-blue': {
          50: '#effbfc',
          100: '#d6f3f7',
          200: '#9fe1ea',
          300: '#7ed4e2',
          400: '#42b9ce',
          500: '#269db4',
          600: '#237f97',
          700: '#22677c',
          800: '#245566',
          900: '#224757',
          950: '#112e3b'
        }
      }
    }
  },
  plugins: []
}
