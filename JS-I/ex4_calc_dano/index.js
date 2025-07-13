let namePlayerOne = prompt('Nome do Primeiro personagem')
let attackPlayerOne = parseFloat(prompt('Poder de ataque do Primeiro personagem'))

let namePlayerTwo = prompt('Nome do Segundo personagem')
let hitPointsPlayerTwo = parseFloat(prompt('Pontos de vida do Segundo personagem'))
let defensePlayerTwo = parseFloat(prompt('Pontos de defesa do Segundo personagem'))
let shieldPlayerTwo = confirm('O segundo personagem possui escudo?')

let damage = 0

if(attackPlayerOne > defensePlayerTwo && shieldPlayerTwo == false) {
    damage = attackPlayerOne - defensePlayerTwo 
  } else if(attackPlayerOne > defensePlayerTwo && shieldPlayerTwo == true) {
    damage = (attackPlayerOne - defensePlayerTwo) / 2
  } else if (attackPlayerOne <= defensePlayerTwo) {
    damage = 0
}

alert(`
  Nome do Primeiro Jogador: ${namePlayerOne};
  Poder de ataque do Primeiro Jogador: ${attackPlayerOne};\n
  Nome do Segundo Jogador: ${namePlayerTwo};  
  Pontos iniciais de vida: ${hitPointsPlayerTwo};
  Poder de defesa: ${defensePlayerTwo};
  Vida apos ataques: ${hitPointsPlayerTwo -= damage};
  Total de dano causado na batalha: ${damage};  
`)