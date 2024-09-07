/* ------------------------ js official documataction link ----------------------- */
/* -----------------  https://262.ecma-international.org/ ----------------- */


/* -------------------------------------------------------------------------- */


"use strict"  // ------------------- treat all Js code as newer version -------------------

/* ------- Number: Represents both integer and floating-point numbers ------- */
console.log('_____________________Number _______________________________')
let num = 5;
let floatNum = 3.14;
console.log("Number:", num);
console.log("Floating-point Number:", floatNum);

/* ------String: Represents a sequence of characters enclosed in single or double quotes ---------- */
console.log('_____________________String _______________________________')
let str1 = "Hello";        // Using double quotes:
console.log("print str1 Variable :-", str1);
console.log('find Typeof str1 variable :-' , typeof str1); // find type of str1 variable
let str2 = 'Volvo XC60';   // Using single quotes:
console.log("print str2 Variable :-", str2);
console.log('find Typeof str1 variable :-' , typeof str1); // find type of str2 variable



// Boolean: Represents a logical value, either true or false
console.log('_____________________ Boolean _______________________________')
let isTrue = true;
let isFalse = false;
console.log("print isTrue variable", isTrue);
console.log("type of isTrue Variable:", typeof(isTrue));
console.log("print isFalse variable", isFalse);
console.log("type of isFalse Variable:", typeof(isTrue));

console.log('_____________________ null _______________________________')
// Null: Represents an intentional absence of any value
let nullValue = null;
console.log("Null:", nullValue);


console.log('_____________________ Undefined_______________________________')
// Undefined: Represents a variable that has been declared but not assigned any value yet
let undefinedValue;
console.log("Undefined:", undefinedValue);



console.log('_____________________ Object_______________________________')
// Object: Represents a collection of key-value pairs
let obj = { key: "value" };
console.log("Object:", obj);


console.log('_____________________ Symbol_______________________________')
// Symbol: Represents a unique identifier
let sym = Symbol("symbol");
console.log("Symbol:", sym);



console.log('_____________________ BigInt_______________________________')
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




