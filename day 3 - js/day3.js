// print numbers from num to 1 in reverse order
console.log('print numbers from num to 1 in reverse order');

let num = 10;

for(let i = num; i >= 1; i--){
    console.log(i);
}

// stop execution of loop once a number limit is reached
console.log('stop execution of loop once a number limit is reached')

let numLimit = 6;

for(let i = num; i >= 1; i--){
    console.log(i);
    if(i === numLimit){
        console.log(`We have reached ${numLimit}. Stopping iteration`);
        break;
    }
}

// print count of even and odd numbers in a given range
console.log('print count of even and odd numbers in a given range')

let startNum = 10;
let endNum = 35;
let evenCount = 0;
let oddCount = 0;

for(i=startNum; i<=endNum; i++){
    if( i%2 == 0){
        evenCount++;
    }else{
        oddCount++;
    }
}

console.log('Odd number count: ', oddCount);
console.log('Even number count: ', evenCount);

// print addition of first ten natural numbers that are odd
console.log('print addition of first ten natural numbers that are odd');

let sumOfOdd = 0;

for(let i=1; i<=10; i++){
    if(i%2 != 0){
        sumOfOdd = sumOfOdd + i;
    }
}

console.log(`Sum of odd numbers is ${sumOfOdd}`);

//print the factorial of a number
let factorial;

for(let i = num; i>=1; i--){
    console.log(factorial);
    if(factorial == undefined){
        factorial = 1;
    }else{
        factorial = factorial*i;
    }
    
}

console.log(`The factorial of ${num} is ${factorial}`);