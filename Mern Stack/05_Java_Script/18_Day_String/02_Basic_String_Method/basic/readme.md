# Basic String Method

### 1.String()

-  Converts any value to a string.

- JavaScript mein, yeh method kisi bhi value ko string mein convert karta hai.

`Example`

````js
let num = 123;
let str = String(num);  // "123"

````

- Converts numbers, objects, and other data types to strings.

### 2. charAt(index)

- The charAt() method returns the character at a specified index in a string.

-  JavaScript mein, charAt() method ka use karke string mein kisi specified index par character return kiya ja sakta hai.

`Example`

````js
let str = "Hello";
console.log(str.charAt(1));  // Output: "e"
console.log(str.charAt(5));  // Output: ""



````

### 3. charCodeAt(index)

- The charCodeAt() method in JavaScript is used to get the Unicode code point (a number) of the character at a specified position in a string. 

- Yeh existing strings ko change nahi karta aur ek nayi string return karta hai.

- This method returns the character's Unicode code point value in decimal form.

-  JavaScript mein, yeh method character ka Unicode code point value decimal form mein return karta hai.

`Example`

````js
const sentence = 'Ahe quick brown fox jumps over the lazy dog.';
const index = 0;

console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`,
);

````

- The letter "A" has the Unicode code point U+0041 in hexadecimal, which is 65 in decimal.

**Unicode and charCodeAt():**

- Unicode assigns a unique number to each character, and for the letter "A", that number is 65. This is why when you run the code with index = 0, you get 65.

- The function sentence.charAt(index) simply returns the character at the specified index (in this case, index 0), which is "A".

**Why does this happen?**

- The character "A" has a Unicode code point of 65, which means the decimal value for "A" is 65.

- When you run the code, at index = 0, it checks the first character of the string "Ahe quick brown fox jumps over the lazy dog.", which is "A".

- So, sentence.charCodeAt(0) returns 65, and sentence.charAt(0) returns "A".


### 4. concat()

- The concat() method joins two or more strings and returns a new string.

- JavaScript mein, concat() method do ya zyada strings ko join karke ek nayi string return karta hai.

- It does not change the existing strings and returns a new string. 

-  Yeh existing strings ko change nahi karta aur ek nayi string return karta hai.

````js
let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2));  // "Hello World"

````

### 5. length

- The length property returns the number of characters in a string.

- JavaScript mein, length property string mein characters ki sankhya return karti hai.



````js

let name = "Abhishek"
console.log(name.length) // 8


````

### 6. toUpperCase()

- The toUpperCase() method converts all characters in a string to uppercase.

-  JavaScript mein, toUpperCase() method ka use karke string ke sabhi characters ko uppercase mein convert kiya ja sakta hai.



````js
let str = "hello";
console.log(str.toUpperCase());  // "HELLO"


````

### 7. toLowerCase()

-  toLowerCase() method converts all characters in a string to lowercase.

-  JavaScript mein, toLowerCase() method ka use karke string ke sabhi characters ko lowercase mein convert kiya ja sakta hai.

- When you need all letters to be lowercase.

- Jab aapko sabhi letters ko lowercase mein convert karna ho.

````js

let str = "HELLO";
console.log(str.toLowerCase());  // "hello"


````

### 8. split()





- The split() method splits a string into an array of substrings based on a specified separator.

- Yeh split() method JavaScript mein ek string ko array mein todta hai, jahan pe aap ek separator specify karte ho, jo ek character, word, ya pattern ho sakta hai. Separator yeh decide karta hai ki string kis jagah pe split hogi. Fir yeh ek array return karta hai, jo aapko original string ke parts ko asaani se manipulate karne mein madad karta hai.



````js
let name = "https://www.instagram.com/abhishek_gupta.ig/";
let separate_array = name.split('/');
console.log(separate_array)
console.log(separate_array[separate_array.length - 2]); // "abhishek_gupta.ig"

````

### 7. trim()

- The trim() method removes whitespace from both sides of a string:

- - JavaScript mein, trim() method string ke dono sides se whitespace remove karta hai:

````js
let text1 = "      Hello World!      ";
let text2 = text1.trim();

console.log(text2) // "Hello World!"

````

### 8. trimStart()

- The trimStart() method works like trim(), but removes whitespace only from the start of a string.

-  JavaScript mein, trimStart() method trim() ki tarah kaam karta hai, lekin yeh sirf string ke start se whitespace remove karta hai.

````js
let text1 = "     Hello World!     ";
console.log(text1.trimStart())

````



### 9. String [] (Array-like indexing)

- Strings can also be treated like an array. You can access a character using bracket notation [].

-  Strings ko array ki tarah treat kiya ja sakta hai. Aap bracket notation [] ka use karke kisi character ko access kar sakte hain.

````js

let str = "Hello";
console.log(str[1]);  // Output: "e"
console.log(str[5]);  // Output: undefined (index is out of range)

````

### 10. slice()

- This method cuts a part of the string and returns a new string. You provide two positions: the starting position and the ending position.

- - JavaScript mein, yeh method string ka ek hissa cut karke ek nayi string return karta hai. Aap do positions provide karte hain: starting position aur ending position.

````js
let str = "Hello, World!";
// console.log(str.slice(starting position, ending position));
console.log(str.slice(0, 5));  // Output: "Hello"
console.log(str.slice(7));     // Output: "World!"

````

`slice(0, 5)` gets the part of the string starting at position 0 and ending before position 5.

`slice(7)` gets the part of the string starting from position 7 to the end.

### 11. includes()

- The includes() method checks if a substring is present within the string and returns true or false.

-  JavaScript mein, includes() method ka use karke yeh check kiya ja sakta hai ki ek substring string ke andar present hai ya nahi, aur yeh true ya false return karta hai.

````js

let str = "JavaScript";
let contains = str.includes("Script"); // Returns true
console.log(contains);


````

### 12. isEmpty()



- The isEmpty() method checks whether a string is empty or not.

- JavaScript mein, isEmpty() method ka use karke yeh check kiya ja sakta hai ki string empty hai ya nahi.

````js

let str = "";
let isEmpty = str === ""; // Returns true
console.log(isEmpty);


````

### 13. replace()

-  The replace() method replaces a specified substring or pattern with a new substring.

- JavaScript mein, replace() method ka use karke kisi specified substring ya pattern ko naye substring se replace kiya ja sakta hai.

````js
let str = "JavaScript";
let newStr = str.replace("Script", "Scripting"); // "JavaScripting"
console.log(newStr);
````


### 14. replaceAll()

- The replaceAll() method in JavaScript is used to replace all occurrence of a word or pattern in a string with a new word.

- JavaScript mein, replaceAll() method ka use karke kisi string mein ek word ya pattern ke sabhi occurrences ko naye word se replace kiya ja sakta hai.


-  The replaceAll() method does not change the original string.

- JavaScript mein, replaceAll() method original string ko change nahi karta.

**Syntax**

````js
string.replaceAll(oldValue, newValue);
````

````js

let text = "cat, dog, cat, mouse";
let newText = text.replaceAll("cat", "rabbit");

console.log(newText);  // "rabbit, dog, rabbit, mouse"

````

### 15. indexOf()


- The indexOf() method in JavaScript is used to find the index of the specified value within a string or an array. If the value is not found, it returns -1.

- - JavaScript mein, indexOf() method ka use karke kisi specified value ka index string ya array mein dhundha ja sakta hai. Agar value nahi milti, toh yeh -1 return karta hai.

````JavaScript
let str = "Hello world, welcome to the universe.";
let index = str.indexOf("welcome"); // Returns 13
let notFound = str.indexOf("goodbye"); // Returns -1
let fromIndexExample = str.indexOf("o", 5); // Returns 7 (search starts at index 5)
````

### 16. lastIndexOf()


- In JavaScript, the lastIndexOf() method is used to find the last occurrence of a specified element in an array or string. It returns the index of the last occurrence, or -1 if the element is not found.

- JavaScript mein, lastIndexOf() method ka use karke kisi specified element ka last occurrence array ya string mein dhundha ja sakta hai. Yeh method last occurrence ka index return karta hai, ya phir -1 agar element nahi milta.


````JavaScript

let str = "Hello World!";

console.log(str.lastIndexOf("o")); // Output: 7 (last 'o' occurs at index 7)
console.log(str.lastIndexOf("o", 5)); // Output: 4 (search from index 5, finds 'o' at index 4)
console.log(str.lastIndexOf("z")); // Output: -1 ('z' is not found)


````


### 17. padStart()

- The padStart() method is used to add extra characters to the beginning of a string until the string reaches a specific length.

- JavaScript mein, padStart() method ka use karke current string ko ek aur string (zarurat padne par repeat karke) se pad kiya ja sakta hai jab tak resulting string given length tak nahi pahunchti. Padding current string ke start (left) se apply hoti hai.


````js
let str = "5";
console.log(str.padStart(2, "0")); // Output: "05"

let str2 = "Hello";
console.log(str2.padStart(10, "123")); // Output: "12312Hello" (pads "12312" to the start)

let word = "abc";
console.log(word.padStart(6, "*")); // Output: "***abc"


````


### 18. padEnd()

- The padEnd() method in JavaScript is used to add characters to the end of a string until it reaches a specific length.

````js
let str = "5";
console.log(str.padEnd(2, "0")); // Output: "50"

let str2 = "Hello";
console.log(str2.padEnd(10, "123")); // Output: "Hello12312" (pads "12312" to the end)

let word = "abc";
console.log(word.padEnd(6, "*")); // Output: "abc***"
````

### 19. startsWith()

- The startsWith() method checks if a string starts with a specified substring and returns true or false.

- JavaScript mein, startsWith() method ka use karke yeh check kiya ja sakta hai ki string ek specified substring se start hoti hai ya nahi, aur yeh true ya false return karta hai.

**Example**

````JavaScript
let str = "Hello world";
console.log(str.startsWith("Hello")); // Output: true
console.log(str.startsWith("world")); // Output: false

````


### 20. endsWith()


- The endsWith() method checks if a string ends with a specified substring and returns true or false.

- JavaScript mein, endsWith() method ka use karke yeh check kiya ja sakta hai ki string ek specified substring se end hoti hai ya nahi, aur yeh true ya false return karta hai.


````js

let str = "Hello world";
console.log(str.endsWith("world")); // Output: true
console.log(str.endsWith("Hello")); // Output: false

````

### 21. repeat()

- The repeat() method in JavaScript is used to repeat a string a specified number of times and return a new string.

- JavaScript mein, repeat() method ka use karke ek nayi string construct ki ja sakti hai jo specified number of copies contain karti hai us string ki jispar yeh call kiya gaya, concatenate karke.


````js

let word = "hello";
console.log(word.repeat(3)); // Output: "hellohellohello"


````

### 22. slice()

- The slice() method in JavaScript is used to extract a part of a string or array and return a new string or array without modifying the original.

- JavaScript mein, slice() method ka use karke string ya array ka ek hissa extract kiya ja sakta hai aur ek nayi string ya array return ki ja sakti hai bina original ko modify kiye.


````js
string.slice(startIndex, endIndex)
````

**Example**


````js
let str = "Hello World";
console.log(str.slice(0, 5)); // Output: "Hello"

````