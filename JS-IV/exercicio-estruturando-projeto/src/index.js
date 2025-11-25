const dayjs = require('dayjs')
import './style/style.css'

alert(`Hoje é ${dayjs().format('DD/MM/YYYY')}`)
console.log(`Hoje é ${dayjs().format('DD/MM/YYYY')}`)

const hello = () => console.log(`Funcionando! ${1 + 1}`);
hello()