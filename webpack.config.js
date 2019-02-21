const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
// const images = require('./src/img');
module.exports = {
  mode: 'development',
  entry: './src/js/app.js',

  output: {
    path: path.resolve(__dirname, 'server/dist'), 
  },
  
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }, 
      {
        test: /\.s[a|c]ss$/,
        use: ["style-loader", 
              {loader: MiniCssExtractPlugin.loader,
              }, 
              "css-loader", "postcss-loader", "sass-loader", 
              {loader: "sass-resources-loader",
                  options: {
                      sourceMap: true,
                      resources: [
                          './src/scss/variables.scss',
                      ]
                  }
              }
        
            ]
          // loader: 'style-loader!css-loader!sass-loader'
      }, 
      {
        test: /\.css$/,
        use: ["style-loader", {
          loader: MiniCssExtractPlugin.loader,
          }, "css-loader", "postcss-loader"]
      },
      {
      test: /\.(jpg|png|svg)$/,
      use: [ {
      loader: 'file-loader'}],
      // options: {
      //     name: 'images/[name].[ext]'},
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
  
  
};