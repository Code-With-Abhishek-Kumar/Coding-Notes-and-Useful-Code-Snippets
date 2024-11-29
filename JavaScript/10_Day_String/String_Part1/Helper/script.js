
// Example 1: Create a string using regular quotes
let str1 = "Hello, world!";  // Regular string
console.log("String 1:", str1);  // Output: Hello, world!

// Example 2: Create a string using single quotes
let str2 = 'Hello, JavaScript!';  // Using single quotes
console.log("String 2:", str2);  // Output: Hello, JavaScript!

// Example 3: Create a string using backticks
let str3 = `Hello, backticks!`;  // Using backticks
console.log("String 3:", str3);  // Output: Hello, backticks!

// Example 4: Create a string using String() constructor (without 'new')
let num = 100;
let str4 = String(num);  // Convert number to string
console.log("String from Number:", str4);  // Output: "100"

// Example 5: Create a string using 'new String()' (String object)
let strObj = new String("Hello from String object!");  // Creating String object
console.log("String object:", strObj);  // Output: [String: 'Hello from String object!']

// Example 6: Check the type of the string
console.log("Type of str1:", typeof str1);  // Output: "string" (primitive string)
console.log("Type of strObj:", typeof strObj);  // Output: "object" (String object)

// Example 7: Comparing primitive string and String object
let strPrimitive = "Hello";
let strObject = new String("Hello");
console.log("Are they the same?", strPrimitive === strObject);  // Output: false

// Example 8: Using String object with a method (like length)
console.log("Length of String object:", strObj.length);  // Output: 26




























// 

// 
// 
// 




const name = "Abhishek"

console.log(`Hello my name is ${name}`)

const insta_ID = new String('abhishek.ig')
console.log(insta_ID)

// String Method

console.log(insta_ID.__proto__)

console.log(insta_ID.length)
console.log(insta_ID.charAt(2))
console.log(insta_ID.indexOf('h'))



// Past this in Console
// const insta_ID = new String('abhishek.ig')
// console.log(insta_ID)


// trim
const str = "   Hello World   "
console.log(str.trim())

// 
const url = "https://www.google.com"
console.log(url.replace('google', 'bing'))