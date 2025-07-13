let velocity = 80

while(velocity > 0) {
    alert(`O carro está a ${velocity} km/h`)
    velocity -= 20
    alert(`Diminuindo 20 km/h`)
    
    if(velocity <= 0) {
        alert(`O carro está parado!`)
    }
}