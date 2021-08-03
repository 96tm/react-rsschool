import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { merge } from 'webpack-merge';
import common from './webpack.config.common';

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public/cards.json',
          to: './public/cards.json',
        },
        {
          from: './public/assets/icons',
          to: './public/assets/icons',
        },
        {
          from: './public/assets/images',
          to: './public/assets/images',
        },
      ],
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
});

export default config;
