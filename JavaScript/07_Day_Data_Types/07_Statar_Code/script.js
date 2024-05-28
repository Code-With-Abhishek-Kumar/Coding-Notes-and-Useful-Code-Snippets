// Number: Represents both integer and floating-point numbers
let num = 5;
let floatNum = 3.14;
console.log("Number:", num);
console.log("Floating-point Number:", floatNum);

// String: Represents a sequence of characters enclosed in single or double quotes
let str = "Hello";
console.log("String:", str);

// Boolean: Represents a logical value, either true or false
let isTrue = true;
let isFalse = false;
console.log("Boolean (true):", isTrue);
console.log("Boolean (false):", isFalse);

// Null: Represents an intentional absence of any value
let nullValue = null;
console.log("Null:", nullValue);

// Undefined: Represents a variable that has been declared but not assigned any value yet
let undefinedValue;
console.log("Undefined:", undefinedValue);

// Object: Represents a collection of key-value pairs
let obj = { key: "value" };
console.log("Object:", obj);

// Symbol: Represents a unique identifier
let sym = Symbol("symbol");
console.log("Symbol:", sym);

// BigInt: Represents arbitrarily large integers
let bigIntNum = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigIntNum);

// Special values
let nanValue = NaN; // Not-a-Number
let infinityValue = Infinity; // Positive infinity
let negativeInfinityValue = -Infinity; // Negative infinity
console.log("NaN:", nanValue);
console.log("Positive Infinity:", infinityValue);
console.log("Negative Infinity:", negativeInfinityValue);




// Copy Array 
// ... Spread hain
var arr = [12,13,14,15]
var ba = [...ar]