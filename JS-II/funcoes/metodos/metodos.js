//Métodos são funções atreladas a objetos

let person = {
    name: 'Paulo',
    age: 18,
    sayHello() {
        console.log(`Olá, meu nome é: ${this.name}`);   
    }
}

person.sayHello()