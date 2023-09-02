//get even numbers

let numArray = [1,2,3,4,5,6,7,8,9,10];
let numArray2 = [2,9,7,5,8];

// function printEvens(array){
//     let resultArray = [];
//     for(let i=0; i<array.length; i++){
//         if(array[i]%2 === 0){
//             resultArray.push(array[i])
//         }
//     }
//     return resultArray;
// }

// console.log(printEvens(numArray));

// function printEvens(array){
//     let resultArray = [];
//     for(let i=0; i<array.length; i++){
//         if(array[i]%2 === 0){
//             resultArray.push(array[i]);
//         }
//     }
//     return resultArray;
// }

// console.log(printEvens(numArray));

// function printEvens(array){
//     let resultArray = [];
//     for(let i=0; i<array.length; i++){
//         if(array[i]%2 === 0){
//             resultArray.push(array[i]);
//         }
//     }
//     return resultArray;
// }

// console.log(printEvens(numArray));

// function printEvens(array){
//     let resultArray = [];
//     for(let i=0; i<array.length; i++){
//         if(array[i]%2 === 0){
//             resultArray.push(array[i]);
//         }
//     }
//     return resultArray;
// }

// console.log(printEvens(numArray));


//smallest number

// function printSmallest(array){
//     let smallest = array[0];
//     for(let i=1; i<array.length; i++){
//         if(array[i] < smallest){
//             smallest = array[i]
//         }
//     }
//     return smallest;
// }

// console.log(printSmallest(numArray));

// function printSmallest(array){
//     let smallest = array[0];
//     for(let i=1; i<array.length; i++){
//         if(array[i] < smallest){
//             smallest = array[i];
//         }
//     }
//     return smallest;
// }

// console.log(printSmallest(numArray));

// function printSmallest(array){
//     let smallest = array[0];
//     for(let i=1; i<array.length; i++){
//         if(array[i] < smallest){
//             smallest = array[i];
//         }
//     }
//     return smallest;
// }

// console.log(printSmallest(numArray));

// function printSmallest(array){
//     let smallest = array[0];
//     for(let i=1; i<array.length; i++){
//         if(array[i] < smallest){
//             smallest = array[i];
//         }
//     }
//     return smallest;
// }

// console.log(printSmallest(numArray));

let stringsArray = ['a','ab','abcd','mandar'];

// function printLengths(array){
//     let lengthsArray = [];
//     for(let i = 0; i<array.length; i++){
//         lengthsArray.push(array[i].length);
//     }
//     return lengthsArray;
// }

// console.log(printLengths(stringsArray));

// function printLengths(array){
//     let lengthsArray = [];
//     for(let i = 0; i<array.length; i++){
//         lengthsArray.push(array[i].length);
//     }
//     return lengthsArray;
// }

// console.log(printLengths(stringsArray));

// function printLengths(array){
//     let lengthsArray = [];
//     for(let i=0; i<array.length; i++){
//         lengthsArray.push(array[i].length);
//     }
//     return lengthsArray;
// }

// console.log(printLengths(stringsArray));

// function printLengths(array){
//     let lengthsArray = [];
//     for(let i=0; i<array.length; i++){
//         lengthsArray.push(array[i].length);
//     }
//     return lengthsArray;
// }

// console.log(printLengths(stringsArray));


// function printCommon(array1, array2){
//     let commonsArray = [];
//     for(let i=0; i<array1.length; i++){
//         for(let j=0; j<array2.length; j++){
//             if(array2[j] === array1[i]){
//                 commonsArray.push(array2[j]);
//             }
//         }
//     }
//     return commonsArray;
// }

// console.log(printCommon(numArray, numArray2));

// function printCommon(array1,array2){
//     let commonsArray = [];
//     for(let i=0; i<array1.length; i++){
//         for(let j=0; j<array2.length; j++){
//             if(array2[j] === array1[i]){
//                 commonsArray.push(array2[j]);
//             }
//         }
//     }
//     return commonsArray;
// }

// console.log(printCommon(numArray,numArray2));

// function printCommon(array1,array2){
//     let commonsArray = [];
//     for(let i=0; i<array1.length; i++){
//         for(let j=0; j<array2.length; j++){
//             if(array2[j] === array1[i]){
//                 commonsArray.push(array2[j]);
//             }
//         }
//     }
//     return commonsArray;
// }

// console.log(printCommon(numArray,numArray2));

function printCommon(array1,array2){
    let commonsArray =[];
    for(let i=0; i<array1.length; i++){
        for(let j=0; j<array2.length; j++){
            if(array2[j] === array1[i]){
                commonsArray.push(array2[j]);
            }
        }
    }
    return commonsArray;
}

console.log(printCommon(numArray,numArray2));



