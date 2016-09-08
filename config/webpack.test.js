var helpers = require('./helpers');
var commonConfig = require('./webpack.common.js');

module.exports = {
  devtool: 'inline-source-map',

  resolve: commonConfig.resolve,
  module: {
    loaders: commonConfig.module.loaders
  },
  sassLoader: {
    includePaths: [helpers.root('public', 'stylesheets')]
  }
}