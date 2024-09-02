// Variable Declaration and Assignment

// Declare and assign a variable in one step
let carName = "Volvo";
console.log(`Declaring a JavaScript Variable: ${carName}`);

// Avoid reassigning a variable immediately after declaration
// Instead, use a new variable or reassign later in the code
let newCarName = "Toyota";
console.log(`Reassigning a variable: ${newCarName}`);

/* -------------------------------------------------------------------------- */
/* -----------------  🚫 Don't use var to declare variable  ---------------- */
/* ------------- Because of issue in block scope and functional scope  --------- */
/* -----------------It is not good practice to use var in js------------------ */
/* -------------------------------------------------------------------------- */

// Use let or const instead of var
let num = 12;
console.log(`Printing num variable: ${num}`);

/* -------------------------------------------------------------------------- */
/*     this will throw an Error because we can't change the value of const   */
/* -------------------------------------------------------------------------- */
const pi = 22 / 7;
console.log(`The value of pi is: ${pi}`);

// Type Checking

let num1 = 12;
console.log(`Find type of variable using typeof: ${typeof num1}`);

// console.table()
let uname = "abhi";
let age = 20;
console.table({ uname, age });