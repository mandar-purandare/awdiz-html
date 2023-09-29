let array = [2,7,11,15];
let target = 9;

function getTargetIndices(array, target){
    let indicesArray = [];
    for(let i=0; i<array.length -1; i++){
        for(let j=i+1; j<array.length -1; j++){
            if((array[i] + array[j]) === target){
                indicesArray.push([i,j]);
            }
        }
    }
    return indicesArray;
}

console.log(getTargetIndices(array,target));


