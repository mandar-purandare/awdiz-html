// Q Find out all even and odd numbers from given array. 
    var array = [2, 45, 65, 67, 23, 65, 87, 123, 67, 87, 42, 4, 6, 78, 22, 55, 98];

for (var i = 0; i < array.length; i++) {
    // console.log(array[i])
    if (array[i] % 2 != 0) {
        console.log(array[i], "- This is odd number.")
    } else {
        console.log(array[i], "This is even number.")
    }
}

// Q Find out all odd numbers and even numbers addition from given array.
var array = [2, 45, 65, 67, 23, 65, 87, 123, 67, 87, 42, 4, 6, 78, 22, 55, 98];
var additionOfOddNumber = 0;
var additionOfEvenNumber = 0;

for (var i = 0; i < array.length; i++) {
    
    if (array[i] % 2 != 0) {
        
        additionOfOddNumber = additionOfOddNumber + array[i];

    }
    else {
        additionOfEvenNumber = additionOfEvenNumber + array[i];
    }
}

console.log(additionOfEvenNumber, "- Addition for even number")
console.log(additionOfOddNumber, "-Addition for Odd number ")



// Nested FOR loop

// Q Given an array find out addition of two number which is equal to target

var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3];
var target = 10;

for (var i = 0; i < array.length; i++) {
    
    for (var j = i + 1; j < array.length; j++) {
        
        if (array[i] + array[j] == target) {
            console.log(array[i], "+", array[j], "=", array[i] + array[j])
        }
    }
}