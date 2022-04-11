/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#cce2fa',
          200: '#99c5f5',
          300: '#66a8f0',
          400: '#338beb',
          500: '#006ee6',
          600: '#0058b8',
          700: '#00428a',
          800: '#002c5c',
          900: '#00162e',
        },
        secondary: {
          100: '#f9fcff',
          200: '#f4f9ff',
          300: '#eef7ff',
          400: '#e9f4ff',
          500: '#e3f1ff',
          600: '#b6c1cc',
          700: '#889199',
          800: '#5b6066',
          900: '#2d3033',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
