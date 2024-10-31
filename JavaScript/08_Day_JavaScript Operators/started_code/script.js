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
// The + operator is used to add two numbers and concatenate two strings together. 

// ? Add num1 and num2 together 
let num1 = 1; 
let num2 = 3;
console.log(`? Add two different numbers together (${num1} + ${num2}):-`, num1 + num2); // Output: 4

// ? Add str1 and str2 together
let str1 = "Hello"; 
let str2 = "World";
// String concatenation
console.log(`? Concatenate two strings (${str1} + ${str2}) :-`, str1 + " " + str2); // Output: "Hello World"

// ? Add number and string
let num = 10;
let str = "apples";
console.log(`? Add number to string (${num} + ${str}) :-`, num + str); // Output: "10 apples"

// ? Adding Boolean Values (true + true)
let bool1 = true;
let bool2 = true;
console.log("? Add boolean values (true + true):", bool1 + bool2); // Output: 2

// ? Adding Boolean Values (true + false)
let bool3 = true;
let bool4 = false;
console.log("? Add boolean values (true + false):", bool3 + bool4); // Output: 1


/* -------------------------------------------------------------------------- */
/*                            Subtraction Operators                           */
/* -------------------------------------------------------------------------- */

//* 2. Subtraction
// The - operator is used to subtract one number from another.

// ? Subtract num2 from num1
console.log(`? Subtract num2 from num1 (${num1} - ${num2}):`, num1 - num2); // Output: -2


/* -------------------------------------------------------------------------- */
/*                            Multiplication Operators                       */
/* -------------------------------------------------------------------------- */

//* 3. Multiplication
// The * operator is used to multiply two numbers.

// ? Multiply num1 and num2
console.log(`? Multiply num1 and num2 (${num1} * ${num2}):`, num1 * num2); // Output: 3


/* -------------------------------------------------------------------------- */
/*                            Division Operators                              */
/* -------------------------------------------------------------------------- */

//* 4. Division
// The / operator is used to divide one number by another.

// ? Divide num2 by num1
console.log(`? Divide num2 by num1 (${num2} / ${num1}):`, num2 / num1); // Output: 3


/* -------------------------------------------------------------------------- */
/*                            Modulus Operators                              */
/* -------------------------------------------------------------------------- */

//* 5. Modulus
// The % operator returns the remainder of a division.

// ? Modulus of num2 by num1
console.log(`? Modulus of num2 by num1 (${num2} % ${num1}):`, num2 % num1); // Output: 0


/* -------------------------------------------------------------------------- */
/*                            Comparison Operators                           */
/* -------------------------------------------------------------------------- */

//* 6. Comparison
// Comparison operators are used to compare two values.

// ? Greater than
console.log(`? Is num2 greater than num1? (${num2} > ${num1}):`, num2 > num1); // Output: true

// ? Less than
console.log(`? Is num1 less than num2? (${num1} < ${num2}):`, num1 < num2); // Output: true

// ? Equal to
console.log(`? Is num1 equal to num2? (${num1} === ${num2}):`, num1 === num2); // Output: false

// ? Not equal to
console.log(`? Is num1 not equal to num2? (${num1} !== ${num2}):`, num1 !== num2); // Output: true


/* -------------------------------------------------------------------------- */
/*                            Logical Operators                               */
/* -------------------------------------------------------------------------- */

//* 7. Logical Operators
// Logical operators are used to combine conditional statements.

// ? Logical AND (&&)
console.log(`? Logical AND (true && false):`, true && false); // Output: false

// ? Logical OR (||)
console.log(`? Logical OR (true || false):`, true || false); // Output: true

// ? Logical NOT (!)
console.log(`? Logical NOT (!true):`, !true); // Output: false


/* -------------------------------------------------------------------------- */
/*                            Assignment Operators                           */
/* -------------------------------------------------------------------------- */

//* 8. Assignment Operators
// Assignment operators are used to assign values to variables.

// ? Simple assignment
let x = 5;
console.log(`? Simple assignment: x = ${x}`); // Output: 5

// ? Addition assignment
x += 2; // equivalent to x = x + 2
console.log(`? Addition assignment (x += 2): x = ${x}`); // Output: 7

// ? Subtraction assignment
x -= 1; // equivalent to x = x - 1
console.log(`? Subtraction assignment (x -= 1): x = ${x}`); // Output: 6


/* -------------------------------------------------------------------------- */
/*                            Ternary Operator                                */
/* -------------------------------------------------------------------------- */

//* 9. Ternary Operator
// The ternary operator is a shorthand for an if-else statement.

// ? Ternary operation
let age = 18;
let isAdult = (age >= 18) ? "Adult" : "Minor";
console.log(`? Ternary operator result:`, isAdult); // Output: "Adult"
