function register(element) {
  const username = element.children.username.value  
  const password = element.children.password.value  
  const confirmPassword = element.children.passwordConfirmation.value  
  
  if(password === confirmPassword) {
    alert(`Usuário ${username} cadastrado com sucesso!`)
  } else {
    alert('As senhas não conferem!')
  }
}