import { clickValidation, clear } from "./click.js"
import themeSwitcher from "./themeSwitcher.js"
import keydown from "./keydown.js"

const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

clickValidation(input)
clear(input) 
keydown(input, allowedKeys, calculate)
themeSwitcher(main, root)

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