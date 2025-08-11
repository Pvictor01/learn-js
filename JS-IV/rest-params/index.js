function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0) //somando todos os numeros de um array
}

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2))