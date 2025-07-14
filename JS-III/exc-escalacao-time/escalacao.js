function addPlayer() {
  const playerPosition = document.getElementById('player-position').value
  const playerName = document.getElementById('player-name').value
  const playerNumber = document.getElementById('number-shirt').value
  
  const ul = document.getElementById('listPlayers')

  const liPosition = document.createElement('li')
  liPosition.innerText = 'Posição: ' + playerPosition
  const liName = document.createElement('li')
  liName.innerText = 'Nome: ' + playerName
  const liNumber = document.createElement('li')
  liNumber.innerText = 'Número: ' + playerNumber
  const divPlayer = document.createElement('div')
  divPlayer.append(liPosition, liName, liNumber)
  divPlayer.id = 'id-' + playerNumber

  if(playerPosition == '' || playerName == '' || playerNumber == '') {
    alert('Preencha todos os campos!')
  } else {
    let confirmation = confirm(`
      \nConfirma a escalação do jogador abaixo?
      \nPosição: ${playerPosition}
      \nNome: ${playerName}
      \nNúmero: ${playerNumber}
    `)
  
    if(confirmation) {
      ul.append(divPlayer, document.createElement('br'))
    } else {
      alert('Escalação cancelada!')
    }
  }

  document.getElementById('player-position').value = ''
  document.getElementById('player-name').value = ''
  document.getElementById('number-shirt').value = ''
}

function removePlayer() {
  const numberRemove = document.getElementById('number-remove').value

  const shirtNumber = document.getElementById('id-' + numberRemove)

  if(numberRemove == '' || shirtNumber == null || shirtNumber == undefined) {
    alert('Jogador não encontrado!')
  } else {
    let confirmation = confirm(`
      \nConfirma a remoção do jogador abaixo?
      \n${shirtNumber.children[1].innerText}
      \n${shirtNumber.children[2].innerText}
      \n${shirtNumber.children[0].innerText}
    `)

    if(confirmation) {
      shirtNumber.remove()
     alert('Jogador removido com sucesso!')
    } else {
      alert('Remoção cancelada!')
    }
  }
}