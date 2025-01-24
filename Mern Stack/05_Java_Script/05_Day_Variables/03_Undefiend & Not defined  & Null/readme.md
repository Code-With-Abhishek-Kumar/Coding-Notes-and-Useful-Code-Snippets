# What is "undefined"?


- In JavaScript, "undefined" is a primitive value automatically assigned to variables that have been declared but have not been initialized with a value. It also represents the value returned by functions that do not explicitly return anything. Essentially, it denotes the absence of a meaningful value.



- JavaScript mein "undefined" ek primitive value hai jo un variables ko automatically assign hota hai jo declare kiye gaye hain par unhe koi value assign nahi ki gayi hai. Jab bhi aap ek variable declare karte hain par usme koi value nahi dete, to JavaScript apne aap us variable ko "undefined" value se initialize kar deta hai. Iska matlab hai ki us variable ya function mein koi meaningful value nahi hoti hai.


- Yeh ek common concept hai JavaScript programming mein, jismein variables ko declare kiya jata hai lekin unhe later mein values assign ki jaati hai. Agar aap kisi variable ko declare karte hain par usme koi value assign nahi karte, to jab aap us variable ko use karne ki koshish karenge, to woh "undefined" return karega


`Example`
`````javascript
let x;
console.log(x); // Output: undefined

function doSomething() {
    // Kuch bhi return nahi kiya gaya
}
console.log(doSomething()); // Output: undefined

`````


- Yeh concept samajhne se aapko yeh pata chalta hai ki jab kisi variable ya function mein "undefined" return hota hai, to iska matlab hai ki usme koi specific value nahi hai ya phir value abhi assign nahi ki gayi hai. Aur is tarah se aap apne JavaScript code ko effectively handle kar sakte hain, errors ko avoid karke.



# Not defined


-  In JavaScript, "Not Defined" means that you're trying to use a variable, function, or object property that hasn't been declared or created in your code. This causes an error called ReferenceError. Essentially, JavaScript doesn't know what you're referring to because it doesn't recognize the identifier you're using.


- "Not defined" ek error hai JavaScript mein jo tab hota hai jab hum kisi variable, function ya object property ko use karne ki koshish karte hain jo ki code mein declare nahi kiya gaya hai. Is situation mein JavaScript ek ReferenceError throw karta hai.

- Iska matlab hai ki jab aap kisi variable ka istemal karne ki koshish karte hain jo ki aapne pehle se hi code mein declare nahi kiya hai, to JavaScript use recognize nahi kar pata aur ReferenceError generate ho jata hai. Yeh error aksar typographical mistakes ya variable names ki galat spelling ki wajah se hota hai, jahaan programmer ne sahi variable ka naam likha hi nahi ya fir galat variable ka istemal kiya hai.

- Is tarah se, "not defined" error ka samajhna aur sahi tareeke se handle karna JavaScript programming mein bahut zaroori hai taaki code mein errors kam ho aur application robust aur reliable ban sake.



`````javascript
console.log(foo); // ReferenceError: foo is not defined


function myFunction() {
    // Kuch code
}
myFunction(); // Function call is fine
anotherFunction(); // ReferenceError: anotherFunction is not defined



`````

# What is null in JavaScript?


