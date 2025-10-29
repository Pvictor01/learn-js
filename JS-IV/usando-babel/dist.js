"use strict";

//Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores
var mediaAritmetica = function mediaAritmetica() {
  for (var _len = arguments.length, x = new Array(_len), _key = 0; _key < _len; _key++) {
    x[_key] = arguments[_key];
  }
  return parseFloat(x.reduce(function (acc, num) {
    return acc + num;
  }, 0) / x.length).toFixed(2);
};
console.log('A media aritimetica é: ' + mediaAritmetica(5, 10, 6, 7));

//- **Média Aritmética Ponderada:** Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos.
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sumValues = entries.reduce(function (acc, _ref) {
    var value = _ref.value,
      weight = _ref.weight;
    return acc + value * weight;
  }, 0);
  var sumWeights = entries.reduce(function (acc, _ref2) {
    var weight = _ref2.weight;
    return acc + weight;
  }, 0);
  return parseFloat((sumValues / sumWeights).toFixed(2));
};
var result = mediaPonderada({
  value: 10,
  weight: 2
}, {
  value: 40,
  weight: 10
});
console.log('A media Ponderada é: ' + result);

//- **Mediana:** Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números.
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var sortedNumbers = numbers.sort(function (a, b) {
    return a - b;
  }); //a - b retorna o array crescente
  var middleIndex = Math.floor(sortedNumbers.length / 2); //Math.floor arredonda um número sempre para baixo,

  if (sortedNumbers.length % 2 === 0) {
    console.log("O array crescente \xE9: ".concat(sortedNumbers, "\n                \nMediana: (").concat(sortedNumbers[middleIndex - 1], " + ").concat(sortedNumbers[middleIndex], ") / 2\n                \nResultado = ").concat((sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2, "\n               "));
  } else {
    console.log("O array crescente \xE9: ".concat(sortedNumbers, "\n      \nMediana: ").concat(sortedNumbers[middleIndex], "\n    "));
  }
};
median(3, 10, 99, 80, 50, 70, 2, 99);

//Moda: Pode ser calculada encontrando o valor que mais se repete em um dado conjunto.
var mode = function mode() {
  var count = {};
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  numbers.forEach(function (num) {
    if (num in count) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  });
  var maxFrequency = 0;
  var modes = [];
  for (var num in count) {
    if (count[num] > maxFrequency) {
      maxFrequency = count[num];
      modes = [num]; // Reinicia a lista com o novo campeão
    } else if (count[num] === maxFrequency) {
      modes.push(num); // Adiciona à lista em caso de empate
    }
  }
  console.log(count);
  return modes.map(function (num) {
    return Number(num);
  });
};
console.log('A moda é: ' + mode(5, 3, 6, 99, 3, 5, 2, 2, 1).join(', '));
