



### 1. What does the toUpperCase() method do?


- The toUpperCase() method converts all characters in a string to uppercase (capital letters).


````js
let str = "hello";
console.log(str.toUpperCase()); // Output: "HELLO"


````

### 2. How do you check if a string contains a certain substring?

- You can use the includes() method to check if a string contains a specific substring. It returns true if found, and false otherwise.


````js

let str = "hello world";
console.log(str.includes("world")); // Output: true
console.log(str.includes("javascript")); // Output: false

````

### 3. What does the slice() method do?

-  The slice() method extracts a part of a string and returns a new string, without modifying the original string.

````js
let str = "hello world";
console.log(str.slice(0, 5)); // Output: "hello"

````

### 4.  How do you find the position of the first occurrence of a substring?

-  The indexOf() method finds the position of the first occurrence of a specified substring. If the substring is not found, it returns -1.

````js

let str = "hello world";
console.log(str.indexOf("world")); // Output: 6
console.log(str.indexOf("java")); // Output: -1


````

### 5. What is the use of charAt() method?


- The charAt() method returns the character at a specified index in a string.


````js
let str = "hello";
console.log(str.charAt(1)); // Output: "e"


````

### 6. How do you remove whitespace from the beginning and end of a string?


- You can use the trim() method to remove whitespace from both ends of a string.


````js
let str = "  hello  ";
console.log(str.trim()); // Output: "hello"


````

### 7. What does the replace() method do?


- The replace() method replaces a specified substring with another substring in a string.

````js
let str = "hello world";
console.log(str.replace("world", "JavaScript")); // Output: "hello JavaScript"


````

### 8. How do you convert a string to lowercase?

- You can use the toLowerCase() method to convert all characters of a string to lowercase.

````js
let str = "HELLO";
console.log(str.toLowerCase()); // Output: "hello"

````

### 9. How do you split a string into an array based on a delimiter?

- You can use the split() method to split a string into an array using a specified delimiter.

````js

let str = "apple,banana,orange";
let arr = str.split(",");
console.log(arr); // Output: ["apple", "banana", "orange"]

````

### 10. What does the lastIndexOf() method do?

- The lastIndexOf() method returns the position of the last occurrence of a specified substring in a string. If not found, it returns -1.

````js
let str = "hello hello";
console.log(str.lastIndexOf("hello")); // Output: 6


````

### 11. How do you concatenate two or more strings?

- You can use the concat() method or simply use the + operator to concatenate strings.


````js
let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2)); // Output: "Hello World"
console.log(str1 + str2); // Output: "Hello World"


````

### 12.  What does the startsWith() method do?


- The startsWith() method checks if a string starts with a specified substring. It returns true or false.

````js
let str = "hello world";
console.log(str.startsWith("hello")); // Output: true
console.log(str.startsWith("world")); // Output: false

````


### 13. What does the endsWith() method do?

- The endsWith() method checks if a string ends with a specified substring. It returns true or false.

````js
let str = "hello world";
console.log(str.endsWith("world")); // Output: true
console.log(str.endsWith("hello")); // Output: false

````

### 14.  How do you get the length of a string?

- You can use the length property to get the number of characters in a string.

````js

let str = "hello";
console.log(str.length); // Output: 5


````

### 15. What does the repeat() method do?


````js
let str = "hello ";
console.log(str.repeat(3)); // Output: "hello hello hello "

````



1. What happens if you use an index greater than the string length with charAt()?


2. Is concat() more efficient than using the + operator for string concatenation?


3. How would you implement the includes() method manually without using JavaScript's built-in function?


4. Can the length property be used with other data types like arrays? If so, how is it different?


5. What happens if the substring is not found with indexOf()?


6. How would you replace all occurrences of a substring using replace()?


7. How does split() behave if the separator is not found in the string?