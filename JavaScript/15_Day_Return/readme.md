  
  
<!-- TOC -->

- [Return  in Js](#return--in-js)
- [Purpose of the return Statement](#purpose-of-the-return-statement)
- [Implicit Return in JavaScript](#implicit-return-in-javascript)

<!-- /TOC -->
  
  
  
  
  ## Return  in Js
  



- The return statement in JavaScript is used to end the execution of a function and specifies the value to be returned by that function. The return statement stops the execution of a function and returns a value. It’s particularly useful for passing data back to the code that called the function, allowing for dynamic program flow and data processing.


- The return statement stops the execution of a function and returns a value. If the expression is omitted, undefined is returned instead.


- JavaScript main return ek Function k andar use kiya jata hain. Jub hum koi bhi function banate hain toh wo function  phle se Undefined return kr ta hain.




-  Return keyword Function ko ye allow kr ta hain ki hum kisi value ko Output kre ye value kuch bhi ho skta hain jaise ki string number object ya fir array mtlb hum log ye bhi bol skte hain ki return Primitive values(string, number, boolean, etc.) or Object types values(arrays, objects, functions, etc.) ko output kr ne main use kiya jata hain. 
Jub hum kisi function main return keyword ka use kr te hain toh hum koi bhi value ya variable return ya output kr skte hain.


  `Syntax`

````javascript

return expression;

````





- Jub hum kisi function main Return keyword ka use kr te hain wo us function k aage ka code execution ko stop kr deta hain ya rok deta hain.


 -  aise function jis main return keyword ka use na kiya gya ho  to wo function end tak pahuchne par wo implicit taur par undefined return karta hai. hum log ye bhi bol skte hain ki  aisa koi bhi function jo kuch bhi return nhi kr ta ho  toh wo undefined return kr ta hain.













## Purpose of the return Statement

- In JavaScript, functions are created to perform specific tasks or calculations. The return statement defines what value the function will output when it is called. This statement terminates the execution of the function and sends a value back as the result of the function.


- JavaScript mein, functions ek specific task ya calculation ko perform karne ke liye banaye jaate hain. return statement functions ko define karta hai ki wo kis value ko output denge jab unhe call kiya jaata hai. Ye statement function ki execution ko end karta hai aur uss function se ek value ko wapas bhejne ka kaam karta hai.


- ab hum JavaScript mein kisi function se koi value return karte hain, tab woh value function ko call karne par output ki jaye ki 


 `Example`





`````javascript


function addNumbers(a, b) {
    var sum = a + b;
    return sum;
}

var result = addNumbers(3, 5);
console.log(result); // Output will be 8






`````


`In this example:`

- We define a function addNumbers that takes two parameters a and b.

- Inside the function, it calculates the sum of a and b and stores it in the variable sum.

- The function explicitly returns the value of sum using return sum;.

- When we call addNumbers(3, 5), it returns 8.

- The returned value (8) is assigned to the variable result.

- When we log result to the console, it outputs 8.

- yaha pe ek addNumbers name ka function hain jo ki sub variable ko return kr raha hain toh jub bhi ye `addNumbers()` name ka function call hoga toh ye 2 number ka sum return kre ga jaise ki yaha se result main `addNumbers()` function ko store kiya gya hain or usko log kiya gya toh ye 2 number ka sub console pe log (Print ) kre ga.



## Implicit Return in JavaScript



- In JavaScript, when a function does not explicitly return a value using the return keyword, it automatically returns undefined once the function completes its execution. This behavior is known as implicit return.


- Jab bhi aap JavaScript mein ek function define karte hain, to aam taur par us function se ek result ya value expect ki jaati hai ya fir us function se kuch actions kiye jaate hain (jaise console par kuch print karna ya data modify karna) jo ki kisi specific value ko return na karte hain. Agar function mein return statement nahi hota hai, to JavaScript yah maan leta hai ki function ka maksad actions perform karna hai, aur isliye function implicit taur par undefined return karta hai.


`Example of Implicit Return`

````javascript


function greet(name) {
    console.log("Hello, " + name + "!");
    // No return statement
}

var result = greet("Alice");
console.log(result); // Output undefined hoga


````



`Example of Implicit Return in JavaScript Function`

- We have defined a function `greet` that takes a `name` parameter.

- Inside the function, we use `console.log` to print a greeting message to the console.
- There is no `return` statement explicitly defined in the `greet` function.
- When we call `greet("Alice")`, it prints `"Hello, Alice!"` on the console.
- Because the `greet` function does not have an explicit `return` statement, it implicitly returns `undefined`.
- Therefore, the variable `result` is assigned the value returned by `greet("Alice")`, which is `undefined`.
- When we print `result` to the console, the output is `undefined`.

This demonstrates how functions in JavaScript implicitly return `undefined` when no explicit `return` statement is present.
