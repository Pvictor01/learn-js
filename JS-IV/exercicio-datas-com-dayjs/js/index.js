const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

const dataOfBirth = dayjs('03-01-2001', 'DD-MM-YYYY')
const today = dayjs().startOf('day')
const addYear = dayjs(today).add(1, 'year')

function getAge(today) {
  return today.diff(dataOfBirth, 'year')
}

function nextBirthday(today) {
  const addYears = dayjs(dataOfBirth).add(getAge(dayjs(today)) + 1, 'year') //add +1 ano a idade atual
  const nextBirth = addYears.diff(dayjs(today), 'day') //diferença de dias entre hoje e o proximo aniversario

  return nextBirth
}

//console.log(`${dayjs(today).diff(dayjs(dataOfBirth), 'year')} anos`) // retorna idade, mas ideal fazer uma funçao
console.log(`Hoje é: ${dayjs(today).format('DD/MM/YYYY')}`) //data atual
console.log(`Adcionando ano: ${dayjs(addYear).format('DD/MM/YYYY')}`) //ex adicionando ano a data
console.log(`Idade: ${getAge(dayjs(today))} anos`) //retorna idade
console.log(`Próximo Aniversário em: ${nextBirthday(dayjs(today))} dias`) //retorna os dias para o prox aniversario