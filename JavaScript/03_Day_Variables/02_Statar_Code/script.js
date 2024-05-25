

let carName;  
console.log("Declaring a JavaScript Variable " , carName = "Volvo")
 
console.log("To assign a value to the variable, use the equal sign:" ,carName = "Volvo")
console.log("Your variable assign Volvo " + carName)

// add two number

let num1 = 12;
console.log( "find type of variable using type of :-" , typeof(num1))
let num2 = 15;
let num3 = 30;






// Scope of variables and functions


console.log("1. Block Scope:")

// This variable 'x' is accessible throughout the script
let x = 10;  // Global Variable

// This is a block of code
{
    // This variable 'y' is only accessible within this block
    let y = 20; // local variable
    console.log(y); // Output: 20
}

console.log(x); // Output: 10
// console.log(y); // This would cause an error because 'y' is not accessible here

console.log("2. Function Scope")

// Global scope variable
let globalVar = "I'm global";

function myFunctionScope() {
    // Local scope variable
    let localVar = "I'm local"; 
    console.log(localVar); // Output: I'm local
    console.log(globalVar); // Output: I'm global
}

// Trying to access localVar outside the function will result in an error
// console.log(localVar); // This would cause an error
myFunctionScope();

console.log("3. Global Scope:");

let FruitName = "Apple"; // Global scope

function myGlobalFunction() {
    // This function can also use  FruitName
    console.log(FruitName)
}

myGlobalFunction()