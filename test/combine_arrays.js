let array1 = [1,2,3];
let array2 = [4,5,6];

function combineArrays(array1, array2){
    let newArray = [];
    for(let i=0; i<array1.length; i++){
        newArray.push(array1[i]);
    }
    for(let j=0; j<array2.length; j++){
        newArray.push(array2[j]);
    }
    return newArray;
}

console.log(combineArrays(array1,array2));