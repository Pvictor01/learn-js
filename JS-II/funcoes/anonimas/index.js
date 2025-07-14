function sum(a, b) {
  return a + b
}

let operation = sum

console.log(operation(10, 4));


operation = function(x, y) {
  return x - y
}

console.log(operation(10, 3));
