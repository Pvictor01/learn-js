module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,     //procurar todos os arquivos que terminam com .css
      use: ['style-loader', 'css-loader']  //loaders utilizados
    }]
  }
}