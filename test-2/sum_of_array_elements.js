let numArray = [1,2,4,5];

function printArraySum(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
         sum += array[i];
    }
    return sum;
}

console.log(printArraySum(numArray));