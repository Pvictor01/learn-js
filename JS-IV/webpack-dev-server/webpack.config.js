const path = require('path') //modulo do npm para trabalhar com caminhos de arquivos

module.exports = {
  devServer: { //configurando devserver
    static: {
      directory: path.resolve(__dirname, 'dist') //caminho de onde estao os arquivos
    },
    compress: true,
    port: 9000 //porta para acessar localhost
  },
  entry: {
    index: './src/index.js',
    hello: './src/hello.js'
  },
  mode: 'production',
  output: {
    //path: path.resolve(__dirname, 'public'), //pega o nome do caminho do dir, cria a pasta public e nela coloca a entrada -> public/main.js
    filename: '[name].min.js'
  },
  module: {
    rules: [ 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}