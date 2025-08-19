//Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores
const mediaAritimetica = (...x) => {
  return parseFloat(x.reduce((acc, num) => acc + num, 0) / x.length).toFixed(2)
}

console.log(mediaAritimetica(5, 10, 6, 7))