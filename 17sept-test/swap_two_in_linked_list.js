let array = [1,2,3,4,5,6];

function swapTwo(array){
    let resultArray = [];
    let j=1;
    for(let i=0; i<array.length; i++){
            resultArray.push(array[j]);
            resultArray.push(array[i]);
            i++;
            j+=2;
    }

    return resultArray;
}

console.log(swapTwo(array));

