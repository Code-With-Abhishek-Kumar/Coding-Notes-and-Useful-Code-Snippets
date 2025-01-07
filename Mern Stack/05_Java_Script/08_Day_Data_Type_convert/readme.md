# JavaScript Data Type Conversion

## Overview

In JavaScript, **data type conversion** refers to the process of changing a value from one type to another. JavaScript provides ways to convert types explicitly using functions, and it also performs automatic type conversion in certain situations. This guide will help you understand both explicit and implicit type conversion.

## Explicit Type Conversion

**Explicit type conversion** means manually converting a value from one type to another using JavaScript functions.

### String to Number

- **`Number()` Function**: Converts a string to a number. If the string contains non-numeric characters, it returns `NaN` (Not-a-Number).

    ```javascript
    let str = '42';
    let num = Number(str); // Converts '42' to 42
    console.log(num); // Output: 42
    ```

    *Hinglish Explanation:* `Number()` function se hum string ko number me convert kar sakte hain. Agar string mein numeric characters nahi hain, to `NaN` milta hai.

- **`parseInt()` Function**: Converts a string to an integer. It parses the string until it encounters a non-numeric character.

    ```javascript
    let str = '42px';
    let intValue = parseInt(str); // Converts '42px' to 42
    console.log(intValue); // Output: 42
    ```

    *Hinglish Explanation:* `parseInt()` function se string ka integer part convert hota hai. Extra characters ko ignore kar deta hai.

- **`parseFloat()` Function**: Converts a string to a floating-point number. It also parses until it hits a non-numeric character but handles decimal points.

    ```javascript
    let str = '42.5abc';
    let floatValue = parseFloat(str); // Converts '42.5abc' to 42.5
    console.log(floatValue); // Output: 42.5
    ```

    *Hinglish Explanation:* `parseFloat()` function se string ko floating-point number me convert kiya jaata hai, aur decimal points bhi handle hota hai.

### Number to String

- **`String()` Function**: Converts a number to a string.

    ```javascript
    let num = 42;
    let str = String(num); // Converts 42 to '42'
    console.log(str); // Output: '42'
    ```

    *Hinglish Explanation:* `String()` function se number ko string me convert kiya jaata hai.

- **`toString()` Method**: Converts a number to a string. This is a method available on number variables.

    ```javascript
    let num = 42;
    let str = num.toString(); // Converts 42 to '42'
    console.log(str); // Output: '42'
    ```

    *Hinglish Explanation:* `toString()` method bhi number ko string me convert karta hai, aur ye method number ke upar hota hai.

### String to Boolean

- **`Boolean()` Function**: Converts a string to a boolean. Non-empty strings become `true`, and an empty string becomes `false`.

    ```javascript
    let nonEmptyStr = 'Hello';
    let emptyStr = '';
    console.log(Boolean(nonEmptyStr)); // Output: true
    console.log(Boolean(emptyStr)); // Output: false
    ```

    *Hinglish Explanation:* `Boolean()` function se string ko boolean me convert kiya jaata hai. Non-empty string `true` ban jaati hai aur empty string `false` ban jaati hai.

### Boolean to String

- **`String()` Function**: Converts a boolean value to a string.

    ```javascript
    let boolTrue = true;
    let boolFalse = false;
    console.log(String(boolTrue)); // Output: 'true'
    console.log(String(boolFalse)); // Output: 'false'
    ```

    *Hinglish Explanation:* `String()` function se boolean ko string me convert kiya jaata hai.

## Implicit Type Conversion

**Implicit type conversion** happens automatically when JavaScript needs to convert between types in certain contexts.

- **String Concatenation**: When you add a number to a string, JavaScript converts the number to a string and concatenates them.

    ```javascript
    let result = 'The number is ' + 42;
    console.log(result); // Output: 'The number is 42'
    ```

    *Hinglish Explanation:* Jab string ke saath number add karte hain, JavaScript number ko string me convert kar deta hai aur dono ko concatenate kar deta hai.

- **Arithmetic Operations**: Subtracting a string from a number converts the string to a number.

    ```javascript
    let result = 42 - '20';
    console.log(result); // Output: 22
    ```

    *Hinglish Explanation:* Jab number se string ko subtract karte hain, JavaScript string ko number me convert kar deta hai aur phir subtraction karta hai.

- **Unary Plus (`+`) Operator**: This operator is used to convert a string to a number.

    ```javascript
    let str = '42';
    let num = +str;
    console.log(num); // Output: 42
    ```

    *Hinglish Explanation:* Unary plus (`+`) operator se string ko number me convert kar sakte hain.

## Examples

### Single File Example

Create a file named `conversion.js` with the following content:

```javascript
// String to Number
let strToNum = Number('42'); // Converts '42' to 42
console.log('String to Number:', strToNum);

// Number to String
let numToStr = String(42); // Converts 42 to '42'
console.log('Number to String:', numToStr);

// String to Boolean
let strToBool = Boolean('Hello'); // Converts 'Hello' to true
console.log('String to Boolean:', strToBool);

// Boolean to String
let boolToStr = String(true); // Converts true to 'true'
console.log('Boolean to String:', boolToStr);

// Implicit Type Conversion
let implicitConcatenation = 'The number is ' + 42; // Concatenates string and number
console.log('Implicit Concatenation:', implicitConcatenation);

let implicitSubtraction = 42 - '20'; // Converts '20' to 20 and subtracts
console.log('Implicit Subtraction:', implicitSubtraction);

let unaryPlusConversion = +'42'; // Converts '42' to 42
console.log('Unary Plus Conversion:', unaryPlusConversion);

```
# JavaScript Data Type Conversion

## Overview

In JavaScript, **data type conversion** refers to the process of changing a value from one type to another. JavaScript provides ways to convert types explicitly using functions, and it also performs automatic type conversion in certain situations. This guide will help you understand both explicit and implicit type conversion.

## Explicit Type Conversion

**Explicit type conversion** means manually converting a value from one type to another using JavaScript functions.

### String to Number

- **`Number()` Function**: Converts a string to a number. If the string contains non-numeric characters, it returns `NaN` (Not-a-Number).

    ```javascript
    let str = '42';
    let num = Number(str); // Converts '42' to 42
    console.log(num); // Output: 42
    ```

    *Hinglish Explanation:* `Number()` function se hum string ko number me convert kar sakte hain. Agar string mein numeric characters nahi hain, to `NaN` milta hai.

- **`parseInt()` Function**: Converts a string to an integer. It parses the string until it encounters a non-numeric character.

    ```javascript
    let str = '42px';
    let intValue = parseInt(str); // Converts '42px' to 42
    console.log(intValue); // Output: 42
    ```

    *Hinglish Explanation:* `parseInt()` function se string ka integer part convert hota hai. Extra characters ko ignore kar deta hai.

- **`parseFloat()` Function**: Converts a string to a floating-point number. It also parses until it hits a non-numeric character but handles decimal points.

    ```javascript
    let str = '42.5abc';
    let floatValue = parseFloat(str); // Converts '42.5abc' to 42.5
    console.log(floatValue); // Output: 42.5
    ```

    *Hinglish Explanation:* `parseFloat()` function se string ko floating-point number me convert kiya jaata hai, aur decimal points bhi handle hota hai.

### Number to String

- **`String()` Function**: Converts a number to a string.

    ```javascript
    let num = 42;
    let str = String(num); // Converts 42 to '42'
    console.log(str); // Output: '42'
    ```

    *Hinglish Explanation:* `String()` function se number ko string me convert kiya jaata hai.

- **`toString()` Method**: Converts a number to a string. This is a method available on number variables.

    ```javascript
    let num = 42;
    let str = num.toString(); // Converts 42 to '42'
    console.log(str); // Output: '42'
    ```

    *Hinglish Explanation:* `toString()` method bhi number ko string me convert karta hai, aur ye method number ke upar hota hai.

### String to Boolean

- **`Boolean()` Function**: Converts a string to a boolean. Non-empty strings become `true`, and an empty string becomes `false`.

    ```javascript
    let nonEmptyStr = 'Hello';
    let emptyStr = '';
    console.log(Boolean(nonEmptyStr)); // Output: true
    console.log(Boolean(emptyStr)); // Output: false
    ```

    *Hinglish Explanation:* `Boolean()` function se string ko boolean me convert kiya jaata hai. Non-empty string `true` ban jaati hai aur empty string `false` ban jaati hai.

### Boolean to String

- **`String()` Function**: Converts a boolean value to a string.

    ```javascript
    let boolTrue = true;
    let boolFalse = false;
    console.log(String(boolTrue)); // Output: 'true'
    console.log(String(boolFalse)); // Output: 'false'
    ```

    *Hinglish Explanation:* `String()` function se boolean ko string me convert kiya jaata hai.

## Implicit Type Conversion

**Implicit type conversion** happens automatically when JavaScript needs to convert between types in certain contexts.

- **String Concatenation**: When you add a number to a string, JavaScript converts the number to a string and concatenates them.

    ```javascript
    let result = 'The number is ' + 42;
    console.log(result); // Output: 'The number is 42'
    ```

    *Hinglish Explanation:* Jab string ke saath number add karte hain, JavaScript number ko string me convert kar deta hai aur dono ko concatenate kar deta hai.

- **Arithmetic Operations**: Subtracting a string from a number converts the string to a number.

    ```javascript
    let result = 42 - '20';
    console.log(result); // Output: 22
    ```

    *Hinglish Explanation:* Jab number se string ko subtract karte hain, JavaScript string ko number me convert kar deta hai aur phir subtraction karta hai.

- **Unary Plus (`+`) Operator**: This operator is used to convert a string to a number.

    ```javascript
    let str = '42';
    let num = +str;
    console.log(num); // Output: 42
    ```

    *Hinglish Explanation:* Unary plus (`+`) operator se string ko number me convert kar sakte hain.

## Examples

### Single File Example

Create a file named `conversion.js` with the following content:

```javascript
// String to Number
let strToNum = Number('42'); // Converts '42' to 42
console.log('String to Number:', strToNum);

// Number to String
let numToStr = String(42); // Converts 42 to '42'
console.log('Number to String:', numToStr);

// String to Boolean
let strToBool = Boolean('Hello'); // Converts 'Hello' to true
console.log('String to Boolean:', strToBool);

// Boolean to String
let boolToStr = String(true); // Converts true to 'true'
console.log('Boolean to String:', boolToStr);

// Implicit Type Conversion
let implicitConcatenation = 'The number is ' + 42; // Concatenates string and number
console.log('Implicit Concatenation:', implicitConcatenation);

let implicitSubtraction = 42 - '20'; // Converts '20' to 20 and subtracts
console.log('Implicit Subtraction:', implicitSubtraction);

let unaryPlusConversion = +'42'; // Converts '42' to 42
console.log('Unary Plus Conversion:', unaryPlusConversion);


```