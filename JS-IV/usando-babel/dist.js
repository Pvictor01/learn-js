//Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores
const mediaAritmetica = (...x) => {
  return parseFloat(x.reduce((acc, num) => acc + num, 0) / x.length).toFixed(2);
};
console.log('A media aritimetica é: ' + mediaAritmetica(5, 10, 6, 7));

//- **Média Aritmética Ponderada:** Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos.
const mediaPonderada = (...entries) => {
  const sumValues = entries.reduce((acc, {
    value,
    weight
  }) => acc + value * weight, 0);
  const sumWeights = entries.reduce((acc, {
    weight
  }) => acc + weight, 0);
  return parseFloat((sumValues / sumWeights).toFixed(2));
};
const result = mediaPonderada({
  value: 10,
  weight: 2
}, {
  value: 40,
  weight: 10
});
console.log('A media Ponderada é: ' + result);

//- **Mediana:** Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números.
const median = (...numbers) => {
  const sortedNumbers = numbers.sort((a, b) => a - b); //a - b retorna o array crescente
  const middleIndex = Math.floor(sortedNumbers.length / 2); //Math.floor arredonda um número sempre para baixo,

  if (sortedNumbers.length % 2 === 0) {
    console.log(`O array crescente é: ${sortedNumbers}
                \nMediana: (${sortedNumbers[middleIndex - 1]} + ${sortedNumbers[middleIndex]}) / 2
                \nResultado = ${(sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2}
               `);
  } else {
    console.log(`O array crescente é: ${sortedNumbers}
      \nMediana: ${sortedNumbers[middleIndex]}
    `);
  }
};
median(3, 10, 99, 80, 50, 70, 2, 99);

//Moda: Pode ser calculada encontrando o valor que mais se repete em um dado conjunto.
const mode = (...numbers) => {
  const count = {};
  numbers.forEach(num => {
    if (num in count) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  });
  let maxFrequency = 0;
  let modes = [];
  for (const num in count) {
    if (count[num] > maxFrequency) {
      maxFrequency = count[num];
      modes = [num]; // Reinicia a lista com o novo campeão
    } else if (count[num] === maxFrequency) {
      modes.push(num); // Adiciona à lista em caso de empate
    }
  }
  console.log(count);
  return modes.map(num => Number(num));
};
console.log('A moda é: ' + mode(5, 3, 6, 99, 3, 5, 2, 2, 1).join(', '));
