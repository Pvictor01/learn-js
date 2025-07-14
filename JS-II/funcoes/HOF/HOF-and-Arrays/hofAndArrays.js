const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

//MAP : permite obter um novo array a partir de um array existente
//Não altera o array original
/*const nomes = []
for(let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome)
}
console.log(nomes);*/
const names = personagens.map(personagem => personagem.nome)
console.log(names);

//FILTER : filtra mais a fundo os atributos do array
//Não altera o array original
/*const orcs = []
for(let i = 0; i < personagens.length; i++) {
  if(personagens[i].raca == 'Orc') {
    orcs.push(personagens[i])
  }
}*/

const orcs = personagens.filter(function(personagem) {
  return personagem.raca == 'Orc'
})
 
//console.log(orcs);

//REDUCE : serve para reduzir um array existente a um valor final qualquer,
//Não altera o array original
/*let total = 0     //Calculando niveis totais usando for
for(let i = 0; i < personagens.length; i++) {
  let niveis = personagens[i].nivel
  console.log(`Somando nível do ${personagens[i].nome}: ${niveis} + ${total} = ${niveis + total}`);
  total += niveis;
}
console.log(`total: ${total}`);*/
const nivelTotal = personagens.reduce(function(acumulador, personagem) { //Somando niveis dos personagens do array
  let total =  acumulador + personagem.nivel 
  console.log(`Somando nível do ${personagem.nome}: ${acumulador} + ${personagem.nivel} = ${total}`);

  return total
}, 0)
//console.log(nivelTotal);

const racas = personagens.reduce(function(acc, personagem) {
  if(acc[personagem.raca]) {
      acc[personagem.raca].push(personagem)
  } else {
      acc[personagem.raca] = [personagem]
  }

  return acc
}, {})

//console.log(racas);

//SORT : ordena os elementos de um array a partir de comparações entre duplas de elementos
//Altera o array original
personagens.sort(function (a, b) { //para não alterar utilizar o slice
  return a.nivel - b.nivel
})

console.log(personagens);


console.log(sum(1, 2));

function sum(a, b) {
  return a + b
}