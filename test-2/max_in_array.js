let numArray = [1,2,4,5,7,3];

function printArrayMax(array){
    let max = array[0];
    for(let i=1; i<array.length; i++){
         if(array[i] > max){
            max = array[i];
         }
    }
    return max;
}

console.log(printArrayMax(numArray));