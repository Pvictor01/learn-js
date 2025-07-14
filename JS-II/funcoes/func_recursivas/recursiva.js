function double(num) {
    console.log(num);
    double(num * 2)
}

//double(2)

function factorial(num) {
    console.log(num);

    if(num === 0) {
        return 1 
    } else if(num === 1) {
        return 1
    } else {
        console.log(`${num} * !${num - 1}`);
        return num * factorial(num -1)
    }
    
}
console.log(factorial(5));
