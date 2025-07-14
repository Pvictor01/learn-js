function calculate(x, y, operator) {
  console.log('Realizando uma operação')
  const result = operator(x, y)

  return result
}

function sum(x, y) {
  return x + y
}

let resultSum = calculate(10, 3, sum)
console.log(resultSum)

console.log(calculate(10, 5, function(a, b) {
  return a - b
}))

const list = ['a', 'b', 'c']

function showElements(item, index, arr) {
  console.log({
    item, 
    index, 
    arr
  })
}

/*for(let i = 0; i < list.length; i++) { // Faz a mesma coisa que o ForEach
  showElements(list[i], i, list)
}*/

list.forEach(showElements)
console.log('**********');
list.forEach(function(item, index, arr) { //Mesmo resultado
  console.log({
    item, 
    index, 
    arr
  })
})