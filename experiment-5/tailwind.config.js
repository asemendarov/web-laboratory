module.exports = {
  prefix: 'tw-',
  purge: {
      content: ['./public/**/*.html', './src/**/*.vue']
  },
  theme: {
    screens: {
      // 'sm': '640px',
      // // => @media (min-width: 640px) { ... }

      // // 'md': '768px', // default
      // 'md': '808px', // my
      // // => @media (min-width: 768px) { ... }

      // 'lg': '1024px',
      // // => @media (min-width: 1024px) { ... }

      // 'xl': '1280px',
      // // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // // => @media (min-width: 1536px) { ... }
      
      // ----------------------------------------

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      // 'md': {'max': '767px'}, // default
      'md': {'max': '808px'}, // my
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {},
  plugins: [],
}