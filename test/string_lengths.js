let stringsArray = ['string1','aLongerString','abc'];

function getStringLengths(array){
    let resultArray = [];
    for(let i = 0; i < array.length; i++){
        resultArray.push(array[i].length);
    }
    return resultArray;
}

console.log(getStringLengths(stringsArray));