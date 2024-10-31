## JavaScript Operators

- javaScript main Operators  ka use kr k hum different    mathematical and logical Operators kr skta hain jese ki operators ka use kr k hum javaScript main  Addition(+) ,  Multiplication(*) aur bhi mathematical operation kr skte hain.

- In JavaScript, operators are symbols that perform operations on variables and values. They allow you to perform arithmetic, comparison, logical, assignment, and other operations. 




At a high level, an expression is a valid unit of code that resolves to a value. There are two types of expressions: those that have side effects (such as assigning values) and those that purely evaluate.

The expression `x = 7` is an example of the first type. This expression uses the = operator to assign the value seven to the variable x. The expression itself evaluates to 7.

The expression `3 + 4` is an example of the second type. This expression uses the + operator to add 3 and 4 together and produces a value, 7. However, if it's not eventually part of a bigger construct (for example, a variable declaration like const z = 3 + 4), its result will be immediately discarded — this is usually a programmer mistake because the evaluation doesn't produce any effects.

As the examples above also illustrate, all complex expressions are joined by operators, such as = and +. In this section, we will introduce the following operators:


### Types of Operators

#### **Arithmetic Operators**


Addition (+): Adds two numbers or concatenates strings.


Addition (+): Do numbers ko jodta hai ya strings ko concatenate karta hai.


```javascript

let sum = 5 + 3; // 8
let greet = "Hello, " + "World!"; // "Hello, World!"

```

#### **Subtraction`(-)`**

- Subtracts the second number from the first.
- Pehle number se dusre number ko ghatata hai.



```javascript


let difference = 10 - 4; // 6

```



#### **Multiplication `(*)`**

- Multiplies two numbers.
-  Do numbers ko multiply karta hai.



```javascript


let product = 7 * 6; // 42


```



#### **Division `(/)`**

- Pehle number ko dusre number se divide karta hai.
- Divides the first number by the second.



```javascript

let quotient = 20 / 4; // 5

```



#### **Modulus `(%)`:** 

- Returns the remainder of division.


- Division ka remainder return karta hai.


````js

let remainder = 10 % 3; // 1
````


### **Assignment Operators**

- These operators are used to assign values to variables.

#### **Simple Assignment `(=)`**


- Assigns the value on the right to the variable on the left.

- Right side ka value left side wale variable ko assign karta hai.

````js
let x = 10; // x is now 10
console.log(`Simple Assignment: x = ${x}`); // Output: x = 10

````




#### **Addition Assignment `(+=)`:**


- Right operand ko left operand se jodta hai aur result ko left operand ko assign karta hai.

- Right side ka value left side wale variable ko assign karta hai.

````js
let x = 10;
x += 5; // x ab 15 hai
console.log(`Addition Assignment: x = ${x}`); // Output: x = 15


````


#### **Subtraction Assignment `(-=)`:**


- Right operand ko left operand se jodta hai aur result ko left operand ko assign karta hai.

- Right side ka value left side wale variable ko assign karta hai.

````js
let x = 10;
x -= 3; // x ab 7 hai
console.log(`Subtraction Assignment: x = ${x}`); // Output: x = 7


````



#### **Multiplication Assignment `(*=)`:**


- Right operand ko left operand se guna karta hai aur result ko left operand ko assign karta hai.


- Left side wale variable ko right side wale value se multiply karke update karta hai.

````js
let x = 10;
x *= 2; // x ab 20 hai
console.log(`Multiplication Assignment: x = ${x}`); // Output: x = 20


````


#### **Division Assignment `(/=)`:**


- Right operand ko left operand se divide karta hai aur result ko left operand ko assign karta hai.

- Left side wale variable ko right side wale value se divide karke update karta hai.

````js
let x = 20;
x /= 4; // x ab 5 hai
console.log(`Division Assignment: x = ${x}`); // Output: x = 5



````

<!--  -->

#### **Modulus Assignment `(%=)`:**


- Right operand se left operand ka modulus nikalta hai aur result ko left operand ko assign karta hai.

- Left side wale variable ko right side wale value se modulus karke update karta hai.

````js
let x = 10;
x %= 3; // x ab 1 hai
console.log(`Modulus Assignment: x = ${x}`); // Output: x = 1


````