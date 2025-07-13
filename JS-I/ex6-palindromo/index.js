let word = prompt('Informe a palavra que será analisada')
let invertedWord = ''

for(i = word.length -1; i >= 0; i--) {
    invertedWord += word[i]     
}

if(invertedWord == word) {
    alert(`É um Palíndromo: \nNormal: ${word}; \nInvertido: ${invertedWord}`)
} else {
    alert(`Não é um Palíndromo: \nNormal: ${word}; \nInvertido: ${invertedWord}`)
}