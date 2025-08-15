let a = 0
let b = a || 10  //retorna o valor do lado direito, quando o esquerdo é null ou undefined
console.log({a, b})

b = a ?? 42
console.log({a, b})

let c = false ?? 50
console.log({c})