let numbersArray = [8,12,3,7,9,2,45,99];

function printSmallestNumber(array){
    let smallest = numbersArray[0];
    for(let i=1; i<numbersArray.length; i++){
        if(smallest < numbersArray[i]){
            continue;
        }else{
            smallest=numbersArray[i];
        }
    }
    return smallest;
}

console.log(printSmallestNumber(numbersArray));