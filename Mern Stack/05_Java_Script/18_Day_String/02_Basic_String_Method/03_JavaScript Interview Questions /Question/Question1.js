// Reverse a String

// Write a function that takes a string as input and returns the string reversed.

// hello :- olleh


/**
 * 
   =>  Step 1: Split the string into an array of characters
    The split('') method splits the string at each character and returns an array of characters
    Example: "hii" becomes ['h', 'i', 'i']
    Step 2: Reverse the array
    The reverse() method reverses the order of elements in the array. This method is not available in strings, 
    that's why we first split the string into an array of characters.
    Example: ['h', 'i', 'i'] becomes ['i', 'i', 'h']
    Step 3: Join the array back into a string
    The join('') method joins all elements of the array back into a string without any separator
    Example: ['i', 'i', 'h'] becomes "iih"
 */

    
function reverseString(str) {
    
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString('hii')); // Output: "iih"
  
// https://medium.com/@aifuture/top-20-javascript-interview-questions-for-mastering-data-structures-3af40cca67b6