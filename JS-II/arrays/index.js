const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// push: Adiciona um elemento no FINAL do array e devolve o novo tamanho do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift: Adiciona um elemento no COMEÇO do array e devolve o novo tamanho do array
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// pop: REMOVE um elemento no FINAL do array e devolve o elemento removido
let elementoRemovido = arr.pop("Boromir")
console.log(arr)
console.log(elementoRemovido)

// shift: REMOVE um elemento no COMEÇO do array e devolve o elemento removido
elementoRemovido = arr.shift("Boromir")
console.log(arr)
console.log(elementoRemovido)

// includes: VERIFICA se um certo elemento está presente no array 
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf: ENCONTRA o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = arr.indexOf("Gandalf")
console.log(indice)

// slice: COPIA uma parte do array e devolve a parte copiada sem alterar o array original
const hobbits = arr.slice(0, 4) //do item 0 até o 3
// Também pode ser usado com números negativos referenciar o final do array
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat: JUNTA dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)

// splice: Permite remover elementos em qualquer posição do array e SUBSTITUIR por novos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(elementosRemovidos)
console.log(sociedade)

// Usando o for para percorrer cada elemento do array
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
  }