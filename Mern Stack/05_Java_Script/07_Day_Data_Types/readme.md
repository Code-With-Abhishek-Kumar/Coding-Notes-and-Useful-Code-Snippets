

- [Data Type in js](#data-type-in-js)
    - [JavaScript has 8 Datatypes](#javascript-has-8-datatypes)
    - [Primitive Data Types](#primitive-data-types)
    - [Non-Primitive Data Types](#non-primitive-data-types)
    - [typeof in js](#typeof-in-js)



- JavaScript Data Types - [`float` , `number` , `string` , `boolean` , `null` , `array` , `object` , `Symbol` , `Undefined` ]
- Some Important Values - [`undefined` , `null` , `NaN` , `Infinity` ]
- Relative and Primitive Data Type in JavaScript



# Data Type in js

- In JavaScript, a data type is  value That variable can hold.




Data types matlab data ka roop hum log code main kai type k data shore kr te hain jaise ki string `Abhisek` , Number `5` , float `12.5` , boolean `true` toh es ko hum log bol te 





There are two types of data types in JavaScript:

1. Primitive Data Types
2. Non-Primitive Data Types



## Primitive Data Types

- Primitive Data Types are basic data types provided by JavaScript. They are built-in and come ready to use.

1. **Number**: Numbers in JavaScript are stored as double-precision 64-bit binary format IEEE 754. You don't need to specify whether it's an integer or decimal.

```javascript

let num1 = 10;       // Integer
let num2 = 3.14;     // Float (Decimal)
let num3 = -5;       // Negative Integer


```

2. **String**: Strings are like sentences. They're made up of characters, such as letters, numbers, or symbols. For example, "Hello World" is a string.

```javascript

let str1 = "Hello";                  // Single quotes
let str2 = 'JavaScript';             // Double quotes
let str3 = `Welcome to ${str1}`;     // Template literals


```


3. **Boolean**: Booleans represent logical values - they can be either true or false.

```javascript

let isTrue = true;
let isFalse = false;


```


4. **Null**: Null is a special value that represents the absence of any value. It's like an empty container.


```javascript

let nullValue = null;


```



5. **Undefined**: If a variable is declared but not assigned a value, it's undefined. It means the variable exists, but it doesn't have a value yet.

```javascript

let undefinedValue;


```

6. **Symbol**: Symbols are unique identifiers. They're used to create unique property keys for objects, preventing key conflicts.

```javascript
let sym1 = Symbol("key1");
let sym2 = Symbol("key2");



```

7. **BigInt**: BigInt is a special object in JavaScript for representing very large whole numbers. It's useful when numbers exceed the typical limit.

```javascript
let bigIntNum = 1234567890123456789012345678901234567890n;


```





## Non-Primitive Data Types


- Non-primitive data types in JavaScript are a bit more complicated than primitive ones. They don't just store single values; they can store collections of values or objects.

` Object:` Think of objects as containers holding multiple pieces of information, like a person's name, age, and city.

````javascript
let person = { name: "John", age: 30, city: "New York" };

````

Array: Arrays are like lists where you can put many things together, like a list of numbers or a list of fruits.

````javascript
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];

````






Function: Functions are like recipes. You can create them to do a specific task, and then you can use them whenever you need to.


````javascript

function greet(name) {
  console.log("Hello, " + name + "!");
}

````






Date: Date objects help you deal with dates and times. For example, you can find out what day it is today or calculate how many days there are between two dates.



````javascript

let today = new Date();
console.log(today);

````






RegExp (Regular Expression): Regular expressions are like special codes that help you find and manipulate words or patterns in text.

```javascript


let regex = /hello/;

````





## typeof in js



- In JavaScript, typeof is like a detective tool that helps you figure out what type of data something is. It tells you whether something is a number, a string, a function, and so on.


- typeof JavaScript mein ek operator hai jo ek operand (ya value) ka data type jaanchne ke liye istemal hota hai. Yeh operator aapko yeh batata hai ki kisi value ka data type kya hai. Isse aap apne code mein data ka prakar pata kar sakte hain aur uske anusaar us par kuch actions le sakte hain.

For example:

````javascript



console.log(typeof 42);           // Outputs: "number"
console.log(typeof "Hello");      // Outputs: "string"
console.log(typeof true);         // Outputs: "boolean"
console.log(typeof undefined);    // Outputs: "undefined"
console.log(typeof null);         // Outputs: "object" (a known quirk in JavaScript)


````
