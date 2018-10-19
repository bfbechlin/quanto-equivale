const HtmlWebPackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const dashboardPlugin = new DashboardPlugin();

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: `${__dirname}/public/index.html`,
  filename: './index.html',
});

module.exports = {
  entry: './src/index.jsx',
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
    path: `${__dirname}/dist`,
    publicPath: './',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  plugins: [
    dashboardPlugin,
    htmlWebpackPlugin,
  ],
};
