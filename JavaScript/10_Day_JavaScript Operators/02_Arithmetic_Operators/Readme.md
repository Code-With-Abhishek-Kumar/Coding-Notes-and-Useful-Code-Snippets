## JavaScript Arithmetic Operators

- Arithmetic operators in JavaScript are used to perform basic mathematical operations like addition, subtraction, multiplication, division, etc., on numeric values (or variables). These operators are commonly used to perform mathematical calculations and are essential for programming tasks that involve numerical data.

- JavaScript mein arithmetic operators ka use basic math operations jaise addition, subtraction, multiplication, etc. karne ke liye hota hai. Ye operators numbers ke saath kaafi important hote hain jab aapko calculation karna ho


### List of JavaScript Arithmetic Operators

#### 1. Addition  (+)

- Adds two values.

- If one of the operands is a string, it will concatenate them.

````js
let sum = 10 + 5; // sum = 15
let greeting = "Hello" + " " + "World"; // greeting = "Hello World"


````

#### 2. Subtraction (-) 

- Subtracts the right operand from the left operand.

````js
let difference = 10 - 5; // difference = 5

````

#### 3. Multiplication (\*)

- Multiplies two values.


````js

let product = 10 * 5; // product = 50

````

#### 4. Division (/)

- Divides the left operand by the right operand.

- If dividing by zero, the result will be Infinity or -Infinity (depending on the sign).


````js
let quotient = 10 / 5; // quotient = 2
let divisionByZero = 10 / 0; // divisionByZero = Infinity

````


#### 5. Modulo (%)

- Returns the remainder of a division operation (remainder after division).

````js
let remainder = 10 % 3; // remainder = 1

````


#### 6. Exponentiation (**)

- Raises the left operand to the power of the right operand.

````js
let power = 2 ** 3; // power = 8 (2^3)


````



#### 7. Increment (++)

- Increases the value of a variable by 1.

- Can be used as pre-increment (++x) or post-increment (x++).


````js
let x = 5;
x++; // x = 6 (post-increment)
++x; // x = 7 (pre-increment)
````


#### 8. Decrement (--)

- Decreases the value of a variable by 1.

- Can be used as pre-decrement (--x) or post-decrement (x--).

````js
let y = 5;
y--; // y = 4 (post-decrement)
--y; // y = 3 (pre-decrement)


````


## How These Operators Work

###  Addition (+):

- If both operands are numbers, it adds them.

- If one operand is a string, it concatenates the operands (string conversion).


````js
let result1 = 5 + 3; // 8
let result2 = '5' + 3; // '53' (string concatenation)


````

###  Subtraction (-):

- Always subtracts the numbers, even when one or both operands are strings (attempts to convert them to numbers).

````js
let result1 = '10' - 5; // 5
let result2 = 'abc' - 5; // NaN (not a number)


````

### Multiplication (*):

- Multiplies the numbers or coerces string values into numbers.

````js
let result1 = '5' * 2; // 10
let result2 = 'abc' * 2; // NaN (not a number)

````

## Division (/):

- Divides the numbers or coerces string values into numbers.


````js

let result1 = '10' / 2; // 5
let result2 = 'abc' / 2; // NaN (not a number)

````


## Modulus (%):

- Finds the remainder when the first operand is divided by the second operand.

````js
let result = 10 % 3; // 1

````


## Exponentiation (**):


- Raises a number to the power of another number.

````js
let result = 3 ** 2; // 9

````

## Increment and Decrement (++, --):

- The post-increment (x++) increases the value but returns the original value.

- The pre-increment (++x) increases the value and then returns the updated value.


````js
let num1 = 5;
let postIncrement = num1++; // postIncrement = 5, num1 = 6
let preIncrement = ++num1; // preIncrement = 7, num1 = 7


````
