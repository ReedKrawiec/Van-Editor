const path = require('path');
const glob = require("glob")
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: ["./src/game/main.ts"]
  },
  output: {
    path: path.resolve(__dirname, './target'),
    filename: "van.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};