const webpack = require("webpack");

exports.devServer = (options) => {
  return {
    devServer: {
      historyApiFallback: true,
      inline: true,
      hot: true,
      stats: "errors-only",
      host: options.host,
      port: options.port,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multistep: true,
      }),
    ],
  };
};
