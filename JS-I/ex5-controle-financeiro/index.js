let initialMoney = parseFloat(prompt('Qual a quantidade inicial de dinheiro?'))

let options = ''

do {
    options = prompt(`
        Escolha 1, 2 ou 3:\n
        Quantidade de dinheiro: ${initialMoney} R$\n
        1- Adicionar;\n
        2- Remover;\n
        3- Sair
    `)

    switch(options) {
        case '1':
            initialMoney += parseFloat(prompt('Informe a quantia que deseja depositar'))
            break
        case '2':
            initialMoney -= parseFloat(prompt('Informe a quantia que deseja retirar'))
            break
        case '3':
            alert('Encerrando!')
            break
        default:
            alert('Opção inválida')
            break
    }
} while (options !== '3')