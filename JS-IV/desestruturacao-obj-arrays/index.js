const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"]
}

const name = person.name //const {name} = person
const {job, parents} = person

console.log(name, job, parents);
