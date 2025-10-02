const calc = (resultInput, input) => function calculate() {
  resultInput.value = 'Error'
  resultInput.classList.add('error')

  const result = eval(input.value)//eval avalia a a string e interpreta como codigo(perigoso)
  resultInput.value = result
  resultInput.classList.remove('error')
}

export default calc