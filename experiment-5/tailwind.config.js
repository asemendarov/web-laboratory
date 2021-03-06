const defaultTheme = require('tailwindcss/defaultTheme')

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
    fontFamily: {
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      'logo': ['"PT Sans"', ...defaultTheme.fontFamily.sans]
    },
    extend: {
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
        }
      }, 
      flex: {
        'full': '1 1 100%',
      },
      outline: {
        none: 'none',
      },
      minHeight: {
        '6': '1.75rem   /* 28px */',
        '7': '1.875rem  /* 30px */',
        '8': '2.0rem    /* 32px */',
      },
      animation: {
        'cssload': 'tw-fold-thecube 2.76s infinite linear both',
      },
      keyframes: {
        'fold-thecube': {
          '0%, 10%': { transform: 'perspective(136px) rotateX(-180deg)', opacity: '0' },
          '25%, 75%': { transform: 'perspective(136px) rotateX(0deg)', opacity: '1' },
          '90%, 100%': { transform: 'perspective(136px) rotateY(180deg)', opacity: '0' },
        }
      },
      rotate: {
        '270': '270deg',
      },
      transformOrigin: {
        'full': '100% 100%',
      }
    }
  },
  variants: {},
  plugins: [],
}