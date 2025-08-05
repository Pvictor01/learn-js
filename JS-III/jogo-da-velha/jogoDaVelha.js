const body = document.querySelector('body')
const setupScreenEl = document.getElementById('setup-screen')
const gameScreenEl = document.getElementById('game-screen')
const player1InputEl = document.getElementById('player1-name-input')
const player2InputEl = document.getElementById('player2-name-input')
const startGameBtn = document.getElementById('start-game-button')

//DOM elements 
const buttons = document.querySelectorAll('.btn')
const resultPlayer1 = document.getElementById('result-player1')
const resultPlayer2 = document.getElementById('result-player2')
const resultDraw = document.getElementById('result-draw')
const playerXTextEl = document.getElementById('player-x')
const playerOTextEl = document.getElementById('player-y')
const drawTextEl = document.getElementById('draw')

const PLAYER_X = 'X';
const PLAYER_O = 'O';
const winningColor = '#14e681'
const defaultTextColor = '#213836' 
const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
  [0, 4, 8], [2, 4, 6]             // Diagonais
];

// --- Estado do Jogo ---
let boardState = Array(9).fill('')
let currentPlayer = PLAYER_X
let gameActive = true
let scores = {
  [PLAYER_X]: 0,
  [PLAYER_O]: 0,
  draw: 0,
}

function resetBoard() {
  gameActive = true
  boardState.fill('')
  currentPlayer = PLAYER_X

  buttons.forEach(btn => {
    btn.innerHTML = ''
    btn.disabled = false
    btn.style.backgroundColor = ''
  })

  // Reseta as cores do placar
  playerXTextEl.style.color = ''
  playerOTextEl.style.color = ''
  drawTextEl.style.color = ''
}

//atualizar placar
function updateScoreBoard() {
  resultPlayer1.innerText = scores[PLAYER_X]
  resultPlayer2.innerText = scores[PLAYER_O]
  resultDraw.innerText = scores.draw
}

//Funcao para WIN
function handleWin(winner, combination) {
  console.log(`Player ${winner} venceu!`);
  gameActive = false
  scores[winner]++
  updateScoreBoard()

  combination.forEach(el => {
    buttons[el].style.backgroundColor = winningColor
  })

  buttons.forEach(btn => btn.disabled = true)
  
  if(winner === PLAYER_X) {
    playerXTextEl.style.color = winningColor
    playerOTextEl.style.color = defaultTextColor
  } else {
    playerOTextEl.style.color = winningColor
    playerXTextEl.style.color = defaultTextColor
  }

  drawTextEl.style.color = defaultTextColor
 
  setTimeout(resetBoard, 2000)
}

//funçao para DRAW
function handleDraw() { 
  console.log(`Deu Velha!`);
  gameActive = false
  scores.draw++
  updateScoreBoard()

  drawTextEl.style.color = winningColor
  playerXTextEl.style.color = defaultTextColor
  playerOTextEl.style.color = defaultTextColor

  setTimeout(resetBoard, 2000)
}

function checkGameStatus() {
  let roundWon = false
  let winningCombination
/*
  for(let i = 0; i < WINNING_COMBINATIONS; i++) {
    const combination = WINNING_COMBINATIONS[i]
    const [a, b, c] = combination ...
  }
  //***E com o forEach não pode usar o break que é essencial***  
  //***for in retorna so o indice em forma de string***
*/
  for(const combination of WINNING_COMBINATIONS) { //Para cada combination de dentro de WINNING_COMBINATIONS, faça o seguinte...
    const [a, b, c] = combination

    if(boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      roundWon = true
      winningCombination = combination
      break
    }
  }

  if(roundWon) {
    handleWin(currentPlayer, winningCombination)
    return
  }

  if(!boardState.includes('')) {
    handleDraw()
    return
  }

  currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X
}

function handleCellClick(event, index) {
  const clickedButton = event.target //currentTarget: O elemento ao qual o "ouvinte" (addEventListener) está anexado.

  if(boardState[index] !== '' || !gameActive) {
    return
  }

  boardState[index] = currentPlayer
  clickedButton.innerHTML = currentPlayer
  clickedButton.disabled = true

  checkGameStatus()
}

startGameBtn.addEventListener('click', () => {
  const player1Name = player1InputEl.value || 'Player 1 '
  const player2Name = player2InputEl.value || 'Player 2 ' 

  playerXTextEl.innerText = `${player1Name}(X)`
  playerOTextEl.innerText = `${player2Name}(O)`

  setupScreenEl.classList.add('hidden')
  gameScreenEl.classList.remove('hidden')
})

buttons.forEach((btn, index) => {
  btn.addEventListener('click', (event) => {handleCellClick(event, index)})
})

document.getElementById('theme-switcher').addEventListener('click', () => {
  body.classList.toggle('dark-theme')
})