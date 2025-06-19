const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const production = process.env.NODE_ENV === 'production'; 
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, '..', './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: production
      ? 'static/scripts/[name].[contenthash].js'
      : 'static/scripts/[name].js',
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.[tj]sx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[hash][ext][query]',
        },
      }, 
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      }, 
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
              importLoaders: 2,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html')
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/styles/[name].[contenthash].css'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', 
    }),
    new ReactRefreshWebpackPlugin(),
  ]
};