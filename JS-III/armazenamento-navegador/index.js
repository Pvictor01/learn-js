//SessionStorage
document.getElementById('sessionBtn').addEventListener('click', () => {
  const input = document.getElementById('session')
  sessionStorage.setItem('info', input.value)
  input.value = ''
})

document.getElementById('readSession').addEventListener('click', () => {
  const info = sessionStorage.getItem('info')
  alert('A info salve na Session é: ' + info)
})

//LocalStorage
document.getElementById('localBtn').addEventListener('click', () => {
  const input = document.getElementById('local')
  localStorage.setItem('text', input.value)
  input.value = ''
})

document.getElementById('readLocal').addEventListener('click', () => {
  const text = localStorage.getItem('text')
  alert('O texto salvo é no LocalStorage é: ' + text)
})