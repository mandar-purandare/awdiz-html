let number = 11212;

function isPalindrome(number){

    let initialNum = number;

    // Initializing the result variable 
    let result = 0;

    while(number>0){
        // Getting the rightmost digit
        rightmost = number%10;
        
        result = result*10 + rightmost;
        
        // Removing the rightmost digit from the number
        number = Math.floor(number/10);
    }

    if (result === initialNum){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome(number));


