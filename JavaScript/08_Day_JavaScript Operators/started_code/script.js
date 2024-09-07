
/******************************************************************************************************
// TODO                                         JAVASCRIPT OPERATORS                                  *
* OPERATORS ARE USED TO PERFORM DIFFERENT TYPES OF MATHEMATICAL AND LOGICAL COMPUTATIONS. *
//  ?                                             EXAMPLES:                                           *
 *                              THE ASSIGNMENT OPERATOR = ASSIGNS VALUES                              *
 *                                THE ADDITION OPERATOR + ADDS VALUES                                 *
 *                          THE MULTIPLICATION OPERATOR * MULTIPLIES VALUES                           *
 *                             THE COMPARISON OPERATOR > COMPARES VALUES                              *
 ******************************************************************************************************/



/* -------------------------------------------------------------------------- */
/*                            Arithmetic Operators                            */
/* -------------------------------------------------------------------------- */

//* 1. Addition

// The + operator is used Add two numbers and  concatenation two String together. 

// ? Add num1 and num2 together 
let num1 = 1;
let num2 = 3;

console.log(`Add two different number Together (${num1} + ${num2}):-` , num1 + num2) // Output: 3


// ? Add str1 and str2 together


let str1 = "Hello";
let str2 = "World";

// Two String ko add kr ne ko bolte hain  string Concatenation
console.log(`Concatenate two strings (${str1} + ${str2}) :-` , str1 + " "+str2) // Output: "Hello World"


// ? Add Number and String
let num = 10;
let str = "apples";
console.log(`Add number to string(${num} + ${str}) :-`, num + str); // Output: "10 apples"


// ? Adding Boolean Values (true + true)
let bool1 = true;
let bool2 = true;
console.log("`Add boolean values (true + true):", bool1 + bool2); // Output: 2 (true is treated as 1, so 1 + 1 = 2)


// ? Adding Boolean Values (true + false)
let bool3 = true;
let bool4 = false;
console.log("Add boolean values (true + false):", bool3 + bool4); // Output: 2 (true is treated as 1 and false is treated 0, so 1 + 0 = 1)

