let num = 5;

function printFactorial(num){
    let factorial = 1;
    for(let i =1; i<=num; i++){
        factorial = i*factorial;
    }
    return factorial;
}

console.log(printFactorial(num));