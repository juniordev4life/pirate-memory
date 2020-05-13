// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const productionGzipExtensions = ['js', 'css']

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    publicPath: 'http://pirate-memory.s3-website.eu-central-1.amazonaws.com/',
    filenameHashing: false,
    configureWebpack: {
      output: {
        filename: 'js/pirate-memory.js',
        chunkFilename: 'js/[name].js'
      }
      /*
      plugins: [
        new CompressionWebpackPlugin({
          filename: '[path]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 1240,
          minRatio: 0.8
        })
      ]
      */
    },
    chainWebpack: config => {
      if (config.plugins.has('extract-css')) {
        const extractCSSPlugin = config.plugin('extract-css')
        extractCSSPlugin &&
          extractCSSPlugin.tap(() => [
            {
              filename: 'css/pirate-memory.css',
              chunkFilename: 'css/[name].css'
            }
          ])
      }
    }
  }
} else {
  module.exports = {
    filenameHashing: false,
    configureWebpack: {
      output: {
        filename: 'js/pirate-memory.js',
        chunkFilename: 'js/[name].js'
      }
    },
    chainWebpack: config => {
      if (config.plugins.has('extract-css')) {
        const extractCSSPlugin = config.plugin('extract-css')
        extractCSSPlugin &&
          extractCSSPlugin.tap(() => [
            {
              filename: 'css/pirate-memory.css',
              chunkFilename: 'css/[name].css'
            }
          ])
      }
    }
  }
}
