let queue = []

let menu = ''

do {
    let patients = ''

    for(i = 0; i < queue.length; i++) {
        patients += (i + 1) + '°- ' + queue[i] + '\n'
    }

    menu = prompt(`
        LISTA DE PACIENTES:
        \n${patients}
        Escolha uma das opções abaixo:\n
        1- Novo Paciente\n
        2- Consultar Paciente\n
        3- Sair
    `)

    if(menu == '1') {
        const newPatient = prompt('Informe o nome do paciente')
        queue.push(newPatient)
    } else if( menu == '2') {
        const consultedPatient = queue.shift()

        switch(consultedPatient) {
            case undefined:
                alert('Não há pacientes na fila')
                break
            case consultedPatient:
                alert(consultedPatient + ' foi removido da fila')
                break
        }
    } else if(menu == '3') {
        alert('Saindo!')
    } else {
        alert('Opção inválida')
    }
} while(menu !== '3')