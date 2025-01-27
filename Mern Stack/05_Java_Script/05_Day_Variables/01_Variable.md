
<!-- TOC -->

- [JavaScript Variables](#javascript-variables)
    - [Using var:](#using-var)
    - [Using let:](#using-let)
    - [Using const:](#using-const)
- [When to Use var, let, or const?](#when-to-use-var-let-or-const)
    - [Variable naming Rule](#variable-naming-rule)
    - [Declare a variable](#declare-a-variable)
        - [Initializing variables in JavaScript](#initializing-variables-in-javascript)
- [Variable Scope](#variable-scope)
    - [Global Scope](#global-scope)
    - [Local Scope](#local-scope)
    - [Block Scope](#block-scope)
    - [Function Scope](#function-scope)
- [Hoisting in JavaScript: A Detailed Explanation](#hoisting-in-javascript-a-detailed-explanation)
    - [Yahan ek example hai hoisting ke bare mein:](#yahan-ek-example-hai-hoisting-ke-bare-mein)
    - [Variable Hoisting:](#variable-hoisting)
        - [Function Hoisting:](#function-hoisting)
    - [let aur const ke saath Hoisting:](#let-aur-const-ke-saath-hoisting)

<!-- /TOC -->


##  Variable and Constant


- Har Programing Language main data se deal karna hota hain , wo alag alag prakaar ka data ho sakta hain, ab asia data jisse humein deal karna hain  , wo save to krna padega na , to wo data save krne ke liye hume koi saving space chahiye (RAM) jaha par data save ho jaaye and ye save krne ke liye unhe kuchh name bhi dena padega and esi liye hame variable and constant banaane padte hain taaki data save ho jaae and unka koi name bhi ho ta ki hum use baaad main access kr paye,


- JavaScript mein, variables aur constants data store karne ke liye prayukt hote hain. Variables mein data badal sakta hai, jabki constants ki value badal nahi sakti. Dono hi browser ke RAM par chalte hain aur space lete hain. JavaScript engine, jab code execute hota hai, memory allocation manage karta hai. Jab variable ya constant ki zarurat khatam hojati hai, browser ka garbage collector unhe clear karke space free karta hai.



# JavaScript Variables


- JavaScript is a dynamically-typed language, which means you don’t need to declare a variable’s type explicitly. The type of a variable is determined at runtime based on the value assigned to it.


- In JavaScript, Variables is like a Container For Storing Data. We can declare them using var, let, or const. var is function-scoped, while let and const are block-scoped

- In JavaScript, when we want to create a storage space for some information, we use something called a "variable." It's like giving a name to a box where we can store different types of things like numbers, words, or lists.


-  Variables ka use data ko store aur manage karne ke liye hota hai. Aap ek variable ko ek container ki tarah soch sakte hain jo ek value ko hold karta hai, aur yeh value various types ki ho sakti hai jaise ki numbers, strings, objects, ya functions.


<img src="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables/boxes.png">



## Scope in JavaScript

- Scope refers to the visibility of variables. In JavaScript, variables can be declared in different scopes, such as global scope, function scope, or block scope. The scope of a variable determines where it can be accessed from within your code.










##  Using `var`:



In JavaScript, var is a keyword used to declare variables  It works within functions scope or Outside of the function. It is function-scoped, which means that it is only accessible within the function where it is declared. If you declare variables outside of a function using var, they become global variables.



- Var save it self in window object mening that it save itself in global scope.


- var apne aap ko window main  save kr leta hain.

-  `var` keyword ka use hota hai variables ko declare karne ke liye. Jab aap variables ko var keyword se declare karte hai, to Wo function scoped hote hai, jise mean karta hai ki unhe sirf unki declare kiye gaye function mein access kiya jata hai. Agar aap variables ko var keyword se bahar ke bina function mein declare karte hai, to unhe global variables ban jaate hai.

- `Var` statement JavaScript mein ek keyword hai jo variables ko declare karne ke liye istemal hota hai. Ye function-scoped ya globally-scoped variables ko declare kar sakta hai. Function-scoped variables ka matlab hai ki var statement se declare kiya gaya variable usi function ke andar hi accessible hoga, jabki globally-scoped variables ko kisi bhi function ke bahar bhi access kiya ja sakta hai.

`Syntax:-`


```JavaScript

 var variableName = valueOfVar;

```



##  Using `let`:


- The let keyword was introduced in `ES6 (2015) `and allows you to declare variables that are block-scoped. 

- Variables declared with `let` are limited in scope to the block, statement, or expression where they are used.

- When you declare a variable using "let" inside a block (a set of code within curly braces {}), that variable is only accessible within that block or any nested blocks inside it. 

`Syntax:-`

```javascript

let variable_name = value;

```



##  Using `const`:

- JavaScript mein "const" ek tareeka hai variables ko declare karne ka. Yeh value ko badalne ya dobaara assign karne se rokta hai. Yeh sthir sanket jaise π (pi) ke liye upyogi hota hai, lekin objects aur arrays ke properties ko modify karne mein istemal hota hai.

 - The JavaScript const keyword declares variables that cannot be reassigned, preventing their modification. It prohibits redeclaration and provides block scope, introduced in ES2015 (ES6) for defining immutable variables.

 - Variables defined with const cannot be Redeclared

- Variables defined with const cannot be Reassigned

- Variables defined with const have Block Scope

```javascript
const PI = 3.14;
PI = 3; // This will cause an error because you can't reassign a constant variable

```


`Properties:`

1. Cannot be reassigned.
2. It has Block Scope
3. It can be assigned to the variable on the declaration line.
4. It’s a Primitive value.
5. The property of a const object can be changed but it cannot be changed to a reference to the new object
6. The values inside the const array can be changed, it can add new items to const arrays but it cannot reference a new array.
7. Re-declaring of a const variable inside different block scopes is allowed.
8. Cannot be Hoisted.
93. Creates only read-only references to value.


# When to Use var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.


 ## Variable naming Rule

 `Variable Names:`

 - Variable names can contain letters, digits, underscores (_), or dollar signs ($). They must begin with a letter, underscore, or dollar sign.

`Case Sensitivity:`

-  JavaScript is case-sensitive, so myVariable and myvariable would be treated as different variables.

` Reserved Words: `

- You cannot use JavaScript reserved words (like let, const, if, function, etc.) as variable names.

`Meaningful Names: ` 

Choose variable names that are descriptive and meaningful, so it's easier to understand what the variable represents.

- CamelCase: It's a common convention in JavaScript to use camelCase for variable names, starting with a` lowercase letter and capitalizing the first letter of each subsequent word within the name.`

- Constancy: Prefer using const for variables that won't be reassigned, l`et for variables that will be reassigned, and var only when necessary (though var is less commonly used now due to its broader scope).`

- Scope: `Understand the scope of your variables.` Variables declared with let and const have block scope, while variables declared with var have (`function scope or global scope`) if declared outside a function.

- Initialization: `It's good practice to initialize variables when declaring them to avoid unexpected behavior`.


- To use this function, you can call it by its name, followed by the parameters in parentheses:

```JavaScript

let sum = addNumbers(5, 10);
console.log(sum); // Output: 15

````


## Declare a variable

- To declare a variable in JavaScript, you can use one of the following keywords: `var`, `let`, or `const`.




```JavaScript
  $ var VariableName;
```


 ### Initializing variables in JavaScript
 ```javascript
// Initializing a variable with a value
let number = 10;
let name = "John";
let isStudent = true;


 ```

 In this example, we've initialized three variables: number with a value of 10 (which is a number), name with a value of "John" (which is a string), and isStudent with a value of true (which is a boolean).


 # Variable Scope


## Global Scope

- Global variables are those defined outside of any function, making them accessible from anywhere within the script. Regardless of the keyword used for declaration, they all behave similarly and possess a global scope. Even variables declared without a keyword inside a function are considered global.

- JavaScript mein "global variable" ek aesi variable hai jo global scope mein define hoti hai, yaani ki wo kisi bhi function ke bahar declare hoti hai aur uske saare functions aur code ke liye upalabdh hoti hai.


```javascript
let petName = 'Rocky' // Global variable
myFunction()

function myFunction() {
    fruit = 'apple'; // Considered global
    console.log(typeof petName +
        '- ' +
        'My pet name is ' +
        petName)
}

console.log(
    typeof petName +
    '- ' +
    'My pet name is ' +
    petName +
    'Fruit name is ' +
    fruit)

```


` output `
```bash

string- My pet name is Rocky
string- My pet name is RockyFruit name is apple

```

## Local Scope

- When you use JavaScript, local variables are defined within functions in JavaScript. They are confined to the scope of the function that defines them and cannot be accessed from outside. Attempting to access local variables outside their defining function results in an error.


- 
JavaScript mein "local variable" ek aesi variable hoti hai jo kisi specific function ke scope mein define hoti hai, yaani ki wo function ke andar declare hoti hai aur us function ke bahar upalabdh nahi hoti.


```javascript
function testFunction() {
    var localVariable = 20;
    console.log(localVariable); // Output: 20
}

testFunction(); // Calling the function
console.log(localVariable); // Error: localVariable is not defined



```

## Block Scope
 - JavaScript mein "block scope" ek aisi scope hai jahan ek variable ya constant ko uske nearest curly braces {} ke bheetar define kiya gaya hai. Ye variables ya constants sirf un curly braces ke bheetar hi upalabdh hote hain aur unke bahar upalabdh nahi hote hain.

 
- Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.

- ES6 introduced two important new JavaScript keywords: let and const.

- These two keywords provide Block Scope in JavaScript.

- Variables declared inside a { } block cannot be accessed from outside the block:

`let`

````javascript

{
  let x = 2;
}
// x can NOT be used here


````


` var `

-  Variables declared with the var keyword can NOT have block scope.

- Variables declared inside a { } block can be accessed from outside the block.
````javascript
{
  var x = 2;
}
// x CAN be used here

````





` Example 2`
````javascript
 function testFunction() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
        console.log(x); // Output: 10
        console.log(y); // Output: 20
        console.log(z); // Output: 30
    }
    console.log(x); // Output: 10
    console.log(y); // Error: y is not defined
    console.log(z); // Error: z is not defined
}

testFunction(); // Calling the function

````



## Function Scope


- JavaScript has function scope: Each function creates a new scope.

- Variables defined inside a function are not accessible (visible) from outside the function.

- Variables declared with var, let and const are quite similar when declared inside a function.

- They all have Function Scope:

```javascript
function myFunction() {
  var carName = "Volvo";   // Function Scope
}


```



# Hoisting in JavaScript: A Detailed Explanation

In JavaScript, hoisting ek behavior hai jismein variables aur function declarations compile phase mein apne apne respective scopes ke upar move kiye jate hai. Isse mean kaha jata hai ki aap variables aur functions apne code mein declare kiye bina pehle access kar sakte hai, aur JavaScript error nahi throw karegi.


## Yahan ek example hai hoisting ke bare mein:

```JavaScript

x = 5;

console.log(x); // Output: 5

var x;

```


## Variable Hoisting:

 When you declare a variable using var, the declaration is hoisted, but the assignment remains in its original position:
 

```JavaScript
console.log(myVar); // undefined
var myVar = 42;
console.log(myVar); // 42


```


In the first console.log, myVar is recognized but has the value undefined. This is because the declaration var myVar is hoisted to the top, but the assignment of 42 remains in its original place. In the second console.log, myVar has been assigned the value 42.

###  Function Hoisting:
   
Function declarations bhi hoisted hote hain. Aap ek function ko declare hone se pehle bhi call kar sakte hain:

```JavaScript

sayHello(); // Hello, there!

function sayHello() {
  console.log("Hello, there!");
}


```

Is example mein, sayHello() function ko declare hone se pehle hi call kiya gaya hai lekin hoisting ki wajah se ye expected taur par kaam karta hai. Function declaration ko top par move kar diya jaata hai.


##  let aur const ke saath Hoisting:

- let aur const ke saath declare ki gayi variables bhi hoisted hote hain, lekin ek mukhya antar hai. var ke vipreet, inhe hoisting ke dauran initialize nahi kiya jaata hai. 
  
- Agar aap in variables ko declare hone se pehle access karna chahein, toh ye ek ReferenceError dega:
   
```JavaScript
function testFunction() {
    console.log(x); // Output: undefined
    console.log(y); // Error: Cannot access 'y' before initialization
    console.log(z); // Error: Cannot access 'z' before initialization
    
    var x = 10;
    let y = 20;
    const z = 30;
}

testFunction(); // Calling the function
```

