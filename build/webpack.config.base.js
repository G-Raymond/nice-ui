'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')
module.exports = {
  entry:path.resolve(__dirname,'../src/index.js')
}