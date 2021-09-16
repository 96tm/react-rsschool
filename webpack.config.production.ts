import path from 'path';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { merge } from 'webpack-merge';
import common from './webpack.config.common';

const config: webpack.Configuration = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist', 'client'),
    filename: '[name].js',
    publicPath: '',
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: 'source-map',
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
});

export default config;
