const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Password Generator',
    themeColor: '#5e72e4',
    msTileColor: '#5e72e4',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#5e72e4'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/password-generator/'
  : '/',
  assetsDir: process.env.NODE_ENV === 'production'
  ? 'password-generator'
  : ''
};
