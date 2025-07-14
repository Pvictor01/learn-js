const buttonsContainer = document.getElementById('fields')
const getButtons = document.querySelectorAll('.btn')
const playerOneName = document.getElementById('player1-name')
const playerTwoName = document.getElementById('player2-name')
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2') 
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')
const btn5 = document.getElementById('btn-5')
const btn6 = document.getElementById('btn-6') 
const btn7 = document.getElementById('btn-7')
const btn8 = document.getElementById('btn-8')
const btn9 = document.getElementById('btn-9')
const winningColor = '#14e681'
const defaultColor = '#213836' 
let resultPlayer1 = document.getElementById('result-player1')
let resultPlayer2 = document.getElementById('result-player2')
let resultDraw = document.getElementById('result-draw')
let countPlayer1 = 0
let countPlayer2 = 0
let countDraw = 0
let options = true
let gameOver = false

function resetBoard() {
  getButtons.forEach(btn => {
    btn.innerHTML = ''
    btn.disabled = false
    btn.style.backgroundColor = 'a1d3d3'
  })
}

function checkWindOrDraw() {
  if(btn1.innerHTML === 'X' && btn2.innerHTML === 'X' && btn3.innerHTML === 'X') {  
    console.log(`Player 'X' venceu!!!`)
    countPlayer1 += 1
    resultPlayer1.innerHTML = countPlayer1
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    btn1.style.backgroundColor = winningColor
    btn2.style.backgroundColor = winningColor
    btn3.style.backgroundColor = winningColor

    document.getElementById('player-x').style.color = winningColor
    document.getElementById('player-y').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor
   
    setTimeout(resetBoard, 2000)
  } else if(btn4.innerHTML === 'X' && btn5.innerHTML === 'X' && btn6.innerHTML === 'X') {
    console.log(`Player 'X' venceu!`)
    countPlayer1 += 1
    resultPlayer1.innerHTML = countPlayer1
    options = true
    getButtons.forEach(btn => btn.disabled = true)
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-x').style.color = winningColor
    document.getElementById('player-y').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn4.style.backgroundColor = winningColor
    btn5.style.backgroundColor = winningColor
    btn6.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn7.innerHTML === 'X' && btn8.innerHTML === 'X' && btn9.innerHTML === 'X') {
    console.log(`Player 'X' venceu!`)
    countPlayer1 += 1
    resultPlayer1.innerHTML = countPlayer1
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-x').style.color = winningColor
    document.getElementById('player-y').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn7.style.backgroundColor = winningColor
    btn8.style.backgroundColor = winningColor
    btn9.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn1.innerHTML === 'X' && btn4.innerHTML === 'X' && btn7.innerHTML === 'X') {
    console.log(`Player 'X' venceu!`) 
    countPlayer1 += 1
    resultPlayer1.innerHTML = countPlayer1
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-x').style.color = winningColor
    document.getElementById('player-y').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn1.style.backgroundColor = winningColor
    btn4.style.backgroundColor = winningColor
    btn7.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn2.innerHTML === 'X' && btn5.innerHTML === 'X' && btn8.innerHTML === 'X') {
    console.log(`Player 'X' venceu!`)
    countPlayer1 += 1
    resultPlayer1.innerHTML = countPlayer1
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-x').style.color = winningColor
    document.getElementById('player-y').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn2.style.backgroundColor = winningColor
    btn5.style.backgroundColor = winningColor
    btn8.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn3.innerHTML === 'X' && btn6.innerHTML === 'X' && btn9.innerHTML === 'X') {
    console.log(`Player 'X' venceu!`)
    countPlayer1 += 1
    resultPlayer1.innerHTML = countPlayer1
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-x').style.color = winningColor
    document.getElementById('player-y').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn3.style.backgroundColor = winningColor
    btn6.style.backgroundColor = winningColor
    btn9.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn1.innerHTML === 'X' && btn5.innerHTML === 'X' && btn9.innerHTML === 'X') {
    console.log(`Player 'X' venceu!`)
    countPlayer1 += 1
    resultPlayer1.innerHTML = countPlayer1
    options = true
    getButtons.forEach(btn => btn.disabled = true)
    
    document.getElementById('player-x').style.color = winningColor
    document.getElementById('player-y').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn1.style.backgroundColor = winningColor
    btn5.style.backgroundColor = winningColor
    btn9.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn3.innerHTML === 'X' && btn5.innerHTML === 'X' && btn7.innerHTML === 'X') {
    console.log(`Player 'X' venceu!`)
    countPlayer1 += 1
    resultPlayer1.innerHTML = countPlayer1
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-x').style.color = winningColor
    document.getElementById('player-y').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn3.style.backgroundColor = winningColor
    btn5.style.backgroundColor = winningColor
    btn7.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn1.innerHTML === 'O' && btn2.innerHTML === 'O' && btn3.innerHTML === 'O') {
    console.log(`Player 'O' venceu!`)
    countPlayer2 += 1
    resultPlayer2.innerHTML = countPlayer2
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-y').style.color = winningColor
    document.getElementById('player-x').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor
    
    btn1.style.backgroundColor = winningColor
    btn2.style.backgroundColor = winningColor
    btn3.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn4.innerHTML === 'O' && btn5.innerHTML === 'O' && btn6.innerHTML === 'O') {
    console.log(`Player 'O' venceu!`)
    countPlayer2 += 1
    resultPlayer2.innerHTML = countPlayer2
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-y').style.color = winningColor
    document.getElementById('player-x').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn4.style.backgroundColor = winningColor
    btn5.style.backgroundColor = winningColor
    btn6.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn7.innerHTML === 'O' && btn8.innerHTML === 'O' && btn9.innerHTML === 'O') {
    console.log(`Player 'O' venceu!`)
    countPlayer2 += 1
    resultPlayer2.innerHTML = countPlayer2
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-y').style.color = winningColor
    document.getElementById('player-x').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn7.style.backgroundColor = winningColor
    btn8.style.backgroundColor = winningColor
    btn9.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn1.innerHTML === 'O' && btn4.innerHTML === 'O' && btn7.innerHTML === 'O') {
    console.log(`Player 'O' venceu!`)
    countPlayer2 += 1
    resultPlayer2.innerHTML = countPlayer2
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-y').style.color = winningColor
    document.getElementById('player-x').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn1.style.backgroundColor = winningColor
    btn4.style.backgroundColor = winningColor
    btn7.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn2.innerHTML === 'O' && btn5.innerHTML === 'O' && btn8.innerHTML === 'O') {
    console.log(`Player 'O' venceu!`)
    countPlayer2 += 1
    resultPlayer2.innerHTML = countPlayer2
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-y').style.color = winningColor
    document.getElementById('player-x').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn2.style.backgroundColor = winningColor
    btn5.style.backgroundColor = winningColor
    btn8.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn3.innerHTML === 'O' && btn6.innerHTML === 'O' && btn9.innerHTML === 'O') {
    console.log(`Player 'O' venceu!`)
    countPlayer2 += 1
    resultPlayer2.innerHTML = countPlayer2
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-y').style.color = winningColor
    document.getElementById('player-x').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn3.style.backgroundColor = winningColor
    btn6.style.backgroundColor = winningColor
    btn9.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn1.innerHTML === 'O' && btn5.innerHTML === 'O' && btn9.innerHTML === 'O') {
    console.log(`Player 'O' venceu!`)
    countPlayer2 += 1
    resultPlayer2.innerHTML = countPlayer2
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-y').style.color = winningColor
    document.getElementById('player-x').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn1.style.backgroundColor = winningColor
    btn5.style.backgroundColor = winningColor
    btn9.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn3.innerHTML === 'O' && btn5.innerHTML === 'O' && btn7.innerHTML === 'O') {
    console.log(`Player 'O' venceu!`)
    countPlayer2 += 1
    resultPlayer2.innerHTML = countPlayer2
    options = true
    getButtons.forEach(btn => btn.disabled = true)

    document.getElementById('player-y').style.color = winningColor
    document.getElementById('player-x').style.color = defaultColor
    document.getElementById('draw').style.color = defaultColor

    btn3.style.backgroundColor = winningColor
    btn5.style.backgroundColor = winningColor
    btn7.style.backgroundColor = winningColor

    setTimeout(resetBoard, 2000)
  } else if(btn1.disabled && btn2.disabled && btn3.disabled && btn4.disabled && btn5.disabled && btn6.disabled && btn7.disabled && btn8.disabled && btn9.disabled) {
    console.log(`Deu Velha!`)
    countDraw += 1
    resultDraw.innerHTML = countDraw
    options = true

    document.getElementById('player-y').style.color = defaultColor
    document.getElementById('player-x').style.color = defaultColor
    document.getElementById('draw').style.color = winningColor

    setTimeout(resetBoard, 2000)
  }
}

getButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.disabled = true
    options = !options

    if(options === true) {
      btn.innerHTML = 'O' 
    } else {
      btn.innerHTML = 'X'
    }
    
    checkWindOrDraw()
  }) 
})   