module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    open: true,
    https: false,
    port: 2000,
    compress: true,
  }
}