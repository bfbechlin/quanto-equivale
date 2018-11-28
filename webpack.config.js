const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'public/index.html'),
  filename: './index.html',
});

const copyWebpackPlugin = CopyWebpackPlugin([
  { from: path.resolve(__dirname, 'src/assets'), to: 'assets' },
]);

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  watchOptions: {
    poll: true,
  },
  plugins: [
    htmlWebpackPlugin,
    copyWebpackPlugin,
  ],
};
