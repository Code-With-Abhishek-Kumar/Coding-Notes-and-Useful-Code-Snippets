## Js String Related  Questions


### What is Template literals in JavaScript?

Template Literals are used to Embide variable and Expressions Directly into String. Make the Code More Readable and Flaxible.

### What is Hosting in JavaScript?

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


### What is Temporal Dead Zone

Temporal Dead Zone is a time between the variable creation and  initialization Of the let and const variable. In this time, the variable is in the Temporal Dead Zone and cannot be accessed.


If you try to access a let or const variable before it has been initialized, JavaScript will throw a ReferenceError because the variable is in the Temporal Dead Zone.

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;

```





## Type of Hosting in JavaScript?

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



Explain the difference between let, var  and const in JavaScript?




What is variable shadowing in JavaScript?


Inligal Shadowing



Read More: https://www.geeksforgeeks.org/variable-shadowing-in-javascript/


What is the difference between null and undefined in JavaScript?


What is the difference between null and undefined in JavaScript?


What is the difference between let and const in JavaScript?


Question Related to JavaScript Variable Declaration 


var can be re-declared and updated in the same scope.
let can be updated but not re-declared.
const cannot be re-declared or updated.




What is the difference between NaN and Infinity in JavaScript?


Desclaration Without Initialization

Re-Inilization

const a = 10;
a = 20; // Error: Assignment to constant variable.




<!-- 
https://www.hellojavascript.info/docs/general-javascript-questions/javascript-fundamentals/data-types -->