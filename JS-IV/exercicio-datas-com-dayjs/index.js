const dayjs = require('dayjs')
//dayjs().format('DD-MM-YYYY')

const date1 = dayjs('03-12-2001').format('DD-MM-YYYY')
const date2 = dayjs('09-10-2025').format('DD-MM-YYYY')

const addYear = dayjs(date2).add(1, 'year')

console.log(dayjs(date2).diff(dayjs(date1), 'year') + ' anos')
console.log(addYear.format('DD-MM-YYYY'))