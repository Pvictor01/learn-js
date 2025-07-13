let touristName = prompt('Informe o nome do turista')
let visity = confirm('Já visitou alguma cidade?')
let newCities = ''
let count = 0

while(visity == true) {
    let newCity = prompt(`Informe o nome da cidade visitada`)
    newCities += '- ' + newCity + '\n'
    count ++
    visity = confirm('Visitou mais alguma cidade?')

    if(visity == false) {
        alert(`
            \nNome do Turista: ${touristName}
            \nCidades Visitadas:\n${newCities}
            \nTotal de visitas: ${count}    
        `)
    }
}

