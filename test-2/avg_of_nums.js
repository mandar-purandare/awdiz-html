let numArray = [1,2,3,4,5,6,7,8,9,10];

function printAvg(array){
    let avg;
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum+=array[i];
    }
    avg = sum/(array.length);
    return avg;
}

console.log(printAvg(numArray));