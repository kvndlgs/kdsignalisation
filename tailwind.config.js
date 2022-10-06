/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js, jsx, html}',
    './components/**/*.{js, jsx, html}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '980px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'darkgray': {
          DEFAULT: '#42323e'
        },
        'thunder': {
          DEFAULT: '#42323E',
          '25': '#E2D9E0',
          '50': '#A4879D',
          '100': '#9C7C94',
          '200': '#88677F',
          '300': '#70556A',
          '400': '#594454',
          '500': '#42323E',
          '600': '#221A20',
          '700': '#020202',
          '800': '#000000',
          '900': '#000000'
        },
        'bourg': {
          DEFAULT: '#691955'
        },
        'brin': {
          DEFAULT: '#BFACB5'
          
        },
        'fluo': {
          DEFAULT: '#EFF7CF'
        },
        'tusk': {
          DEFAULT: '#EFF7CF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FBFDF2',
          '500': '#EFF7CF',
          '600': '#DFEF9F',
          '700': '#CFE76F',
          '800': '#BFDF3F',
          '900': '#A4C521'
        },
        'ble': {
          DEFAULT: '#355691'
        },
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
        'one': "'AribauGrotesk-Black', sans-serif",
        'two': "AribauGrotesk-Medium, sans-serif",
        'three': "'AribauGrotesk-Regular', sans-serif",
        'main': "'RightGrotesk-Regular', sans-serif",
        'med': "'RightGrotesk-Medium', sans-serif",
        'ultra': "'RightGrotesk-Black', sans-serif",
      },
      fontSize: {
        'xs': '14px',
        'sm': '18px',
        'base': '20px',
        '1xl': '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.815rem'
      },
    },
  },
  plugins: [],
}
