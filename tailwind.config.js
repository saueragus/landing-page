/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      height: {
        '128': '100rem',
      },
      width: {
        '127': '18rem',
      },
      fontSize: {
        
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        'edit': '1.2rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      screens: {

      },
      borderRadius:{
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        'xtra': '415px'
      },
      fontWeight:{
        'next': '900',
      },
      fontFamily:{
        nunito: ['Nunito Sans', 'sans-serif'],
        courier: ['Courier Prime']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti':{
          100: '#E84157',
          200: '#f0794f',
          300: '#614acb',
          400: '#FCE2DB',
        },
      }
    },
  },
  plugins: [],
  corePlugins: {
    appearance: false,
  },
}

