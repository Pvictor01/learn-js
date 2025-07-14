function menu() {
    return prompt(`
        Escolha uma das opções de cálculos abaixo:\n
        1- Área do Triângulo;\n
        2- Área do Retângulo;\n
        3- Área do Quadrado;\n
        4- Área do Trapézio;\n
        5- Área do Circulo;\n
        6- Sair
    `)
}

function triangleArea(x, y) {
    return x * y / 2
}

function rectangleArea(x, y) {
    return x * y
}

function squareArea() {
    let squareSide = parseFloat(prompt('Informe o lado do Quadrado'))
    
    return alert('Área do quadrado é: ' + (squareSide * squareSide))
}

function trapezeArea(largerBase, smallerBase, height) {
    return (largerBase + smallerBase) * height / 2
}

function circleArea(ray, pi = 3.14) {
    return pi * (ray * ray)
}

function execute() {
    let showMenu = ''

    do {
        showMenu = menu()

        switch(showMenu) {
            case '1':
                let triangleBase = parseFloat(prompt('Informe a base do triangulo'))
                let triangleHeight = parseFloat(prompt('Informe a altura do triangulo'))
    
                alert(`A Área do Triângulo é: ${triangleArea(triangleBase, triangleHeight)}`)
                break
            case '2':
                let rectangleBase = parseFloat(prompt('Informe a base do Retângulo'))
                let rectangleHeight = parseFloat(prompt('Informe a altura do Retângulo'))
    
                alert(`A Área do Retângulo é: ${rectangleArea(rectangleBase, rectangleHeight)}`)
                break
            case '3':
                squareArea()
                break
            case '4':
                let largerBase = parseFloat(prompt('Informe a base Maior do Trapézio'))
                let smallerBase = parseFloat(prompt('Informe a base Menor do Trapézio'))
                let height = parseFloat(prompt('Informe a Altura do Trapézio'))
    
                alert(`A Área do Trapézio é: ${trapezeArea(largerBase, smallerBase, height)}`)
                break
            case '5':
                let circleRay = parseFloat(prompt('Informe o raio do circulo'))
    
                alert(`A Área do Circulo é: ${circleArea(circleRay)}`)
                break
            case '6':
                alert('Saindo')
                break
            default:
                alert(`Opção inválida!\nOpções de 1 à 6`)
                break
        }
    } while(showMenu != '6')
}

execute()