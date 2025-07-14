let menu = ''
let properties = []
let count = 0

do {
    let propertie = {}

    menu = prompt(`
        \nImovéis cadastrados: ${count}
        \n1- Salvar um imóvel
        \n2- Mostrar imóveis salvos
        \n3- Sair
    `)

    switch(menu) {
        case '1':
            propertie.name = prompt(`Nome do proprietário:`)
            propertie.rooms = parseFloat(prompt(`Qual a quantidade de quartos?`))
            propertie.bathrooms = parseFloat(prompt(`Qual a quantidade de banheiros?`))
            propertie.garage = confirm(`Possui garagem?`)

            let confirmation = confirm(`
                Deseja salvar o seguinte imóvel?\n
                Proprietário: ${propertie.name};\n    
                Quartos: ${propertie.rooms};\n    
                Banheiros: ${propertie.bathrooms};\n    
                Garagem: ${propertie.garage};\n    
            `)

            if(confirmation) {
                properties.push(propertie)
                count++
                alert('Imóvel salvo com sucesso!')
            } else {
                alert('Imóvel não foi salvo')
            }
            break
        case '2':
            if(properties == '') {
                alert('Nenhum imóvel registrado!')
            } else {
                for(let i = 0; i < properties.length; i++) {
                    if(properties[i].garage == true) {
                        alert(`
                            Total de imóveis: ${count}\n
                            Imóvel: ${[i+1]}\n
                            Nome do proprietário:  ${properties[i].name}\n
                            Quartos: ${properties[i].rooms}\n
                            Banheiros: ${properties[i].bathrooms}\n
                            Possui garagem: Sim
                        `);
                    } else {
                        alert(`
                            Total de imóveis: ${count}\n
                            Imóvel: ${[i+1]}\n
                            Nome do proprietário:  ${properties[i].name}\n
                            Quartos: ${properties[i].rooms}\n
                            Banheiros: ${properties[i].bathrooms}\n
                            Possui garagem: Não
                        `);
                    }
                }
            }
            break
        case '3':
            alert('Saindo!')
            break
        default:
            alert('Opção inválida!')  
            break     
    }
}while(menu !== '3')