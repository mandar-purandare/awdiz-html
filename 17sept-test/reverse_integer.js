// let number =  -7;

// // Initializing the result variable 
// let result = 0;

// while(number>0){
//     // Getting the rightmost digit
//     rightmost = number%10;
    
//     result = result*10 + rightmost;
    
//     // Removing the rightmost digit from the number
//     number = Math.floor(number/10);
// }

// if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
//     result = 'zero'; // Return 0 in case of overflow
//   }
// console.log("Reversed number is : " + result)


function reverseIntegerWithoutString(num) {
    let reversed = 0;
    const maxInt = Math.pow(2, 31) - 1; // Maximum 32-bit signed integer
    const minInt = -Math.pow(2, 31); // Minimum 32-bit signed integer
  
    while (num !== 0) {
      const pop = num % 10;
      num = (num / 10) | 0;
  
      // Check for integer overflow before adding the next digit
      if (reversed > maxInt / 10 || (reversed === maxInt / 10 && pop > 7)) {
        return 0;
      }
      if (reversed < minInt / 10 || (reversed === minInt / 10 && pop < -8)) {
        return 0;
      }
  
      reversed = reversed * 10 + pop;
    }
  
    return reversed;
  }
  
  // Example usage:
  console.log(reverseIntegerWithoutString(123)); // Output: 321
  console.log(reverseIntegerWithoutString(-123)); // Output: -321
  console.log(reverseIntegerWithoutString(120)); // Output: 21
  