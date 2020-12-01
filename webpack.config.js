const path = require('path');
const pkg = require('./package');

/**
 * Webpack Plugins
 */
const BannerPlugin = require('webpack/lib/BannerPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let banner = `
  ${pkg.name}-${pkg.description}
  Authon:${pkg.author}
  Version:v${pkg.version}
  Url:${pkg.homepage}
  License(s):${pkg.license}
`;

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${pkg.name}.js`,
    libraryTarget: 'umd',
    library: pkg.name, // 如果library为空，则方法挂载到全局window上；指定为变量，则挂载到相应变量上。
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          compact: false // because I want readable output
        }
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BannerPlugin(banner)
  ]
};
