module.exports = {
  mode: "development",
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
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }
    ]
  }
}
