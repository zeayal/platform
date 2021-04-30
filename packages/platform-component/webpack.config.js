const path = require("path");

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "lib"),
    library: {
      type: "module",
    },
    filename: "index.js",
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", ".jsx"],
  },
};
