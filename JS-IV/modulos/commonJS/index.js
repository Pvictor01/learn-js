const render = require('./render')
const store = require('./store')

console.log("Aplicação iniciada.")
render()
store()
console.log("Aplicação finalizada.")

//CommonJS por padrao nao é suportado nos navegadores, apenas no nodejs, mas pode ou nao ser usado