let firstName = prompt('Informe o primeiro nome do recruta')
let lastName = prompt('Informe o segundo nome do recruta')
let area = prompt('Informe o campo de estudo')
let birth = prompt('Informe o ano de nascimento')

function showInfos() {
  return alert(`
    Nome Completo: ${firstName} ${lastName};\n
    Campo de estudo: ${area};\n
    Idade: ${2025 - birth} anos
  `)
}

alert(showInfos())