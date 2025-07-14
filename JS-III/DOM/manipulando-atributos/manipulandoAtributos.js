const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function() {
  input.value = 'Hello'

  console.log(input.getAttribute('value')) // pega apenas o value inicial no html
  console.log(input.value)
})

document.getElementById('type').addEventListener('click', function() {
  //input.type = input.type !== 'radio' ? 'radio' : 'text'
  input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function() {
  input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function() {
  input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function() {
  const data = input.dataset.somethingElse  //dataset para pegar os atributos de data
  console.log(`O valor de data-something é ${data}`)

  input.dataset.somethingElse = 'Novo Valor'
  console.log(`O valor novo de data-something é ${input.dataset.somethingElse}`)
})