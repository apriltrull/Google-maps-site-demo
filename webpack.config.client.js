
const path = require('path');
const srcPath = path.resolve(__dirname, 'src/public');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
   context: srcPath,
   target: 'web',

   entry: {

     app: '../public/index.html'
   },
   output: {
       path: srcPath,
       filename: '[name].bundle.js',
       publicPath: '/'
   },

   resolve: {
       extensions: ['*', '.js', '.json']
     },
  //    module: {
  //      loaders: [
  //        {
  //          test: /\.js$/,
  //          loader: 'babel',
  //          exclude: /node_modules/,
  //          query: {
  //            cacheDirectory: true,
  //            presets: ['react', 'es2015']
  //          }
  //        }
  //      ]
  //    }
  //  }


  module: {
  rules: [{
    test: /\.html$/,
    use: [ {
      loader: 'html-loader',
      options: {
        minimize: true
      }
    }],
  }]
}
}

    // resolve: {
    //     modules: ['node_modules', 'src'],
    //     extensions: ['*', '.js', '.json']
    // },
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             loader: 'babel-loader',
    //             options: {
    //               presets:['es2015', 'react']
    //             }
    //         }
    //
    //       ]
    //
    // },

//     devtool: 'source-map'
// };
