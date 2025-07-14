let menu = ''

const stackOfCards = []

do{
    let letters =  ''

    for(i = 0; i < stackOfCards.length; i++) {
        letters += [i + 1] + '- ' + stackOfCards[i] + '\n'
    }

    menu = prompt(`PILHA DE CARTAS\n Quantidade de Cartas: ${stackOfCards.length}\n Cartas:\n${letters}\n 1-Adicionar Carta\n 2-Puxar Carta\n 3-Sair`)

    switch(menu) {
        case '1':
            let addLetter = prompt('Qual o nome da carta que deseja inserir?')
            stackOfCards.push(addLetter)
            break
        case '2':
            let removeLetter = stackOfCards.pop()
              
            if(removeLetter == undefined) {
                alert('Não há cartas disponíveis')
            } else {
                alert(`A carta removida foi: ${removeLetter}`)
            }
            break
        case '3':
            alert('Saindo!')
            break
        default:
            alert('Opção inválida!')
            break
    } 
} while(menu !== '3')