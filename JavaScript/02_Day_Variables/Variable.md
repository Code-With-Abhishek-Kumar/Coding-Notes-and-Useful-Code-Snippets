


# JavaScript Variables


- In JavaScript, a variable is a container used to store data or values that can be used and manipulated throughout your code. 

- In JavaScript, when we want to create a storage space for some information, we use something called a "variable." It's like giving a name to a box where we can store different types of things like numbers, words, or lists.


-  Variables ka use data ko store aur manage karne ke liye hota hai. Aap ek variable ko ek container ki tarah soch sakte hain jo ek value ko hold karta hai, aur yeh value various types ki ho sakti hai jaise ki numbers, strings, objects, ya functions.





1. Using `var`:

-  `var` keyword ka use hota hai variables ko declare karne ke liye. Jab aap variables ko var keyword se declare karte hai, to Wo function scoped hote hai, jise mean karta hai ki unhe sirf unki declare kiye gaye function mein access kiya jata hai. Agar aap variables ko var keyword se bahar ke bina function mein declare karte hai, to unhe global variables ban jaate hai.

- `Var` statement JavaScript mein ek keyword hai jo variables ko declare karne ke liye istemal hota hai. Ye function-scoped ya globally-scoped variables ko declare kar sakta hai. Function-scoped variables ka matlab hai ki var statement se declare kiya gaya variable usi function ke andar hi accessible hoga, jabki globally-scoped variables ko kisi bhi function ke bahar bhi access kiya ja sakta hai.

#### Yahan ek example hai 


```JavaScript

function example() {
    var x = 10;
    console.log(x); // Output: 10
}

console.log(x); // Error: x is not defined


```



- Is example mein, var x = 10; statement se x variable ko function example() ke andar declare kiya gaya hai, isliye yeh function-scoped hai. Is variable ko function ke bahar access nahi kiya ja sakta hai, jaise ki console.log(x); statement mein kiya gaya hai.

- Var statement ko use karke variables ko initialize karna optional hota hai. Agar variable ko initialize nahi kiya gaya hai, toh uski default value undefined hoti hai. Example:


























To use this function, you can call it by its name, followed by the parameters in parentheses:

```JavaScript

let sum = addNumbers(5, 10);
console.log(sum); // Output: 15

````


## Declare a variable

- To declare a variable in JavaScript, you can use one of the following keywords: `var`, `let`, or `const`.




```JavaScript
  $ var VariableName;
```





### When to Use var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.


## Hoisting in JavaScript: A Detailed Explanation

In JavaScript, hoisting ek behavior hai jismein variables aur function declarations compile phase mein apne apne respective scopes ke upar move kiye jate hai. Isse mean kaha jata hai ki aap variables aur functions apne code mein declare kiye bina pehle access kar sakte hai, aur JavaScript error nahi throw karegi.


### Yahan ek example hai hoisting ke bare mein:

```JavaScript

x = 5;

console.log(x); // Output: 5

var x;

```


### Variable Hoisting:

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


###  let aur const ke saath Hoisting:

- let aur const ke saath declare ki gayi variables bhi hoisted hote hain, lekin ek mukhya antar hai. var ke vipreet, inhe hoisting ke dauran initialize nahi kiya jaata hai. 
  
- Agar aap in variables ko declare hone se pehle access karna chahein, toh ye ek ReferenceError dega:
   
```JavaScript
console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 10;

```


### Function Expressions:


Hoisting works differently for function expressions. While the variable declaration is hoisted, the assignment of the function expression is not:

```JavaScript

sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
  console.log("Hi!");
};

```



Here, sayHi is hoisted but assigned undefined initially. Attempting to invoke it before the assignment results in a TypeError.