const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')
console.log({ towns, townsCopy }) //altera o array original

const townsClone = [...towns] //Clonando array towns
townsClone.push('agost')
console.log({ towns, townsClone });

const townsObj = {...towns}
const townsObjClone = {...townsObj}
townsObjClone.test = 'test'
console.log({townsObj, townsObjClone})