let vacancies = [
  {name: 'back-end', candidateNames : ['Paulo', 'Joao'], description: 'blabla', deadline: new Date(2025, 10, 10)},
  {name: 'front-end', candidateNames : ['Victor'], description: 'blabla', deadline: new Date(2025, 8, 5)},
  {name: 'designer', candidateNames : ['Andressa'], description: 'blabla', deadline: new Date(2025, 6, 15)},
]

let menu = ''

function listVacancies() {
  if(vacancies.length === 0) {
    console.log('Não há vagas cadastradas!')
    return
  }

  let total = 0

  vacancies.forEach(function(vacancy, index) {
    let vacancyName = vacancy.name
    let candidate = vacancy.candidateNames
    let amountCandidate = vacancy.candidateNames.length
    let limitDate = vacancy.deadline
    total += amountCandidate

    console.log(`
      Indice: ${index + 1}
      Nome da vaga: ${vacancyName}
      Candidatos: ${candidate}
      Quantidade de Candidatos: ${amountCandidate}
      Data Limite: ${limitDate.toLocaleDateString('pt-BR')}
    `);
  })
  console.log(`Total de Candidatos: ${total};\nTotal de vagas: ${vacancies.length}`);
}

function createVacancy() {
  let newVacancyName = prompt(`Informe o nome da nova vaga`)
  let newVacancyDescription = prompt(`Informe a descrição da nova vaga`)
  let newVacancyDeadline = prompt(`Informe a data limite da nova vaga (dd/mm/aaaa)`)

  const dateParts = newVacancyDeadline.split('/')
  const year = parseInt(dateParts[2])
  const month = parseInt(dateParts[1])
  const day = parseInt(dateParts[0])
  const deadlineDate = new Date(year, month - 1, day)

  if(newVacancyName == '' || newVacancyDescription == '' || newVacancyDeadline == '') {
    alert('Preencha todos os campos!')
    return
  }

  let confirmation = confirm(`
    Confirma as seguintes informações?
    \nNome da vaga: ${newVacancyName}
    \nDescrição: ${newVacancyDescription}
    \nData limite: ${deadlineDate.toLocaleDateString('pt-BR')}
  `)
  
  if(confirmation) {
    vacancies.push({
      name: newVacancyName,
      candidateNames: [],
      description: newVacancyDescription,
      deadline: deadlineDate
    })
  } else {
    alert(`Vaga não cadastrada!`)
  }
}

function viewVacancy() {
  let viewVacancy = parseInt(prompt(`Informe o indice da vaga que deseja visualizar`))
  let index = viewVacancy - 1

  if(isNaN(index) || index < 0 || index >= vacancies.length || vacancies[index] == undefined) {
    alert(`Vaga não encontrada!`)
  } else {
    let vacancy = vacancies[index]

    let candidateList = vacancy.candidateNames.length > 0
                        ? vacancy.candidateNames.join(`, `)
                        : 'Nenhum candidato cadastrado'

    console.log(`
      \nIndice da vaga: ${index + 1},
      \nNome da vaga: ${vacancy.name},
      \nDescrição: ${vacancy.description},
      \nData Limite: ${vacancy.deadline instanceof Date ? vacancy.deadline.toLocaleDateString('pt-BR') : vacancy.deadline},
      \nQuantidade de candidatos: ${vacancy.candidateNames.length},
      \nNome dos candidatos: ${candidateList}
    `);
  }
}

function registerCandidate() {
  let candidateName = prompt(`Informe o nome do novo candidato`)
  let vacancy = parseInt(prompt(`Informe o indice da vaga que deseja cadastrar o candidato`))
  let vacancyIndex = vacancy - 1

  if(isNaN(vacancyIndex) || vacancyIndex < 0 || vacancyIndex >= vacancies.length) {
    alert(`Vaga não cadastrada!`)
  } else {
    let confirmEnrollment = confirm(`
      Confirma as seguintes informações?
      \nNome do candidato: ${candidateName}
      \nNome da vaga: ${vacancies[vacancyIndex].name}
      \nDescrição: ${vacancies[vacancyIndex].description}
      \nData limite: ${vacancies[vacancyIndex].deadline instanceof Date ? vacancies[vacancyIndex].deadline.toLocaleDateString('pt-BR') : vacancy.deadline}}
    `)

    if(!candidateName) {
      alert(`Preencha todos os campos!`)   
    } else if(confirmEnrollment) {
        vacancies[vacancyIndex].candidateNames.push(candidateName)
        alert(`Candidato cadastrado com sucesso!`)
    } else {
        alert(`Candidato não cadastrado!`)
    }
  } 
}

function excludVacancy() {
  let exclusionIndex = parseInt(prompt(`Informe o indice da vaga que deseja excluir`)) - 1

  if(isNaN(exclusionIndex) || exclusionIndex < 0 || exclusionIndex >= vacancies.length || exclusionIndex == undefined) {       
    alert('Vaga não foi encontrada!')
  } else {
    let confirmExclusion = confirm(`
      \nNome da vaga: ${vacancies[exclusionIndex].name}
      \nDescrição: ${vacancies[exclusionIndex].description}
      \nData limite: ${vacancies[exclusionIndex].deadline instanceof Date ? vacancies[exclusionIndex].deadline.toLocaleDateString('pt-BR') : vacancy.deadline}}
      \nQuantidade de candidatos: ${vacancies[exclusionIndex].candidateNames.length}
      \nNome dos candidatos: ${vacancies[exclusionIndex].candidateNames.join(', ')}
      \nConfirma a exclusão da vaga?
    `) 

    if(confirmExclusion) {
      vacancies.splice(exclusionIndex, 1)
      alert('Vaga excluída com sucesso!')
    } else {
      alert('Vaga não excluída!')
    }
  }
}

do {
  menu = prompt(`
    Vagas de Emprego:
    \n1- Listar Vagas Disponíveis;
    \n2- Criar nova Vaga;
    \n3- Visualizar uma vaga;
    \n4- Inscrever um candidato em uma vaga;
    \n5- Excluir uma vaga;
    \n6- Sair.
  `)

  switch (menu) {
    case '1':
      listVacancies()
    break;
    case '2':
      createVacancy()
    break;
    case '3':
      viewVacancy()
    break;
    case '4':
      registerCandidate()
    break;
    case '5':
      excludVacancy()
    break;
    case '6':
      alert('saindo...')
    break;
    default:
      alert('Opção inválida!')
  }
} while (menu != '6')