# JavaScript Arrays

- An array in JavaScript is  used to store multiple values in a single variable. It can hold various data types and allows for dynamic resizing. Elements are accessed by their index, starting from 0.


- Array hum logo ko allow kr ta hain ki hum ek hi variable main multiple values ko store kr paye. Yeh values kisi bhi type ke ho sakte hain jaise numbers, strings, objects, etc. JavaScript mein array ko modify kiya ja sakta hai, matlab isme stored data ko change kiya ja sakta hai aur naye data ko add ya remove kiya ja sakta hai.


- hum log ye bhi bol skte hain ki array ka matlab jab bhi aapko ek ya ek se jaada value ek sath rakhna ho toh app array ka use kr skte hain . 

`Example`


````javascript
// Here we Store Multiple data in a Single Variable using Array

// 'users' is an array containing names of users
let users = ["Manish", "Rohan", "Ram", "Abhishek"];

console.log(users)

````


## Why we Use array 

- A lot of time we want to store a multiple value but we don't went to create a multiple variable so in that case we use array to store that vale in a single variable.


- Arrays are used in programming to efficiently store and organize multiple pieces of data. They allow quick access to each item by its position and support operations like adding, removing, and modifying elements as needed. Arrays are essential for managing lists and collections of data in computer programs.

- Arrays programming mein istemal hoti hain data ko ek jagah store karne ke liye jahan hume ek se zyada values ko organize karna hota hai. 


- Ye hume information ko efficient tareeke se arrange karne mein madad karti hain aur har item ko uske position ke hisab se jaldi access karne deti hain. Arrays flexible hote hain kyunki hum unmein elements ko add, remove ya change kar sakte hain zarurat ke hisab se. Ye commonly names, numbers, ya kisi bhi tarah ke data ko group karna aur usse aasani se access karne ke liye istemal hoti hain. Overall, arrays hume computer programs mein data collections ko handle aur work karne mein madad deti hain.





## Array index


- Array indexing in JavaScript is a way to represent the position of elements within an array. Each element in an array has a unique index number, which is used to access and manipulate the element. In JavaScript, array indices start at `0`. This means that if you want to access the first element of an array, you use index 0. For the second element, you use index 1, and so on.


- Array main index 0 se start hota hain mtlb ki ye agar hum log kisi array k first element ko access kr na chahate hain toh hum logo ko usko 0 se call kr na hoga or agr hum logo ko second element ko access kr na hain toh us k liye hum logo ko usko 1 se call kr ne hoga.



- Array index Array  k andar k element ko position ko show kr tah hain jo btata hain ye particular position pe kya element hain. 


````javascript
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]);  // Output: Apple
console.log(fruits[1]);  // Output: Banana



````


- In this example, fruits[0] retrieves 'Apple', which is the first element, and fruits[1] retrieves 'Banana', the second element. This zero-based indexing system helps in efficiently accessing and managing array elements.









````javascript

// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// Accessing elements
console.log(fruits[0]);  // Output: Apple (first element)
console.log(fruits[2]);  // Output: Cherry (third element)

// Modifying an element
fruits[1] = 'Blueberry';  // Change 'Banana' to 'Blueberry'
console.log(fruits[1]);  // Output: Blueberry

// Adding a new element
fruits[5] = 'Fig';  // Add 'Fig' at index 5
console.log(fruits[5]);  // Output: Fig

// Array length
console.log(fruits.length);  // Output: 6 (total number of elements)


````