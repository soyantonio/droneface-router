const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 1023,
    inline: true,
    hot: true
  },
  watch: true,
  watchOptions: {
    poll: 200,
    // poll: true,
  }
});