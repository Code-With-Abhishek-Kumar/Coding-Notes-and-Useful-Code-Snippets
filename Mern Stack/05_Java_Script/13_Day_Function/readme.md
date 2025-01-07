

# es5 Function

1. function statement
2. function expressions
3. anonymous function


##  Function Statement:

```javascript

function functionName(parameters) {
    // Function body
}
```

`Example:-`

````javascript

function greet(name) {
    console.log("Hello, " + name + "!");
} 

````

- In this example, greet("John") is called before function greet(name), but it won't cause an error because the function declaration is hoisted to the top.

 ` How it works `
 
 -  A Function Statement starts with the function keyword, followed by the function name, and then parameters (if any) enclosed in parentheses. To define the function's behavior, you enclose the function body within curly braces {}.


`Use cases`

- Function statements ko aksar reusable code blocks ke liye istemal kiya jaata hai jo program mein kai baar call kiya jaana ho. Ye functions ek spasht aur structured tareeke se functions ko define karne ka tareeka pradaan karte hain.

## function expressions

```javascript
var functionName = function(parameters) {
    // Function body
};
```

`Example:`


```javascript
var greet = function(name) {
    console.log("Hello, " + name + "!");
};
```

- In this example, greet is a variable that holds the function. You can call greet("John") to execute the function.

 ` How it works `
 
 - Function expressions involve defining a function as part of a larger expression, usually as an assignment. These functions can be anonymous (without a name) or named. Function expressions are not hoisted like function statements.




`Use cases`

- Function expressions ka upyog tab kiya jaata hai jab aap ek function ko dynamic taur par assign karna chahte hain ya use kisi aur function ko argument ke roop mein dena hai. Ye functions function definition mein chusti aur laayakpan pradaan karte hain aur aam taur par events handling aur asynchronous programming mein istemal kiya jaata hai.





## anonymous function

```javascript
function(parameters) {
    // Function body
};

```

 

` How it works `
 
 - An anonymous function is a function that doesn't have a name. It's defined using the function keyword followed by parameters and a function body. These functions are often used as function expressions, especially as callbacks in events handling and asynchronous programming.



`Use cases`

- Anonymous functions ka upyog tab kiya jaata hai jab aap ek function ko sirf ek baar ya usko bina naam ke inline define karna chahte hain. Ye functions aksar events handling aur asynchronous programming mein callbacks ke roop mein istemal kiya jaata hai.





`Example:`


```javascript

// Define an asynchronous function
function asyncFunction() {
    console.log("Start of asyncFunction");

    // Simulate an asynchronous operation with setTimeout
    setTimeout(function() {
        console.log("Inside setTimeout callback");
    }, 1000); // Delay of 1000 milliseconds (1 second)

    console.log("End of asyncFunction");
}

// Call the asynchronous function
console.log("Before calling asyncFunction");
asyncFunction();
console.log("After calling asyncFunction");

```

`In this example` 


- asyncFunction ek asynchronous operation ko simulate karne ke liye setTimeout ka upyog karke define ki gayi hai.

- Function ke andar, ek message "Shuruwat of asyncFunction" console mein print hota hai.

- Fir, setTimeout ka upyog 1 second ke delay ke baad ek callback function ko schedule karne ke liye kiya gaya hai.

- setTimeout asyncFunction ke andar call kiya gaya hai, lekin yeh code ke agle hisse ko block nahi karta hai. Isliye, "Ant of asyncFunction" turant setTimeout ko call karne ke baad console mein print hota hai.

- 1 second ke baad, setTimeout ke andar ka callback function execute hota hai, aur "setTimeout callback ke andar" console mein print hota hai.


