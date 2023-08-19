let numArray = [1,2,3,4,5,6,7,8,9,10];
let target = 10;

//dynamic funtion that finds triplets whose sum is the target
function sumOfThree(array, target){
    for(let i=0; i<array.length - 1; i++ ){
        // console.log(array[i]);
        for(let j=i+1; j<array.length - 2; j++){
            // console.log(array[i], array[j]);
            for(let k=j+1; k<array.length - 3; k++){
                // console.log(array[i], array[j], array[k]);
                if(array[i] + array[j] + array[k] == target){
                    console.log(array[i],array[j],array[k]);
                }
            }
        }
    }
}



sumOfThree(numArray,target);


//static funtion

function sayHello(){
    console.log(`hello!`);
}

sayHello();


//dynamic funtion that finds a first occurence of target in an array
function findTarget(array,target){
    for(let i=0; i<array.length; i++){
        if(array[i] == target){
             return console.log(`Got it!`);
        }
    }
     return console.log(`Could not find the target in given array`);
}

findTarget(numArray,7);

//function to reverse a string

let string = 'hello';

function getReverse(string){
    for(i=string.length; i>=0; i--){
        console.log(string[i]);
    }
}

getReverse(string);