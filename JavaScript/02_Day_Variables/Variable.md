# JavaScript Variables


- In JavaScript, a variable is a container used to store data or values that can be used and manipulated throughout your code. 

- In JavaScript, when we want to create a storage space for some information, we use something called a "variable." It's like giving a name to a box where we can store different types of things like numbers, words, or lists.


-  Variables ka use data ko store aur manage karne ke liye hota hai. Aap ek variable ko ek container ki tarah soch sakte hain jo ek value ko hold karta hai, aur yeh value various types ki ho sakti hai jaise ki numbers, strings, objects, ya functions.




## Declare a variable

To declare a variable in JavaScript, you can use one of the following keywords: `var`, `let`, or `const`.



1. Using `var`:

-  var keyword ka use hota hai variables ko declare karne ke liye. Jab aap variables ko var keyword se declare karte hai, to unhe function scoped hote hai, jise mean karta hai ki unhe sirf unki declare kiye gaye function mein access kiya jata hai. Agar aap variables ko var keyword se bahar ke bina function mein declare karte hai, to unhe global variables ban jaate hai.


Yahan ek example hai var keyword ka use karke variables ko declare karna:



```JavaScript

function greet() {
  var message = "Hello, world!";
  console.log(message);
}

greet(); // Output: Hello, world!
console.log(message); // Error: message is not defined

```


```JavaScript
var variableName;
````



```` JavaScript

var name1;
var name1 = value1;
var name1 = value1, name2 = value2;
var name1, name2 = value2;
var name1 = value1, name2,nameN = valueN;

console.log(name1)


````




var myVariable;

Using let:

javascript

let myVariable;

Using const:

javascript

const myVariable;


   
- The var keyword was used in all JavaScript code from 1995 to 2015.

- The let and const keywords were added to JavaScript in 2015.

- The var keyword should only be used in code written for older browsers.
  



Here's a basic syntax for declaring a variable in JavaScript:



