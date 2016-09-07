var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        // Typescript
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        // HTML (TODO: Deprecate)
        test: /\.html$/,
        loader: 'html'
      },
      {
        // Templates (pug based)
        test: /\.pug$/,
        exclude: /node_modules/,
        loaders: ['pug-loader']
      },
      {
        // component based scss - load raw, fall back to angular pipeline
        test: /\.scss$/,
        include: helpers.root('src', 'components'),
        loaders: ['raw-loader', 'sass-loader']
      },      
      {
        // public scss - squirt in using the style loader
        test: /\.scss$/,
        exclude: ['node_modules', helpers.root('src', 'components')],
        loaders: ['style-loader', 'raw-loader', 'sass-loader'] // sass-loader not scss-loader
      },
      {
        // Images
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        // public css files - squirt in using the style loader
        test: /\.css$/,
        exclude: helpers.root('src', 'components'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new webpack.ProvidePlugin({
        jQuery: 'jquery', 
        $: 'jquery', 
        jquery: 'jquery',
        'window.Tether': 'tether'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.pug'
    })
  ]
};
