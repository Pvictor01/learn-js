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

//Cookies
document.getElementById('cookieBtn').addEventListener('click', () => {
  const input = document.getElementById('cookie')  
  //cookieName=value; expires=UTCStringDate; path=/;
  const cookie = 'info=' + input.value + ';'  //cookieName=value;
  const expiration = 'expires=' + new Date(2025, 9, 9) + ';'   //expires=UTCStringDate;
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie);
})

document.getElementById('cookie2Btn').addEventListener('click', () => {
  const input = document.getElementById('cookie2')  
  //cookieName=value; expires=UTCStringDate; path=/;
  const cookie = 'text=' + input.value + ';'  //cookieName=value;
  const expiration = 'expires=' + new Date(2025, 8, 8) + ';'   //expires=UTCStringDate;
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie);
})