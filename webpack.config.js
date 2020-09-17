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
      filename: 'static/js/[name].bundle.js',
      publicPath: '/'
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
            presets: [
              [
                '@babel/preset-env', {
                  useBuiltIns: 'usage',
                  'corejs': 2
                }
              ]
            ],
            plugins: [              
              ["babel-plugin-component", {
                "libraryName": "mint-ui",  //"babel-plugin-component"插件针对mint按需打包
                "style": true
              }]
            ]
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
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        pathRewrite: {
          "^/api" : ""
        },
        changeOrigin: true
      }
    },
    historyApiFallback: true
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