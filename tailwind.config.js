/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts}'],
  theme: {
    extend: {
      boxShadow: {

        'custom-hover': ' 0 0 8px 5px rgb(6, 29, 221,0.12)',
        
      },
      colors: {
        primary: {
          50: '#ebf9ff',
          100: '#d1f2ff',
          200: '#aee9ff',
          300: '#76deff',
          400: '#35c9ff',
          500: '#07a7ff',
          600: '#0081ff',
          700: '#0068ff',
          800: '#0056d7',
          900: '#004494',
          950: '#062f65'
        },
        secondary: {
          50: '#e6fff9',
          100: '#c3fff0',
          200: '#8bffe2',
          300: '#4dffd4',
          400: '#20f5c6',
          500: '#06dbb0',
          600: '#00b090',
          700: '#008b75',
          800: '#006d5d',
          900: '#00594d',
          950: '#003330'
        },
        accent: {
          '50': '#fdfce9',
        '100': '#fbf9c6',
        '200': '#f8f090',
        '300': '#f3e151',
        '400': '#eed024',
        '500': '#deb814',
        '600': '#bf8f0f',
        '700': '#99680f',
        '800': '#7f5314',
        '900': '#6c4317',
        '950': '#3f2309',  
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        }
      }
    }
  },
  plugins: []
}
