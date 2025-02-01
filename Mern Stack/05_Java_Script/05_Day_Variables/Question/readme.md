## 1. Js String Related  Questions


### 2.  What is Template literals in JavaScript?

Template Literals are used to Embide variable and Expressions Directly into String. Make the Code More Readable and Flaxible.

### 3. What is Hosting in JavaScript?

When Variable and Function are declared in JavaScript, and moved to the top of their Scope before the code execution. This is called Hosting.


```js
console.log(a); // undefined
var a = 10;
```

- Here the variable a is declared and Moved to the top of its Scope before the code execution. So, it returns undefined. this is called Hosting.


- But in the case of let and const, it returns ReferenceError. Because Let and const are Hoisted in Temporal Dead Zone. It means that they are not executed before the line of code where they are declared. 

```js
console.log(a); // ReferenceError
console.log(b); // ReferenceError

let a = 10;
const b = 20;

```


### 4.  What is Temporal Dead Zone

Temporal Dead Zone is a time between the variable creation and  initialization Of the let and const variable. In this time, the variable is in the Temporal Dead Zone and cannot be accessed.


If you try to access a let or const variable before it has been initialized, JavaScript will throw a ReferenceError because the variable is in the Temporal Dead Zone.

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;

```





## 5. Type of Hosting in JavaScript?

In JavaScript, there are two types of Hosting.


**1) Variable hosting**

- In variable Hosting the variable is moved to the top of its Scope before the code execution.

- When we declare a variable using var keyword and Hosted to the top of its Scope. it returns undefined. While when we use let and const keyword, it returns ReferenceError.

**2 ) function hosting**


In JavaScript, function hoisting allows us to call the function before its declaration. It means that you can call the function before declared in the code.

```js

sayHello(); // This works because the function is hoisted

function sayHello() {
  console.log("Hello, World!");
}

```

- But in the case of Arrow function, it returns ReferenceError.


```js


sayHello(); // ReferenceError: Cannot access 'sayHello' before initialization

const sayHello = () => {
  console.log("Hello, World!");
};

```



### 6. Explain the difference between let, var  and const in JavaScript?


The var is the oldest keyword to declare a variable in JavaScript. It has the Global scoped or function scoped. This means:

- If you create a variable outside of a function, you can use it anywhere in your code.

- If you create a variable inside a function, you can only use it within that function.



- The let keyword is an improved version of the var keyword. It is introduced in the ES6 or EcmaScript 2015. These variables has the block scope. It can’t be accessible outside the particular code block ({block}).

- The variable is only available inside the block {} where you define it.


- The const keyword is used to declare a constant variable. It has the block scope. It can’t be reassigned. It must be initialized at the time of declaration.


-   const is similar to let, but with one big difference: once you assign a value to a const variable, you can’t change it later. Like let, const is block-scoped.


### What is variable shadowing in JavaScript?


Inligal Shadowing



Read More: https://www.geeksforgeeks.org/variable-shadowing-in-javascript/



### Question Related to JavaScript Variable Declaration 


var can be re-declared and updated in the same scope.
let can be updated but not re-declared.
const cannot be re-declared or updated.



```js
const a = 10;
a = 20; // Error: Assignment to constant variable.

```


<!-- 
https://www.hellojavascript.info/docs/general-javascript-questions/javascript-fundamentals/data-types -->


## What is the difference between a global and local variable?

A global variable is declared outside of a function and can be accessed anywhere in the code, while a local variable is declared inside a function and can only be accessed within that function.


## What are some excellent rules for variable naming conventions?

- **Use clear and descriptive names**: Choose names that clearly indicate the purpose of the variable, like `userName` or `shoppingCart`. A name should provide an immediate understanding of what data it holds.
  
- **Avoid short or ambiguous names**: Avoid using single letters like `a`, `b`, `c`, or vague names like `data` or `value`. These don't convey meaningful information about the variable’s content or usage and can make code harder to maintain.

- **Be as descriptive and specific as possible**: A good name is one that leaves no room for confusion. For example, using `currentUser` is much more informative than just `user` or `data`.

- **Consistency across the team**: Agree on naming conventions with your team. For instance, if a visitor on a website is referred to as `user`, related variables should be named `currentUser` or `newUser`, rather than something unrelated like `currentVisitor` or `newLadyInRed`.

- **CamelCase convention**: Variable names should always follow the **camelCase** convention, starting with a lowercase letter, and using capital letters for subsequent words (e.g., `userProfile`, `totalAmount`).

- **Nouns for variables, verbs for functions**: To differentiate variables from functions, variables should be named with nouns (e.g., `userAge`, `orderItems`), while functions typically start with verbs (e.g., `getUserInfo()`, `calculateTotal()`).




## In JavaScript, When should a constant be named in all caps?



- In JavaScript, you should name a constant in all caps when the value is not meant to change throughout the program. This helps show that the value is "constant" and should stay the same.


- For example, if you have a constant representing the number of days in a week, you could name it `DAYS_IN_WEEK` to indicate that it should not be modified.






## 6 JavaScript Naming Conventions You Should Follow


Following proper naming conventions in JavaScript is key to writing clean, readable code. However, many developers might struggle with naming conventions. In this article, we’ll explore 10 best practices for naming variables, functions, constants, and other elements in JavaScript.


### 1. **Naming Convention for Variables**


JavaScript variable names are **case-sensitive**, meaning `DogName`, `dogName`, and `DOGNAME` are all treated as different variables. The recommended practice is to use **camelCase** for variable names.

#### Examples:
```javascript
// Bad
var dogname = 'Droopy'; 
var DOGNAME = 'Droopy'; 
// Good
var dogName = 'Droopy';

```


### 2. **Naming Convention for Booleans**


- For boolean variables, use is or has as prefixes to indicate true/false values.


#### Examples:
```javascript

// Bad
var open = true;

// Good
var isOpen = true;

var hasOwner = true;
```

### 3. **Naming Convention for Functions**

Function names should be camelCase and include descriptive verbs to clarify their purpose. For example, use getName() instead of just name() for a function that retrieves a name.


#### Examples:
```javascript

// Bad
function retrieve() {
  // code
}

// Good

function retrieveData() {
  // code
}

function calculateTotal() {
  // code
}
```

### 4. **Naming Convention for Constants**


Constants should be written in uppercase with underscore separation between words. This makes them stand out as non-changing values.


#### Examples:
```javascript

// Bad
const daysInWeek = 7;

// Good
const DAYS_IN_WEEK = 7;

const MAX_ATTEMPTS = 3;
```


### 5. **Naming Convention for Classes**


Class names should be written in **PascalCase** (also known as UpperCamelCase) to distinguish them from regular functions.


#### Examples:
```javascript

// Bad
class animal {
  // code
}

// Good

class Animal {
  // code
}

class UserAccount {
  // code
}
```


### 6. **Naming Convention for Components**

For front-end frameworks like React, components are treated similarly to classes. Use PascalCase for component names to distinguish them from HTML elements.


#### Examples:

```javascript

// Good
function DogCartoon(props) {
  return (
    <div>
      <span>Dog Name: {props.dogName}</span>
      <span>Owner Name: {props.ownerName}</span>
    </div>
  );
}

```




### Can you declare multiple variables on one line?


-  Yes, although the specification does not advise it for readability and consistency reasons. You can declare multiple variables on one line using either 'var', 'let', or 'const' by separating them with commas, but this is not the recommended approach.


````js
// Example: one-line

let user = 'John',
  age = 25,
  message = 'Hello';

// The multiline variant is a bit longer, but easier to read:

let user = 'John';

let age = 25;

let message = 'Hello';


````