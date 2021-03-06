/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = [
  {
  context:__dirname,
  output: {
    filename: 'main.js',
    publicPath: '/assets/',
    path:'/src/assets'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: [
      'webpack-dev-server/client?http://localhost:5000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      './src/scripts/components/main.jsx'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js','.jsx'],
    alias: {
      'styles': './src/scripts/styles/*',
      'components': './src/scripts/components/*'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['react-hot'],
        query:{}
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['babel'],
        query: {
          presets: ['es2015','react'],
          cacheDirectory: true
        }
      },
    {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    },

  ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

},
{
  output: {
    filename: 'main-public.scss',
    publicPath: 'src/assets/',
    path:'/src/assets'
  },
  name: 'css',
  entry: {
    styles: [
     './src/scripts/styles/public/screen.scss'
    ]
  },
  module: {
    loaders: [
    {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    },

  ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
]
