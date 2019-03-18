'use strict'

const fs = require('fs')
const path = require('path')
const pkg = require('./package')
const {
  ipv4,
} = require('xutil')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.VUE_APP_VERSION = pkg.version

function resolve (dir) {
  return path.join(__dirname, dir)
}

const alias = fs.readdirSync(resolve('src')).reduce((memo, f) => {
  memo[`~${f}`] = resolve(`src/${f}`)
  return memo
}, {})

const entryPath = resolve('src/entry')

const entries = fs.readdirSync(entryPath).reduce(function (o, filename) {
  filename = filename.replace(/\.js$/, '')
  o[filename] = path.join(entryPath, filename)
  return o
}, {})

function getConfigureWebpack () {
  const result = {
    output: {
      crossOriginLoading: 'anonymous'
    },
    resolve: {
      alias,
    },
    entry: entries,
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: '!!awesome-ejs-compiled-loader!src/index.ejs',
        assetsServer: '',
        inject: false,
      }),
    ],
  }

  result.plugins.push(new webpack.HotModuleReplacementPlugin())
  return result
}


module.exports = {
  outputDir: 'www',
  assetsDir: `static/${pkg.version}`,
  lintOnSave: true,

  css: {
    extract: {
      allChunks: true,
    },
  },

  pages: {
    mobile: {
      entry: entries.mobile,
      filename: 'index.html',
    },
  },

  configureWebpack: getConfigureWebpack(),

  chainWebpack: config => {
    config.module.rules.delete('svg') // 删除默认配置中处理svg
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    host: 'debug030055106150.local.alipay.net',
    open: process.env.NODE_ENV !== 'test',
    openPage: 'test?locale=en_TH&siteName=th&transToken=xxx#/ddbindcard/bankList',
    contentBase: './',
    stats: 'errors-only'
  },
}
