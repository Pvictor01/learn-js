const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev) {
  ev.preventDefault() //Evita que o formulário seja submetido automaticamente
  
  const name =  document.querySelector('input[name = "name"]').value 
  const address = document.getElementById('address').value
  const breadType = document.querySelector('select[name =  "breadType"]').value
  const main = document.querySelector('input[name = "main"]:checked').value
  const salad =  document.querySelectorAll('input[name = "salad"]:checked')
  const observations = document.querySelector('textarea[name = observations]').value
  
  const saladValues = Array.from(salad).map(item => item.value)//map retorna um novo array, diferente do forEach

  console.log({
    name,
    address,
    breadType,
    main,
    salad: saladValues,
    observations
  });
  

  alert(`
    Pedido realizado!
    Nome: ${name}
    Endereço: ${address}
    Pão: ${breadType}
    Principal: ${main}
    Salada: ${saladValues.join(', ')}
    Observações: ${observations}
  `)
})
