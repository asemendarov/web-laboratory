module.exports = {
  prefix: 'tw-',
  purge: {
      content: ['./public/**/*.html', './src/**/*.vue']
  },
  theme: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    // 'md': '768px', // default
    'md': '808px', // my
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  variants: {},
  plugins: [],
}