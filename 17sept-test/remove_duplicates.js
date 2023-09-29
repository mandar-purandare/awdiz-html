let array = [1,1,2,2,3,4,5,5,6,7,8];

function removeDuplicates(array){
    let uniquesArray = [array[0]];
    let j = 2;
    for(let i=1; i<array.length; i++){
        if((array[i] !== array[j]) && array[i] !== uniquesArray[0]){
            uniquesArray.push(array[i]);
        }
        j++;
    }
    return uniquesArray;
}

console.log(removeDuplicates(array));