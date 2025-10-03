const calc = (resultInput, input) => function calculate() {
  try {
    const fn = new Function('return ' + input.value) //new Function permite que você crie novas funções em tempo de execução a partir de uma string, return é necessario
    const result = fn()
    resultInput.value = result
    resultInput.classList.remove('error')
  } catch (error) {
    resultInput.value = 'Error'
    resultInput.classList.add('error')
  }
}

export default calc