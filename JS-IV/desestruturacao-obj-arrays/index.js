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