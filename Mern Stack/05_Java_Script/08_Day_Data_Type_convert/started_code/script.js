// We start with a variable named 'score' which holds a string value '33a'.
let score = '33a';

// Log the type of 'score' to the console. 
// Expected output: 'string'
console.log(typeof(score)); // Output: string

// Convert the 'score' variable from a string to a number using the Number() function.
// '33a' cannot be fully converted to a number because of the 'a', resulting in NaN.
let valueInNumber = Number(score);

// Log the type of 'valueInNumber' to the console.
// Expected output: 'number' because the result is a number type, even though it is NaN.
console.log(typeof(valueInNumber)); // Output: number

// Log the value of 'valueInNumber' to the console.
// Expected output: NaN
console.log(valueInNumber); // Output: NaN  


// Using parseInt() to convert a string to an integer.?
// parseInt() will ignore trailing non-numeric characters and convert the initial numeric part.
let parsedIntValue = parseInt('33a'); // '33a' will be converted to 33
console.log(typeof(parsedIntValue)); // Expected output: 'number'
console.log(parsedIntValue); // Output: 33

// Using parseFloat() to convert a string to a floating-point number.
// parseFloat() will convert the initial numeric part of the string and ignore trailing non-numeric characters.
let parsedFloatValue = parseFloat('33.5abc'); // '33.5abc' will be converted to 33.5
console.log(typeof(parsedFloatValue)); // Expected output: 'number'
console.log(parsedFloatValue); // Output: 33.5

// Converting a boolean to a number using Number() function.
let booleanTrue = true;
let booleanFalse = false;
console.log(Number(booleanTrue)); // Output: 1 (true)
console.log(Number(booleanFalse)); // Output: 0 (false)



// Converting a number to a string using String() function.
let number = 42;
let numberToString = String(number);
console.log(typeof(numberToString)); // Expected output: 'string'
console.log(numberToString); // Output: '42'

// Converting a boolean to a string using String() function.
let booleanToStringTrue = String(true);
let booleanToStringFalse = String(false);
console.log(typeof(booleanToStringTrue)); // Expected output: 'string'
console.log(booleanToStringTrue); // Output: 'true'
console.log(typeof(booleanToStringFalse)); // Expected output: 'string'
console.log(booleanToStringFalse); // Output: 'false'

// Implicit type conversion (type coercion) examples:
// Adding a number to a string results in string concatenation.
let concatenatedResult = 'The answer is ' + 42;
console.log(concatenatedResult); // Output: 'The answer is 42'

// Subtracting a string from a number attempts to convert the string to a number.
let subtractionResult = 42 - '20';
console.log(subtractionResult); // Output: 22

// Using unary plus (+) operator to convert a string to a number.
// This operator attempts to convert the operand to a number.
let unaryPlusResult = +'42';
console.log(typeof(unaryPlusResult)); // Expected output: 'number'
console.log(unaryPlusResult); // Output: 42

// Example of explicit type conversion using Boolean() function.
// Converting various values to boolean.
console.log(Boolean(0)); // Output: false (0 is falsy)
console.log(Boolean(1)); // Output: true (non-zero numbers are truthy)
console.log(Boolean('')); // Output: false (empty string is falsy)
console.log(Boolean('Hello')); // Output: true (non-empty string is truthy)
console.log(Boolean(null)); // Output: false (null is falsy)
console.log(Boolean(undefined)); // Output: false (undefined is falsy)
console.log(Boolean([])); // Output: true (empty array is truthy)
console.log(Boolean({})); // Output: true (empty object is truthy)
