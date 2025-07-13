let value1 = prompt('Informe o primeiro valor')
let value2 = prompt('Informe o segundo valor')

let sum = parseFloat(value1) + parseFloat(value2)
let subtraction = value1 - value2
let multiplication = value1 * value2
let division = value1 / value2

alert(`
  Cálculo das Quatro Operações:
  \nSoma: ${sum}
  \nSubtração: ${subtraction}
  \nMultiplicação: ${multiplication}
  \nDivisão: ${division}
`)