function register(ev) {
  console.log(ev);

  const sectionElement = ev.currentTarget.parentNode
  const username = sectionElement.children.username.value  
  const password = sectionElement.children.password.value  
  const confirmPassword = sectionElement.children.passwordConfirmation.value

  if(username === '' || username === undefined || password === '' || password === undefined || confirmPassword === '' || confirmPassword === undefined) { 
    alert('Preencha todos os campos!')
  } else if (password === confirmPassword) {
    alert(`Usuário ${username} cadastrado com sucesso!`)
  } else {
    alert('As senhas não conferem!')
  }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeEvent() {
  button.removeEventListener('click', register)
  alert('Evento removido!')
}

button.addEventListener('mouseover', function(ev) {
  console.log(ev);
})