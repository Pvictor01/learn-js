// Retorno é a saída da função
// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined

function calcMedia(x, y) {
    let media = (x + y) / 2

    return media
}

console.log(calcMedia(9, 6));

// Para dizer qual é a saída de uma função usamos o return
function criarProduto(nome, preco) {
    const produto = {
        nome, // nome: nome
        preco,
        estoque: 4
    }

    return produto
}

const notebook = criarProduto('Notebook Samsung', 2000)
console.log(notebook);

// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão

function areaRetangular(base, altura) {
    return base * altura
}

// Ou até o retorno de outra função
function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}
console.log(areaRetangular(5, 3));
console.log(areaQuadrada(5));


// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function ola() {
    const text = 'olá'
    console.log(text);
    
    return text
    text = 'olá mundo'
}

ola()

// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos

function maiorIdade(idade) {
    if(idade >= 18) {
        return idade + ' Maior idade'
    } else {
        return idade + ' Menor idade'
    }
}

console.log(maiorIdade(18));
