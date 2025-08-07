//SessionStorage
document.getElementById('sessionBtn').addEventListener('click', () => {
  const input = document.getElementById('session')
  sessionStorage.setItem('info', input.value)
  input.value = ''
})

document.getElementById('readSession').addEventListener('click', () => {
  const info = sessionStorage.getItem('info')
  alert('A info salve é: ' + info)
})