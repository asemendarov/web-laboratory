const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  prefix: 'tw-',
  purge: {
      content: ['./public/**/*.html', './src/**/*.vue']
  },
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '808px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'xs': {'max': '319px'}
      // => @media (max-width: 319px) { ... }
    },
    colors: {
      inherit: 'inherit',
      'very-light-gray': {
        200: '#eeeeee',
        400: '#cccccc'
      },
      'very-dark-mostly-black': {
        700: '#161b22', 
        800: '#0d1117'
      },
      'vivid-orange': {
        600: '#fdb021',
        800: '#c7912d'
      },
      'very-dark-grayish-blue': {
        700: '#30363d'
      },
      'moderate-blue': {
        500: '#5584b9'
      },
      ...colors
    },
    fontFamily: {
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      'logo': ['"PT Sans"', ...defaultTheme.fontFamily.sans]
    },
    flex: {
      'auto': 'auto',
      'full': '1 1 100%',
    },
    outline: {
      none: 'none',
    }
  },
  variants: {},
  plugins: [],
}