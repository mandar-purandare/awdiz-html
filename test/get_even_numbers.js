let numbersArray = [1,2,3,4,5,6,7,8,9,10];

function printEvenNumbers(array){
    let evenNumbersArray = [];
    for(let i=0; i<numbersArray.length; i++){
        if((numbersArray[i]%2) === 0){
            evenNumbersArray.push(numbersArray[i]);
        }
    }
    return evenNumbersArray;
}

console.log(printEvenNumbers(numbersArray));