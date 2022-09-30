/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js, jsx, html}',
    './components/**/*.{js, jsx, html}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          DEFAULT: '#37333D',
          '25': '#D8D3E0',
          '50': '#928A9D',
          '100': '#887F94',
          '200': '#736B80',
          '300': '#5F5869',
          '400': '#4B4653',
          '500': '#37333D',
          '600': '#1B191E',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        'light': {
          DEFAULT: '#5B4B75',
          '50': '#B8ADCB',
          '100': '#AEA1C3',
          '200': '#9888B3',
          '300': '#836FA3',
          '400': '#6E5B8E',
          '500': '#5B4B75',
          '600': '#403553',
          '700': '#261F31',
          '800': '#0B090E',
          '900': '#000000'
        },
      },
      fontFamily: {
        'main': "'RightGrotesk-Regular', sans-serif",
        'ultra': "'RightGrotesk-Black', sans-serif",
      },
      fontSize: {
        'xs': '14px',
        'sm': '18px',
        'base': '18px',
        '1xl': '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.815rem'
      }
    },
  },
  plugins: [],
}
