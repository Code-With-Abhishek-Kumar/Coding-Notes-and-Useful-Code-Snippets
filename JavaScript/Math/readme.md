# The `Math` Object in JavaScript

- JavaScript provides a built-in `Math` object that contains a collection of static methods for performing mathematical operations. These methods are useful for a wide range of tasks, such as generating random numbers, rounding values, and performing calculations on angles, trigonometry, and more.

- JavaScript mein ek built-in Math object hota hai jo kaafi useful mathematical operations perform karne ke liye hota hai. Ismein aapko kai tareeke milte hain jinke through aap numbers ko manipulate kar sakte ho, jaise random number generation, rounding, aur trigonometry ke operations.



- The `Math` object does not require creating an instance (you don’t need to use `new Math()`), and you can simply use its methods directly.

- `Math` object ko use karte waqt humein new Math() ki zarurat nahi hoti, bas aap direct Math. ke baad method ka naam likh kar use kar sakte ho.



## 1. Math.random() — Generating Random Numbers


The Math.random() method is used to generate a random floating-point number between 0 (inclusive) and 1 (exclusive). This means that Math.random() can return any decimal number between 0 (inclusive) and 1 (exclusive), such as 0.372, 0.849, or 0.014.

- `Math.random()` ek built-in function hai jo ek random floating-point number generate karta hai jo 0 (inclusive) se lekar 1 (exclusive) tak hota hai. Matlab, yeh kabhi bhi 0 ya 1 nahi return karega, lekin 0 se 1 ke beech ka koi bhi decimal number return karega.

````js
 Math.random();  // Example output: 0.6498312119096221
````

### Common Use Case:

- Generate a random number within a range: Often, you need to generate a random number between a certain range, like from 0 to 100. You can use Math.random() and scale it by multiplying it by the desired range.

#### Example (random number between 0 and 100):

```js
let randomNumber = Math.random() * 100;  // Could return something like 56.67
```

#### Example (random integer between 0 and 99):

```js
let randomInteger = Math.floor(Math.random() * 100);  // Could return something like 56

```

## 2. Math.floor() — Rounding Down

- `Math.floor()` ek method hai jo number ko neeche ki taraf round kar deta hai, matlab jo bhi decimal part hoga, usse ignore kar deta hai aur nearest lower integer return karta hai.

- Math.floor() is a method that rounds a number down to the nearest integer (whole number), toward negative infinity. This means that no matter how small the decimal part is, it will always round down.

````js
Math.floor(4.9);  // Output: 4
Math.floor(4.1);  // Output: 4
Math.floor(-4.9); // Output: -5
Math.floor(-4.1); // Output: -5
````

- Example (random number ko round down karna):

````js
let randomInt = Math.floor(Math.random() * 6);  // Example output: 3

````

## 3. Math.ceil() — Rounding Up

- Math.ceil() method number ko upar ki taraf round kar deta hai. Matlab agar decimal part thoda bhi ho, toh yeh number ko next integer ke taraf round kar dega.

- Math.ceil() is the opposite of Math.floor(). It rounds a number up to the nearest integer, no matter how small the decimal part is.

````js
Math.ceil(4.1);  // Output: 5
Math.ceil(4.9);  // Output: 5
Math.ceil(-4.1); // Output: -4
Math.ceil(-4.9); // Output: -4


````

Aap Math.ceil() tab use karte ho jab aapko number ko round up karna ho.

## 4. Math.round() — Nearest Integer Tak Round Karna

- `Math.round()` method ek number ko nearest integer tak round karta hai. Agar decimal part 0.5 ya usse zyada hai toh yeh round up karta hai, aur agar decimal part 0.5 se kam hai toh yeh round down karta hai.

- `Math.round()` rounds a number to the nearest integer. If the decimal part is 0.5 or greater, it rounds up; if it’s less than 0.5, it rounds down.

````js
Math.round(4.4);  // Output: 4
Math.round(4.5);  // Output: 5
Math.round(4.6);  // Output: 5
Math.round(-4.5); // Output: -4
Math.round(-4.6); // Output: -5

````


## 5. Math.max() aur Math.min() — Largest aur Smallest Number

- Math.max() method sabse bada number return karta hai jo aapne arguments mein diye hote hain.
- Math.max() returns the largest of the zero or more numbers passed as arguments.
- Math.min() method sabse chhota number return karta hai.
- Math.min() returns the smallest of the zero or more numbers passed as arguments.


````js
Math.max(3, 1, 7, 5);  // Output: 7
Math.min(3, 1, 7, 5);  // Output: 1

````


## 6. Math.pow() — Exponentiation (Power)

- Math.pow(x, y) method x ko y tak raise karta hai. Matlab x^y. 
- Math.pow(x, y) returns the value of x raised to the power of y (i.e., x^y).

````js
Math.pow(2, 3);  // Output: 8 (2 raised to the power 3)
Math.pow(5, 2);  // Output: 25 (5 raised to the power 2)


````

## 7. Math.sqrt() — Square Root

- Math.sqrt(x) method x ka square root return karta hai.
- Math.sqrt(x) returns the square root of x. It’s the inverse of squaring a number (or raising it to the power of 0.5).

````js
Math.sqrt(9);  // Output: 3
Math.sqrt(16); // Output: 4


````

## 8. Math.abs() — Absolute Value

- Math.abs(x) method x ka absolute value return karta hai. Matlab agar negative number hai, toh yeh usse positive bana deta hai.

- Math.abs(x) returns the absolute value of a number. This means it removes any negative sign, turning negative numbers into positive numbers.

````js
Math.abs(-5);  // Output: 5
Math.abs(5);   // Output: 5

````


## 9. Math.PI — Pi ki Value

- Math.PI ek constant hai jo π (Pi) ki value deta hai, jo approximately 3.14159 hoti hai.

- Math.PI returns the value of π (Pi), which is approximately 3.14159. Pi is a mathematical constant used for calculations involving circles and angles.

````js
Math.PI;  // Output: 3.141592653589793


````

## 10. Math.sin(), Math.cos(), aur Math.tan() — Trigonometric Functions


JavaScript ke Math object mein kuch trigonometric functions bhi hain jo geometry aur physics mein kaafi useful hote hain.

JavaScript's Math object also has methods for common trigonometric functions, which are useful in geometry, physics, and other fields involving angles.


- `Math.sin()`: Ek angle ka sine return karta hai (angle radians mein hona chahiye).
 `Math.sin():` Returns the sine of an angle (in radians).
- `Math.cos()`: Ek angle ka cosine return karta hai (angle radians mein hona chahiye).
- `Math.cos():` Returns the cosine of an angle (in radians).
- `Math.tan()`: Ek angle ka tangent return karta hai (angle radians mein hona chahiye).
- `Math.tan():` Returns the tangent of an angle (in radians).

````js
Math.sin(Math.PI / 2);  // Output: 1 (Sine of 90 degrees)
Math.cos(Math.PI);      // Output: -1 (Cosine of 180 degrees)
Math.tan(Math.PI / 4);  // Output: 1 (Tangent of 45 degrees)


````