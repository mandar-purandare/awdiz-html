let string = 'a';

function checkPalindrome(string){
    let j = string.length -1;
    for(let i=0; i<string.length; i++){
        // console.log(j);
        
        if(string[i] !== string[j]){
            return false;
        }
        j--;
    }
    return true;
}

console.log(checkPalindrome(string));