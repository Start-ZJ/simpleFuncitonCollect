//-p           shortcut for --optimize-minimize --define process.env.NODE_ENV="production"
var path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = () => {
  var config = {
    mode: 'production',
    entry: './simpleFuncitonCollect.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),//打包输出目录
      filename: 'simpleFuncitonCollect.js'
    },
    externals: { extensions: [".ts", ".js"] },
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules')],
      extensions: [".web.js", ".jsx", ".js", ".json"],
      alias: {
      }
    },
    module: {
      rules: [
        {
          test: /.ts$/,
          use: {
            loader: "ts-loader",
          },
          exclude: /node_modules/,
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin()
    ]
  }
  return config;
}
