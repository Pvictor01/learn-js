let menu = prompt(`
    Escolha uma das seguintes opções abaixo:
    \nMENU
    \n1- Carro
    \n2- Moto
    \n3- Bike
    \n4- Skate
    \n5- Encerrar
`)

switch(menu) {
    case '1':
        alert(`Opção escolhida foi Carro`)
        menu = prompt(`
            MENU
            \n1- Carro
            \n2- Moto
            \n3- Bike
            \n4- Skate
            \n5- Encerrar
        `)
    case '2':
        alert(`Opção escolhida foi Moto`)
        menu = prompt(`
            MENU
            \n1- Carro
            \n2- Moto
            \n3- Bike
            \n4- Skate
            \n5- Encerrar
        `)
    case '3':
        alert(`Opção escolhida foi Bike`)
        menu = prompt(`
            MENU
            \n1- Carro
            \n2- Moto
            \n3- Bike
            \n4- Skate
            \n5- Encerrar
        `)
    case '4':
        alert(`Opção escolhida foi Skate`)
        menu = prompt(`
            MENU
            \n1- Carro
            \n2- Moto
            \n3- Bike
            \n4- Skate
            \n5- Encerrar
        `)
    case '5':
        alert(`Sistema será encerrado!`)
        break
    default:
        alert(`Opção Inválida!`)
        break
}