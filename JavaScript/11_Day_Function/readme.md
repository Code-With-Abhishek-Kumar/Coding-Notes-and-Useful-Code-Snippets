
<!-- TOC -->

- [Function](#function)
- [Why we need Function](#why-we-need-function)
- [Parameters and Arguments](#parameters-and-arguments)
    - [Parameter](#parameter)
    - [Arguments:](#arguments)
- [es5 Function](#es5-function)
    - [Function Statement:](#function-statement)
    - [function expressions](#function-expressions)
    - [anonymous function](#anonymous-function)

<!-- /TOC -->
# Function


- A JavaScript function is a block of code designed to perform a particular task.


- A JavaScript function is executed when "something" invokes it (calls it).

- Function ek tarika hai jisse hum code ko organize aur reuse kar sakte hain. Jab hum kisi task ko perform karne ke liye code likhte hain, toh hum us code ko ek function mein daal kar rakh sakte hain Isse humara code compact aur manageable ho jata hai.

- Jab hum ek function ko define karte hain, toh hum us function ko baar-baar call karke us task ko baar-baar execute kar sakte hain, bina pura code dohrane ke. Ye hamari productivity ko bhi badhata hai, kyun ki humein har baar naye code likhne ki zarurat nahi hoti.

- Is tareeke se, function hamare code ko modular banata hai aur hamari coding experience ko enhance karta hai. Hamara code padhne aur samajhne mein bhi aasan ho jata hai, aur hum usmein changgves karne mein bhi suvidha prapt karte hain.

<!--  -->
- JavaScript mein, functions ko "first-class citizens" ke darje diya gaya hai, yaha aap functions ko variables ke roop mein istemal kar sakte hain, unhe dusre functions ke andar pass kar sakte hain, unhe functions se vapas bhi la sakte hain, aur unhe properties aur methods ke roop mein bhi istemal kiya ja sakta hai.

- Iska arth hai ki functions ko ek normal data type ki tarah treat kiya jata hai aur unhe kisi bhi jagah mein istemal kiya ja sakta hai, jaise ki ek variable ya ek object ki property.


```javascript
function functionName() {

}

// call Function

functionName() 
```



# Why we need Function

- To reuse code and to wrap the code which we want to run in future at some point of time .


- Functions are essential in programming for reusability, modularity, and code organization. They enable us to write code once and reuse it multiple times, enhancing efficiency. Functions also simplify code by abstracting implementation details, promoting readability, and encapsulating tasks for better management and scalability.




#  Parameters and Arguments

## Parameter

- Parameters woh variables hote hain jo function declaration mein declare kiye jaate hain. Ye un values ke liye placeholders ka kaam karte hain jo function ko call kiye jaane par di jayengi.

- Jab aap ek function define karte hain, to aap uske parameters ko parentheses ke andar function ke naam ke baad specify karte hain. Ye parameters woh inputs represent karte hain jo function ko praapt honge. Aap zero ya zyada parameters define kar sakte hain.

`Example`

```javascript
function add(a, b) {
    return a + b;
}

```

`In this example:`

- a and b are parameters of the add function.
- They are placeholders for values that will be provided when the function is called.

`How it Works:`

- When you call a function with arguments, the arguments are assigned to the parameters in the order they are listed in the function declaration.

- For example, when you call add(3, 5):

- The value 3 is assigned to the parameter a.

- The value 5 is assigned to the parameter b.

- Inside the function, these parameters are used to perform the computation (return a + b;), and the result is returned.


## Arguments:



- Arguments woh actual values hote hain jo ek function ko call kiye jaate hain. Ye values function declaration mein define kiye gaye parameters ke saath correspond karte hain.

- Jab aap ek function ko call karte hain, to aap har parameter ke liye ek specific value provide karte hain, jo arguments kaha jata hai. Ye arguments variables, literals, expressions, ya phir doosre function calls bhi ho sakte hain.

- Here's an example of calling the `add ` function with arguments:


```javascript
let result = add(3, 5);
console.log(result); // Output: 8

```

`In this example:`

- 3 and 5 are arguments passed to the add function.
They correspond to the parameters a and b defined in the function declaration.

- When the function is called with these arguments, a will be 3 and b will be 5.

`How it Works:`

- When you call a function with arguments, the arguments are assigned to the parameters in the order they are listed in the function declaration.

- For example, when you call add(3, 5):

- The value 3 is assigned to the parameter a.

- The value 5 is assigned to the parameter b.

- Inside the function, these parameters are used to perform the computation (return a + b;), and the result is returned.











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





- es6

- Fat Arrow function
fat arrow function ko 3 type se likh skte hain
-- a) basic fat arrow
-- b) fat arrow with one param
-- c) fat arrow with implicit return


