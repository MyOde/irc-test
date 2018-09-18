const { join } = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const FlowWebpackPlugin = require('flow-webpack-plugin');

const port = 3000;
const outputPath = join(__dirname, 'dist');
const sourcePath = join(__dirname, 'src');
const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    '@babel/polyfill',
    './src/index'
  ],
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new FlowWebpackPlugin(),
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: outputPath,
    compress: true,
    port
  },
  mode: "development",
  module: {
    rules : [{
      test: /\.jsx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        {
          loader: 'eslint-loader',
        },
      ],
      include: sourcePath
    }]
  }
};

module.exports = { config, port };
