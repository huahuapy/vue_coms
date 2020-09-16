const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  //mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output:{
      path:path.resolve(__dirname,'dist'),
      filename: 'static/js/[name].bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        //exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/img/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      //vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    port: 8080,
    open: true,
    //quiet: true
  },
  devtool: 'cheap-module-eval-source-map',
  //
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$':'vue/dist/vue.esm.js'
    }
  }
}