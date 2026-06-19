const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'assets/[name][ext]',
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8564,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true },
              optipng: { enabled: true },
              pngquant: { quality: [0.65, 0.90], speed: 4 },
              gifsicle: { interlaced: false },
              webp: { quality: 75 },
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Holberton Dashboard</title>
        </head>
        <body>
        </body>
        </html>
      `,
      inject: 'body',
      chunks: ['header', 'body', 'footer'],
    }),
  ],
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: { hints: false }
};
