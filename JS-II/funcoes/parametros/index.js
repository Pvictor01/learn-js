// O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função
function double(x) {
    console.log('dobro de ' + x + ' é ' + (x * 2));
}
// Se uma função for chamada sem informar o parâmetro
// o valor usado para ele será o undefined
//double(100)

// Mas podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined
function dizerOla(nome = "mundo") {
    console.log("Olá, " + nome + "!")
}

//dizerOla("Isaac")
//dizerOla()

// Uma função pode ter quantos parâmetros quisermos, basta separá-los por vírgula
function sum(a, b) {
    console.log('soma: ' + (a + b));
}

//sum(1, 10)

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function createUser(name, email, age, type = 'admin') {
    const user = {
        name,
        email,
        age,
        type
    }

    console.log(user);
}

//createUser('Paulo', 'pvdev@gmail.com', 24)

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function user(user) {
    user.name
    user.age
    user.email

    console.log(user);   
}

const dataUser = {
    name: 'Paulo',
    age: 24,
    email: 'pvdev@gmail.com'
}

user(dataUser)