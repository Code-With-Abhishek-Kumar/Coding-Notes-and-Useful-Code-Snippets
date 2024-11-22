## Everything About Strings in JavaScript



- Strings in JavaScript ek sequence hote hain characters ka, jo text data ko represent aur manipulate karne ke liye use kiye jaate hain. JavaScript programming mein strings ke saath kaam karna samajhna bohot zaroori hai. Niche, main JavaScript mein strings ke sabhi important aspects ko detail mein explain karunga.

- Strings in JavaScript are sequences of characters used to represent and manipulate text data. Understanding how to work with strings is fundamental in JavaScript programming. Below, I will cover all essential aspects of strings in JavaScript in detail.

# Creating strings




### 1. Single quotes (`'`)

- Single quotes are one of the most common ways to define strings in JavaScript. You can enclose text inside single quotes to create a string.

````js
let singleQuotedString = 'Hello, World!';
console.log(singleQuotedString); // Output: Hello, World!

````

#### Why use single quotes?

- It’s simple and easy to use.

- Ye simple aur easy to use hote hain.




- If your string doesn’t need any special characters like double quotes inside it, single quotes are a good choice.

- Agar aapke string mein double quotes nahi hain, toh single quotes ka use karna achha hai.

#### When to use single quotes:

- Use single quotes when you don’t have double quotes inside the string and you want a clean, simple way to define text.

- Jab aapko koi simple text store karna ho aur string mein koi special characters (jaise double quotes) na ho.


### 2. Double quotes (`"`)

- Strings can also be defined using double quotes. This works the same way as single quotes.

- Double quotes bhi string define karne ka ek tareeka hain, aur yeh single quotes ki tarah kaam karte hain.

````js
let greeting = "Hello, world!";


````


### 3. Backticks `(``)` 

– Backticks (or template literals) are a modern way to define strings in JavaScript. They allow more advanced features like string interpolation (inserting variables inside strings) and multi-line strings.

````js
let greeting = `Hello, world!`;

````

#### Why use backticks?


**String Interpolation:**


- You can easily include variables or expressions inside your strings using `${}`.

- Aap easily variables ya expressions ko string ke andar insert kar sakte hain `${}` ka use karke.

````js
let name = 'John';
let message = `Hello, ${name}!`;  // Outputs: "Hello, John!"


````

**Multi-line Strings:**

- With backticks, you can write strings that span multiple lines without using any special characters.

- Backticks ki madad se aap multi-line strings bina kisi special character ke likh sakte hain.

````js

let multiLineString = `This is a 
multi-line string.`;


````

**When to use backticks:**


- Use backticks when you need to include variables or expressions inside strings.

- Jab aapko variables ya expressions ko string ke andar include karna ho.



- Use backticks when you want a string that spans multiple lines.

- Jab aapko multi-line strings likhni ho.


### 4. `String()` constructor 

#### 1.  Using String() (Without new)

- When you use String() without new, it simply converts other types of data (like numbers, booleans, or objects) into a string (text).

````js
let num = 123;
let str = String(num);  // Converts the number 123 into a string
console.log(str);  // Output: "123"

````

#### 2. Using new String() (With new)

- When you use new String(), you are creating a String object, not just a plain text string. This is different from regular strings and is less common in everyday JavaScript.

````js
let strObject = new String("Hello, world!");  // Creates a String object
console.log(strObject);  // Output: [String: 'Hello, world!']


````

**What happens here?**

- You get a String object. Even though it looks like a string, it’s actually an object.

- The main difference is that a String object can hold extra features (like methods or properties), which a normal string cannot.

````js
let strObject = new String("Hello");
strObject.someProperty = "This is extra!";
console.log(strObject.someProperty);  // Output: "This is extra!"

````


### Key Differences Between String Primitives and String Objects

1. String Primitive: A regular string is just simple text. It's not an object, and it’s what you usually use.

- Example: `let str = "Hello";`
- It’s a primitive value.

2. String Object: A String object created with new String() is an object that behaves like a string but can also hold extra information and properties.

- Example: `let strObject = new String("Hello");`
- It’s an object, not a simple text string.

**Checking the Type:**

- A primitive string is of type string:

````js
let str = "Hello";
console.log(typeof str);  // Output: "string"


````

- A String object is of type object:

````js
let strObject = new String("Hello");
console.log(typeof strObject);  // Output: "object"


````

## Why Avoid Using new String()?

1. It’s not necessary:

-  For most cases, you just need a regular string. A normal string (like "Hello") is enough.


2. String objects are less efficient:

- String objects take up more memory because they are objects.
- They are slower compared to primitive strings.

3. Problems with comparison:

- When you compare a primitive string with a String object, they won’t match, even if they look the same.

````js
let str1 = "Hello";          // Primitive string
let str2 = new String("Hello");  // String object

console.log(str1 === str2);  // Output: false

````

## When Should You Use new String()?

- In most cases, you don’t need to use new String(). Here are some situations where you might use it:

- If you need to treat the string as an object because you want to store additional information or properties with it. But this is rare.
- For complex scenarios where you need more functionality (like attaching custom properties) to a string.

- For everyday coding, it’s better to use simple strings (like "Hello") because they are easier to work with and more efficient.