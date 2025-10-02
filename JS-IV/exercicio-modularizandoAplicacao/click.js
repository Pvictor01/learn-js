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

export { clickValidation, clear }