let meters = parseFloat(prompt('Informe um valor em metros'))

let options = prompt(`
  Para qual unidade de medida deseja converter?
  \nmilímetro (mm)
  \ncentímetro (cm)
  \ndeciímetro (dm)
  \ndecâmetro (dam)
  \nhectômetro (hm)
  \nquilômetro (km)
`)

let result = 0

switch (options) {
  case('mm'):
    result = meters * 1000
    alert(`${meters} metros é equivalente à ${result} milímetros`)
    break
  case('cm'):
    result = meters * 100
    alert(`${meters} metros é equivalente à ${result} centímetros`)
    break
  case('dm'):
  result = meters * 10
    alert(`${meters} metros é equivalente à ${result} decímetros`)
    break
  case('dam'):
    result = meters / 10
    alert(`${meters} metros é equivalente à ${result} decâmetros`)
    break
  case('hm'):
    result = meters / 100
    alert(`${meters} metros é equivalente à ${result} hectômetros`)
    break 
  case('km'):
    result = meters / 1000
    alert(`${meters} metros é equivalente à ${result} quilômetros`)
    break 
  default:
    alert('Opção inválida!')
}