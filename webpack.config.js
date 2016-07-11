'use strict';

var isDevelopment = process.env['NODE_ENV'] !== 'production';
var isProduction = process.env['NODE_ENV'] === 'production';


var packageInfo = require('./package.json');

var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//explicitly define webPack plugins here, because for production we need to add different ones...

var webPackPlugins = [new HtmlWebpackPlugin({
  template: 'index.ejs',
  inject: 'head',
  //do not hash for development
  hash: isDevelopment,
  //pass development to template
  development: isDevelopment,
  //pass build info to template
  build: {
    time: (new Date()).getTime()
  }
})
];


module.exports = {

  context: path.resolve(__dirname, 'src/main'),
  entry: './webpack.modules.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  //devtool: 'eval-source-map',
  devtool: 'source-map',

  module: {
    loaders: [
      //JS laoder
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel'],
        exclude: /node_modules/
        //query: {
        //  presets:['es2015'],
        //  //we need this plugin for Babel 6
        //  //-> https://github.com/59naga/babel-plugin-add-module-exports
        //  //... -> https://phabricator.babeljs.io/T2212
        //  plugins:['add-module-exports']
        //}
      },

      //raw loader for requiring html
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
      },

      //CSS-Loader
      {
        test: /\.css$/,
        loaders: ['style', 'css']
        //exclude: /node_modules/
      },

      //SASS-Loader
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
        exclude: /node_modules/
      },

      //Fonts
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },

      //JSON-Loader
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      }


      //ugh... globally exposed libs
      //TODO: this needs to be somehow refactored...
      //{test: require.resolve('lodash'), loader: 'expose?_'}

    ]
  },

  plugins: webPackPlugins,

  devServer: {
    //TODO: externalize all other settings from package.json scripts...
    //hot: true,
    host: '0.0.0.0',
    port: 4000
    //inline: true,
    //historyApiFallback: true,
    //proxy: {
    //    '/api/v1/*': config.get('api_proxy'),
    //    '/font/*': config.get('api_proxy'),
    //}



  }


};
