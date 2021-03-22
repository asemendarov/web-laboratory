module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // не работает ?????????????????????????????
              additionalData: `@import "~@/assets/scss/variables";`
            }
          }
        ]
      }
    ]
  },
  // pass
}