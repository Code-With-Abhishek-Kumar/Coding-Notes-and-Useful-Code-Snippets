# Variable Basic to Advance Question

## Basic Level Questions


### Question 1:

-  What is a variable in JavaScript?


`Options:`
- a) A function
- b) A container to store data
- c) A data type



### Question 2:

-  What is a variable in JavaScript?


`Options:`
- a) A function
- b) A container to store data
- c) A data type


### Question 3:


- Which of the following is the correct way to declare a variable in JavaScript?

`Options:`
- a) `variable x = 10;`
- b) `let x = 10;`
- c) `var: x = 10;`


### Question 4:


- What happens if you declare a variable without using var, let, or const?

`Options:`
- a) It becomes a global variable.
- b)  It will throw an error.
- c) It will be undefined.


### Question 5:


- Can you declare a variable without initializing it?

`Options:`
- a) Yes, the variable will be `undefined` by default.
- b)   No, variables must be initialized when declared.
- c)  Yes, but it will throw an error.



### Question 6:


- Which keyword is used to declare a constant in JavaScript?

`Options:`
- a) `constant`
- b)  `const`
- c)  `let`



### Question 7:


- Which of the following can you reassign?



`Options:`
- a) `const`
- b) `let`
- c) Both `let` and `const`



### Question 8:


- Which of the following can you reassign?



`Options:`
- a) `const`
- b) `let`
- c) Both `let` and `const`




## Intermediate-Level Questions

### Question 9:

- What will be the result of the following code?

```js
var x = 10;
if (true) {
  var x = 20;
}
console.log(x);

```

`Options:`
- a) 10
- b) 20
- c) `undefined`



### Question 10:

- What will happen if you try to reassign a const variable?


`Options:`
- a)  It will silently fail.
- b) The reassignment will succeed.
- c) It will throw an error.




### Question 11:

- Which of the following statements is true about the scope of a let variable?


`Options:`
- a)  let is function-scoped.
- b) let is globally-scoped.
- c) let is block-scoped.



### Question 12:

- What will this code output?


```js
let a = 10;
{
  let a = 20;
  console.log(a);  // Inside block
}
console.log(a);  // Outside block



```

`Options:`
- a)  `20 10`
- b) `10 10`
- c) `20 20`




### Question 13:

- What happens when you declare a variable without let, var, or const in strict mode?


`Options:`
- a)   It will create a global variable.
- b)  It will throw an error.
- c) `It will be undefined.`

## Advanced-Level Questions


### Question 14:

- What is hoisting in JavaScript?


`Options:`
- a)  Variables declared with let and const are moved to the top of their scope and initialized to undefined.
- b)  Only function declarations are hoisted.
- c)  Variables declared with var are hoisted and initialized to undefined, while let and const are hoisted but remain uninitialized.



### Question 15:

- What will be the output of this code?

```js

console.log(a);
let a = 5;

```


`Options:`
- a) `undefined`
- b)  `5`
- c)  `ReferenceError`












### Question 16:

- What happens when you try to declare a variable with let or const more than once in the same block?


`Options:`
- a) The second declaration will override the first one.
- b)  It will throw a SyntaxError.
- c)  It will silently fail.


### Question 17:

- What will be the output of this code?

```js

const obj = { name: "John" };
obj.name = "Doe";
console.log(obj.name);



```


`Options:`
- a) John
- b)  Doe
- c)  TypeError

