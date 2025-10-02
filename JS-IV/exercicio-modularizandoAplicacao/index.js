import { clickValidation, clear, equal } from "./click.js"
import themeSwitcher from "./themeSwitcher.js"
import keydown from "./keydown.js"
import copyClicboard from "./copyClicboard.js"
import calc from "./calculate.js"

const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

clickValidation(input)
clear(input)
const calculate = calc(resultInput, input)
equal(calculate)
keydown(input, allowedKeys, calculate)
themeSwitcher(main, root)
copyClicboard(resultInput)