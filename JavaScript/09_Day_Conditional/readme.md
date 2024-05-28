# JavaScript Conditional Operators


- Conditional statements are used to perform different actions based on different conditions.

- JavaScript Conditional statements allow you to execute specific blocks of code based on conditions. If the condition meets then a particular block of action will be executed otherwise it will execute another block of action that satisfies that particular condition.


- JavaScript mein conditional operators ka istemal conditions ko evaluate karne ke liye kiya jata hai. Ye operators true ya false ki conditions ko check karte hain aur uss ke anusaar code ko execute karte hain. 

- JavaScript main Con jab bhi aapko program mein decision lena ho ki aage ka 

- jab bhi aapko program mein decision lena ho , ki aage ka execution kaisa ho toh waha pe if else use hota hain.


- JavaScript mein conditional statements ka istemal alag-alag conditional par alag-alag actions perform karne ke liye kiya jata hai. Ye aapko apne code ka flow control karne mein madad karte hain, jaise agar koi condition puri hoti hai to ek kaam karo, nahi toh dusra kaam karo.




## Type of Conditional Operators


- There are several methods that can be used to perform Conditional Statements in JavaScript.

`if statement:` 

- Executes a block of code if a specified condition is true.

- if main hamesa true ya false aata hain.
`Syntax:`
````javascript
if ( condition ) {
    // If the condition is met, 
    //code  will get executed.
}

````

`else statement:` 

- Executes a block of code if the same condition of the preceding if statement is false.

````javascript
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
````

`else if statement: `

- Adds more conditions to the if statement, allowing for multiple alternative conditions to be tested.

````javascript

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}


````


 
`Nested if else statement: `

- Allow for multiple conditions to be checked in a hierarchical manner.



````javascript

if (condition1) {
    // Code block to execute if condition1 is true
    if (condition2) {
        // Code block to execute if both condition1 and condition2 are true
    } else {
        // Code block to execute if condition1 is true but condition2 is false
    }
} else {
    // Code block to execute if condition1 is false
}


````





## Truthy and falsy

- In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.


-  har value ko true ya false main banaya jaa skta hain , ye depend krta hain ki wo value ka type kya hain , agar wo value , truthy hain to tru banegi and falsy hain toh false baki sub true 

- Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):
````javascript

console.log("Truthy Value")

if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

console.log("Falsy Value")
if (false) {
  // Not reachable
}

if (null) {
  // Not reachable
}

if (undefined) {
  // Not reachable
}

if (0) {
  // Not reachable
}

if (-0) {
  // Not reachable
}

if (0n) {
  // Not reachable
}

if (NaN) {
  // Not reachable
}

if ("") {
  // Not reachable
}
````

