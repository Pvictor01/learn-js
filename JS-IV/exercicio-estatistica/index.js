//Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores
const mediaAritmetica = (...x) => {
  return parseFloat(x.reduce((acc, num) => acc + num, 0) / x.length).toFixed(2)
}

console.log('A media aritimetica é: '+ mediaAritmetica(5, 10, 6, 7))

//- **Média Aritmética Ponderada:** Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos.
const mediaPonderada = (...entries) => {
  const sumValues = entries.reduce((acc, {value, weight}) => acc + (value * weight), 0)
  const sumWeights = entries.reduce((acc, {weight}) => acc + weight, 0)

  return parseFloat((sumValues / sumWeights).toFixed(2))
}

const result = mediaPonderada(
  {value: 10, weight: 2},
  {value: 40, weight: 10},
)

console.log('A media Ponderada é: ' + result);

//- **Mediana:** Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números.
const median = (...numbers) => {

}