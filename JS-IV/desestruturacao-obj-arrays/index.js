//Desestruturando Objetos
const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"]
}

const name = person.name //const {name} = person
const {job, parents} = person

console.log(name, job, parents);

//Desestruturando Arrays
const [father, mother] = parents 
console.log(father, mother)  //identifica apenas pela posiçao

function createUser({name, job, parents}) {
  const id = Math.floor(Math.random() * 9999) //criando id aleatorio, random descarta n apos a virgula
  return {
    id,
    name,
    job,
    parents
  }
}

const user = createUser(person)
console.log(user)