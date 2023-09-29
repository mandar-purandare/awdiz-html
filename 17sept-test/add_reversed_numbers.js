let l1 = [2,4,3];
let l2 = [5,6,4];

function getSumReversed(array1,array2){
    let num1 = 0;
    let num2 = 0;

    for(let i=array1.length-1; i>=0; i--){
        num1 = num1*10 + array1[i];
    }

    for(let j=array2.length-1; j>=0; j--){
        num2 = num2*10 + array2[j];
    }

    let sum = num1 + num2;

    let rightMost;
    let finalArray = [];
    while(sum != 0){
        rightMost = Math.floor(sum%10);
        sum = Math.floor(sum/10);
        finalArray.push(rightMost);
    }

    return finalArray;
}

console.log(getSumReversed(l1,l2));