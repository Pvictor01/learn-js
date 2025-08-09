function normalSum(a, b) {
  return a + b;
}
console.log(`Soma normal: ${normalSum(1, 2)}`);

const anonymousSum = function(a, b) {
  return a + b;
}
console.log(`Soma anonima: ${anonymousSum(1, 2)}`);

const arrowSum = (a, b) => {
  return a + b;
}
console.log(`Soma arrow: ${arrowSum(1, 2)}`);

const arrowSubtract = (a, b) => a - b;
console.log(`Subtração arrow: ${arrowSubtract(5, 2)}`);

const double = x => `O dobro de ${x} é ${x * 2}`
console.log(double(5));

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc', 'Porto']

const startingWithP = towns.filter(town => town[0] === ('P')) //town => town.startsWith('P')
console.log(startingWithP)