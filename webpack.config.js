module.exports = {
  // Javascript file to bundle. 
  entry: "./js/app.js",
  // This file gets loaded into my index.
  output: {
    filename: "bundle.js"
  },
  // Watch files for changes.
  watch: true,
  // Reload the page when there are changes. 
  devServer: {
    inline: true
  },

  // Add sass-loader.
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
}
