const form = document.getElementById('register-form')
const devList = []
let techRowCounter = 0

function addTechRow() {
  //ev.preventDefault()
  techRowCounter++

  const breakLine = document.createElement('br')
  const hrLine = document.createElement('hr')

  const techRowDiv = document.createElement('div')
  techRowDiv.id = `tech-row-${techRowCounter}`

  const newLabel = document.createElement('label')
  newLabel.innerText = 'Nova tecnologia: '
  const newTechInput = document.createElement('input')
  newTechInput.type = 'text'
  newTechInput.id = `new-tech-${techRowCounter}`
  newTechInput.className = 'new-tech-input'

  const experienceTimeLabel = document.createElement('label')
  experienceTimeLabel.innerText = 'Tempo de experiência: '
  
  const radioGroupName  =  `experience-time-${techRowCounter}`

  const experienceTimeInput1 = document.createElement('input')
  experienceTimeInput1.type = 'radio'
  experienceTimeInput1.id = `exp1-${techRowCounter}`
  experienceTimeInput1.name = radioGroupName
  experienceTimeInput1.value = '0-2 anos'
  const experienceTimelabel1 =  document.createElement('label')
  experienceTimelabel1.innerText = '0-2 anos'
  experienceTimelabel1.for = `exp1-${techRowCounter}`


  const experienceTimeInput2 = document.createElement('input')
  experienceTimeInput2.type = 'radio'
  experienceTimeInput2.id = `exp2-${techRowCounter}`
  experienceTimeInput2.name = radioGroupName
  experienceTimeInput2.value = '3-4 anos'
  const experienceTimelabel2 =  document.createElement('label')
  experienceTimelabel2.innerText = '3-4 anos'
  experienceTimelabel2.for = `exp2-${techRowCounter}`

  const experienceTimeInput3 = document.createElement('input')
  experienceTimeInput3.type = 'radio'
  experienceTimeInput3.id = `exp3-${techRowCounter}`
  experienceTimeInput3.name = radioGroupName
  experienceTimeInput3.value = '5+ anos'
  const experienceTimeLabel3 =  document.createElement('label')
  experienceTimeLabel3.innerText = '5+ anos' 
  experienceTimeLabel3.for = `exp3-${techRowCounter}`

  const saveTechButton = document.createElement('button')
  saveTechButton.innerText = 'Cadastrar'
  saveTechButton.type = 'button'

  saveTechButton.addEventListener('click', function() {
    const devNameValue = document.getElementById('dev-name').value
    const currentTechNameValue = newTechInput.value
    const selectRadio = document.querySelector(`input[name = "${radioGroupName}"]:checked`)
    const currentExpTimeValue = selectRadio ? selectRadio.value : null

    if(devNameValue && currentTechNameValue && currentExpTimeValue) {
      devList.push({ 
        devName: devNameValue,
        techName: currentTechNameValue,
        experienceTime: currentExpTimeValue
      })
      console.log(devList)
      newTechInput.value = ''
      selectRadio.checked = false
    } else {
      let missingFields = []
      if(!devNameValue) missingFields.push('Nome do desenvolvedor')
      if(!currentTechNameValue) missingFields.push('Nome da tecnologia')
      if(!currentExpTimeValue) missingFields.push('Tempo de experiencia')
      alert(`Preencha os campos: \n- ${missingFields.join('\n- ')}`)
    }
  })

  const removeButton = document.createElement('button')
  removeButton.innerText = 'Remover'

  removeButton.addEventListener('click', () => techRowDiv.remove())

  techRowDiv.append(
    hrLine,
    newLabel, newTechInput, breakLine.cloneNode(),
    experienceTimeLabel, breakLine.cloneNode(),
    experienceTimeInput1, experienceTimelabel1, breakLine.cloneNode(),
    experienceTimeInput2, experienceTimelabel2, breakLine.cloneNode(),
    experienceTimeInput3, experienceTimeLabel3, breakLine.cloneNode(),
    saveTechButton, removeButton
  )

  form.appendChild(techRowDiv)
}

const buttonRegister = document.getElementById('add-tech')

buttonRegister.addEventListener('click', addTechRow)