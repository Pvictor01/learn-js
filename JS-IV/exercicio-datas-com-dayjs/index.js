const dayjs = require('dayjs')
dayjs().format('DD-MM-YYYY')

const date1 = dayjs('03-01-2001').format('DD-MM-YYYY')
const date2 = dayjs('09-10-2025').format('DD-MM-YYYY')
const addYear = dayjs(date2).add(1, 'year')

const dataOfBirth = dayjs('03-01-2001')

const today = dayjs().startOf('day').format('DD-MM-YYYY-HH:mm:ss')

function age(today) {
  return today.diff(dataOfBirth, 'year')
}

function nextBirthday(day) {
  const addYears = dayjs(dataOfBirth).add(age(dayjs(day)) + 1, 'year')

  const nextBirth = addYears.diff(dayjs(day), 'day')

  return nextBirth
}

console.log(dayjs(date2).diff(dayjs(date1), 'year') + ' anos')
console.log(addYear.format('DD-MM-YYYY'))
console.log(`Idade: ${age(dayjs(today))} anos`)
console.log(`Próximo Aniversário em: ${nextBirthday(dayjs(today))} dias`)
