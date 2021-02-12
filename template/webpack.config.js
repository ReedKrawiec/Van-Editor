const path = require('path');
const process = require("process");

console.log("COMPILING");

module.exports = (env)=> {
  return({
  mode: "development",
  context: path.resolve(env.context),
  devtool: "inline-source-map",
  entry: {
    main:  path.resolve(env.context,"./src/game/main.ts")
  },
  output: {
    path: path.resolve(env.context,env.target),
    filename: "van.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias:{
      "lib":path.resolve(__dirname,"src/lib"),
      "game":path.resolve(__dirname,"src/game"),
      "src":path.resolve(__dirname,"src")
    }
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
})};