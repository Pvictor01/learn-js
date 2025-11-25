const path = require('path') //modulo do npm para trabalhar com caminhos de arquivos

module.exports = {
  entry: {
    index: './src/index.js',
    hello: './src/hello.js'
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'), //pega o nome do caminho do dir, cria a pasta public e nela coloca a entrada -> public/main.js
    filename: '[name].bundle.min.js'
  },
  module: {
    rules: [ 
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
            ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}