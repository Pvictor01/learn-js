import { clickValidation, clear, equal } from "./click.js"
import themeSwitcher from "./themeSwitcher.js"
import keydown from "./keydown.js"
import copyClicboard from "./copyClicboard.js"

const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

clickValidation(input)
clear(input) 
equal(calculate)
keydown(input, allowedKeys, calculate)
themeSwitcher(main, root)
copyClicboard(resultInput)
 
function calculate() {
  resultInput.value = 'Error'
  resultInput.classList.add('error')

  const result = eval(input.value)//eval avalia a a string e interpreta como codigo(perigoso)
  resultInput.value = result
  resultInput.classList.remove('error')
}