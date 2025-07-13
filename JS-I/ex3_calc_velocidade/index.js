let vehicleOneName = prompt('Insira o Nome do veículo 1')
let OneVelocity = parseFloat(prompt('Insira a velocidade do veículo 1')) 

let vehicleTwoName = prompt('Insira o Nome do veículo 2')
let TwoVelocity = parseFloat(prompt('Insira a velocidade do veículo 2'))

if (OneVelocity > TwoVelocity) {
  alert(`O veículo 1 é mais rápido \n${OneVelocity}km/h`)
} else if(OneVelocity < TwoVelocity) {
  alert(`O veículo 2 é mais rápido \n${TwoVelocity}km/h`)
} else if(OneVelocity == TwoVelocity) {
  alert(`Os dois veículos estão na mesma velocidade \n${TwoVelocity}km/h`)
}