function lightTheme() {
  document.body.style.color = 'black'
  document.body.style.backgroundColor = 'white'
}

function darkTheme() {
  document.body.style.color = 'white'
  document.body.style.backgroundColor = 'black'
}

function switchTheme() {
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
}

 
const lighButton = document.getElementById('lightBtn')
const darkButton = document.getElementById('darkBtn')
const switchButton = document.getElementById('switchBtn')

lighButton.addEventListener('click', lightTheme)
darkButton.addEventListener('click', darkTheme)
switchButton.addEventListener('click', switchTheme)