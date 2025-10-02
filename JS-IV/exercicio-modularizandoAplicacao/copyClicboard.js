const copyClicboard = (resultInput) => document.getElementById('copyToClipboard').addEventListener('click', function(ev) {
  const button = ev.currentTarget

  if(button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)//no navegador pega o valor textual que está dentro do elemento resultInput
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
})

export default copyClicboard