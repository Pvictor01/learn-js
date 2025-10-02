import { clickValidation, clear } from "./click.js"
import themeSwitcher from "./themeSwitcher.js"

const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

export { main, root, input, resultInput, allowedKeys }

clickValidation(input)
clear(input) 
themeSwitcher(main, root)

input.addEventListener('keydown', function(ev) {
  ev.preventDefault()

  if(allowedKeys.includes(ev.key)) {
    input.value += ev.key 
    return
  } 

  if(ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)//'fatiar' do zero até o ultimo caractere, mas sem incluí-lo
  }
 
  if(ev.key === 'Enter') {
    calculate()
  }
})

document.getElementById('equal').addEventListener('click', calculate) //sem parenteses para o js nao executar a funcao sem clicar
 
function calculate() {
  resultInput.value = 'Error'
  resultInput.classList.add('error')

  const result = eval(input.value)//eval avalia a a string e interpreta como codigo(perigoso)
  resultInput.value = result
  resultInput.classList.remove('error')
}

document.getElementById('copyToClipboard').addEventListener('click', function(ev) {
  const button = ev.currentTarget

  if(button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)//no navegador pega o valor textual que está dentro do elemento resultInput
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
})