const clickValidation = (input) => document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
  charKeyBtn.addEventListener('click', function() {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

const clear = (input) => document.getElementById('clear').addEventListener('click', function() {
  input.value = ''
  input.focus()
})

const equal = (calculate) => document.getElementById('equal').addEventListener('click', calculate) //sem parenteses para o js nao executar a funcao sem clicar

export { clickValidation, clear, equal }