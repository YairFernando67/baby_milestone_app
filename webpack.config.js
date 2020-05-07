const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TreserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const VENDOR_LIBS = [
  "axios",
  "bootstrap",
  "node-sass",
  "react",
  "babel-cli",
  "babel-preset-react",
  "react-dom",
  "react-facebook-login",
  "react-google-login",
  "react-redux",
  "react-router-dom",
  "react-scripts",
  "redux",
  "redux-thunk",
  "styled-components",
  "sweetalert2",
  "babel-polyfill",
  "express"
]

module.exports = {
  entry: path.resolve('src', 'index.js')
  // entry: {
  //   bundle: './src/index.js',
  //   vendor: VENDOR_LIBS
  // }
  ,
  node: {
    fs: 'empty'
  },
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        // test: /\.jsx?$/,
        // test: /\.m?js$/,
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'production'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|xml)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
    ]
  },
  optimization: {
    minimizer: [new TreserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(sa|sc|c)ss$/,
          chunks: 'all',
          enforce: true,
        },
      },
      name: 'vendor',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[styles].css',
      chunkFilename: '[id].css'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      post: 3000,
      server: { baseDir: ['dist'] },
    }),
    new CopyWebpackPlugin([
      {
        from: 'public/manifest.json',
        to: path.join(__dirname, 'dist')
      }
    ]),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}