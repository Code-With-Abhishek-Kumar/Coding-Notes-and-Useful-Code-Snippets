// Check if input variable is a number or not


// Checks if input variable is a number or Not by Using isNaN() in-built JavaScript function



/**

In JavaScript NaN is short for "Not-a-Number".

The isNaN() method returns true if a value is NaN.

The isNaN() method converts the value to a number before testing it.

*/


//  Example 

// 124 :- Number
// 12f :- Not a Number

let Variable = '12D';


if(isNaN(Variable)){
console.log(`${Variable} is Not a Valid Number Please Give a Valid Number`)
}else{
    console.log(`${Variable} is Number `)
}





