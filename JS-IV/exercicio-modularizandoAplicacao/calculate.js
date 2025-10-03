const calc = (resultInput, input) => function calculate() {
  resultInput.value = 'Error'
  resultInput.classList.add('error')
  
  try {
    const fn = new Function('return ' + input.value) //new Function permite que você crie novas funções em tempo de execução a partir de uma string, return é necessario
    const result = fn()
    resultInput.value = result
    resultInput.classList.remove('error')
  } catch (error) {
    // Se a expressão for inválida (ex: "2++2"), o catch captura o erro.
    // O input já estará marcado como 'Error', então não precisamos fazer nada aqui.
  }
}

export default calc