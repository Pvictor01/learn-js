let initialNumber = parseFloat(prompt('Informe um número'))

for(i = 1; i <= 20; i++) {
    let multiplication = initialNumber * i
    console.log(`${initialNumber} X ${i} = ${multiplication}`);
}