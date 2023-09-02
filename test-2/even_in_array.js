let numArray = [1,2,3,4,5,6,7,8,9,10];

function evenInArray(array){
    let evenCount = 0;
    for(let i=0; i<array.length; i++){
        if(array[i]%2 === 0){
            evenCount++;
        }
    }
    return evenCount;
}

console.log(evenInArray(numArray));