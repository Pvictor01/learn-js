const path = require('path') //modulo do npm para trabalhar com caminhos de arquivos

module.exports = {
  entry: {
    main: './src/index.js', //arquivo de entrada do codigo
    hello: './src/hello.js' //segunda entrada de exemplo
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'), //pega o nome do caminho do dir, cria a pasta public e nela coloca a entrada -> public/main.js
    filename: '[name].bundle.min.js'
  }
}