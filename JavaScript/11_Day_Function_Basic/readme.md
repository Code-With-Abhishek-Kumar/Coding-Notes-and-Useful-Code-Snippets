
<!-- TOC -->

- [Function](#function)
- [Why we need Function](#why-we-need-function)
- [Parameters and Arguments](#parameters-and-arguments)
    - [Parameter](#parameter)
        - [How Do Parameters Work?](#how-do-parameters-work)
        - [Key Points about Parameters:](#key-points-about-parameters)
        - [Benefits of Using Parameters:](#benefits-of-using-parameters)
        - [Default Parameters ES6+](#default-parameters-es6)
    - [Arguments:](#arguments)
    - [Rest Parameter:](#rest-parameter)
    - [Rest parameter](#rest-parameter)
        - [How  Rest parameter Work](#how--rest-parameter-work)

<!-- /TOC -->
# Function


- A JavaScript function is a block of code designed to perform a particular task.


- A JavaScript function is executed when "something" invokes it (calls it).

- Function ek tarika hai jisse hum code ko organize aur reuse kar sakte hain. Jab hum kisi task ko perform karne ke liye code likhte hain, toh hum us code ko ek function mein daal kar rakh sakte hain Isse humara code compact aur manageable ho jata hai.

- Jab hum ek function ko define karte hain, toh hum us function ko baar-baar call karke us task ko baar-baar execute kar sakte hain, bina pura code dohrane ke. Ye hamari productivity ko bhi badhata hai, kyun ki humein har baar naye code likhne ki zarurat nahi hoti.

- Is tareeke se, function hamare code ko modular banata hai aur hamari coding experience ko enhance karta hai. Hamara code padhne aur samajhne mein bhi aasan ho jata hai, aur hum usmein changgves karne mein bhi suvidha prapt karte hain.

<!--  -->
- JavaScript mein, functions ko "first-class citizens" ke darje diya gaya hai, yaha aap functions ko variables ke roop mein istemal kar sakte hain, unhe dusre functions ke andar pass kar sakte hain, unhe functions se vapas bhi la sakte hain, aur unhe properties aur methods ke roop mein bhi istemal kiya ja sakta hai.

- Iska arth hai ki functions ko ek normal data type ki tarah treat kiya jata hai aur unhe kisi bhi jagah mein istemal kiya ja sakta hai, jaise ki ek variable ya ek object ki property.


```javascript
function functionName() {

}

// call Function

functionName() 
```



# Why we need Function

- To reuse code and to wrap the code which we want to run in future at some point of time .


- Functions are essential in programming for reusability, modularity, and code organization. They enable us to write code once and reuse it multiple times, enhancing efficiency. Functions also simplify code by abstracting implementation details, promoting readability, and encapsulating tasks for better management and scalability.




#  Parameters and Arguments

## Parameter

- In JavaScript, parameters are placeholders or variables defined in the function declaration. They represent values that a function expects to receive when it is called. Parameters allow functions to be flexible by accepting different inputs each time they are invoked.

- Parameters woh variables hote hain jo function declaration mein declare kiye jaate hain. Ye un values ke liye placeholders ka kaam karte hain jo function ko call kiye jaane par di jayengi.

- Jab aap ek function define karte hain, to aap uske parameters ko parentheses ke andar function ke naam ke baad specify karte hain. Ye parameters woh inputs represent karte hain jo function ko praapt honge. Aap zero ya zyada parameters define kar sakte hain.


- Parameters are named variables declared as part of a function. They are used to reference the arguments passed into the function.


### How Do Parameters Work?

`Defining a Function with Parameters:`

````javascript

function greet(name) {
    console.log(`Hello, ${name}!`);
}



````



`In this example:`

- name is the parameter of the greet function.
When greet('Alice') is called, 'Alice' is passed as the argument for name.

- Inside the function body, name holds the value 'Alice' during that function call, and it prints Hello, Alice! to the console.


### Key Points about Parameters:



1. Definition: 

- Parameters are declared inside the parentheses () of a function declaration.

2. Purpose:

- They act as placeholders for values that will be passed to the function when it is called.

3. Flexibility: 

- Functions can have multiple parameters separated by commas, allowing them to accept and work with different sets of data.

4. Naming:

-  Parameter names are used within the function body to refer to the values passed as arguments during function invocation.


### Benefits of Using Parameters:


1. `Modularity and Reusability:`


- Parameters allow you to create functions that can perform the same action on different sets of data. By defining parameters, you can generalize the function's behavior and reuse it across your application with varying inputs.


-Parameters ka upyog karke aap functions ko aise banate hain jo alag-alag prakar ke data ke saath kaam kar sakte hain. Parameters ko define karke, aap function ke vyavahar ko samanya kar sakte hain aur ise apne application mein vibhinn inputs ke saath punah istemal kar sakte hain.

````javascript

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('Alice'); // Output: Hello, Alice!
greet('Bob');   // Output: Hello, Bob!


````

- In this example, name serves as a parameter, enabling the greet function to greet any name provided as an argument. This modularity makes the function reusable for greeting different individuals without duplicating code.

-Is udaharan mein, name parameter ka upyog karte hue greet function ko kisi bhi naam se pranam karne ke liye punargaman kar sakte hain. Is prakar ki modularity ke karan yah function bina code ko dohrane ke greetings ke liye punah upayukt hota hai.


2. Flexibility:

- Parameters make functions flexible by allowing them to accept different values each time they are called. This flexibility enables functions to handle a wide range of scenarios and use cases within your application.

-Parameters functions ko prayogshilta pradan karte hain kyunki ve har baar jab wah bulaya jata hai tab alag-alag maan lete hain. Is prayogshilta se yah functions ko vibhinn paristhitiyon aur upayog ke liye samarth banata hai.

````javascript
function calculateArea(length, width) {
    let area = length * width;
    console.log(`The area of the rectangle is ${area} square units.`);
}

calculateArea(5, 3);   // Output: The area of the rectangle is 15 square units.
calculateArea(10, 4);  // Output: The area of the rectangle is 40 square units.


````

- In the calculateArea function, `length` and `width` are parameters that allow the function to compute the area of a rectangle for any given dimensions. This flexibility makes the function adaptable to calculate areas of different rectangles simply by changing the arguments.

calculateArea function mein, `length` aur `width` parameters hote hain jo is function ko prakritik rup se kisi bhi diye gaye aayatan ke area ko ganana karne ke liye samarth banate hain. Is prayogshilta se yah function alag-alag aayatan ke kshetra ko samay samay par ganana karne ki kshamata pradan karta hai.

3. Code Readability:

- Well-named parameters improve the readability of your code by clearly indicating what kind of data a function expects to receive. This enhances the understanding of how functions operate and what inputs are required for them to perform their tasks.

-Acche naamit parameters aapke code ke padhne ko aasan banate hain aur spasht dikhate hain ki function kis prakar ke data ko prapt karna pratiksha karta hai. Is se aapke code ke samajhne aur usmein vyavastha banane mein madad milti hai.

````javascript 
function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

let fullName = formatName('John', 'Doe');
console.log(fullName); // Output: John Doe

````

- Here, firstName and lastName parameters in the formatName function clearly communicate that the function expects two separate pieces of information to concatenate into a full name. This clarity improves code comprehension and maintenance.


-Yahan, firstName aur lastName parameters formatName function mein saaf roop se spasht karte hain ki function poora naam milane ke liye do alag-alag sanket prapt karta hai. Yah spashtata code ke samajhne aur rakh-rakhav mein sudhar karne mein madad karti hai.

4. Maintainability:

- Using parameters promotes maintainable code by reducing redundancy and centralizing functionality. Instead of writing separate functions for every possible scenario, you can define a single function with parameters to handle different cases based on the provided inputs.


- Parameters ka upyog rakh-rakhav mein madad karta hai kyunki yah punargaman ko kam karta hai aur karyo ko ek jagah par rakhne mein madad karta hai. Alag-alag paristhitiyon ke liye alag-alag functions likhne ke bajay, aap parameters ka upyog karke ek hi function ko alag-alag maamlo ke liye istemal kar sakte hain.

````javascript
function checkAge(age) {
    if (age >= 18) {
        console.log('You are an adult.');
    } else {
        console.log('You are a minor.');
    }
}

checkAge(25);  // Output: You are an adult.
checkAge(15);  // Output: You are a minor.

````

- In the checkAge function, the age parameter allows the function to determine if the provided age qualifies as an adult or a minor. This centralized logic ensures consistency and simplifies future updates or modifications.


- `checkAge` function mein, `age` parameter se yah function tay karta hai ki diye gaye aayu bade ya chhote maan ke liye hai. Yah ek jagah par logic ko sthayi karke aane vale sudhar aur sambhavit nakshe ko saral banata hai.

5. Scalability:

- Parameters facilitate scalable development by making functions adaptable to changing requirements and expanding functionalities. As your application grows, you can extend the capabilities of existing functions by adding more parameters or modifying existing ones to accommodate new features.

-Parameters badhane ki shakti mein sahayak hota hai kyunki ve function ko badalne waale aavashyakataon aur vistarit gunvattaon ko santulit karne ke liye paramparik taur par upayukt karne ki anumati deta hai.


````javascript

function generateFullName(firstName, lastName, title) {
    if (title) {
        return `${title} ${firstName} ${lastName}`;
    } else {
        return `${firstName} ${lastName}`;
    }
}

let fullNameWithTitle = generateFullName('John', 'Doe', 'Mr.');
let fullNameWithoutTitle = generateFullName('Jane', 'Smith');
console.log(fullNameWithTitle);    // Output: Mr. John Doe
console.log(fullNameWithoutTitle); // Output: Jane Smith

````

- Here, the generateFullName function demonstrates scalability by accepting an optional title parameter. Depending on whether the title is provided, the function adjusts its output accordingly, accommodating different formatting needs for full names.

- Yahan, generateFullName function dikhata hai ki kaise parameters ka upyog kiya ja sakta hai. Iske anusar, title ka vikalpik parameter istemal karne se yah function anusaar ke dene wale naamo ko samay samay par anusaar karne ke liye yathesht banata hai.



### Default Parameters (ES6+)

- In ES6 (ECMAScript 2015) and later versions, you can specify default values for parameters in case arguments are not provided when the function is called:


- Default Parameters ES6 2015 main aaya tha ye default parameters  ki help se hum kisi bhi function main default parameters  set kr skte hain ye default parameters se hum kisi bhi function k  parameter main value pass kr skte hain or ye value default hogi hum koi function ko bina value arguments k call kre ga toh ye function usko default Parameter variable ka vale degi

`Example`

````javascript
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!



````


`Here:`

- In the greet function, name is the parameter with 'Guest' as its default value.

- When greet() is called without any arguments, it uses 'Guest' as the value for name.

- When greet('Alice') is called with 'Alice' as an argument, it uses 'Alice' instead of the default value.




## Arguments:



- Arguments woh actual values hote hain jo ek function ko call kiye jaate hain. Ye values function declaration mein define kiye gaye parameters ke saath correspond karte hain.

- Jab aap ek function ko call karte hain, to aap har parameter ke liye ek specific value provide karte hain, jo arguments kaha jata hai. Ye arguments variables, literals, expressions, ya phir doosre function calls bhi ho sakte hain.

- Here's an example of calling the `add ` function with arguments:


```javascript
let result = add(3, 5);
console.log(result); // Output: 8

```

`In this example:`

- 3 and 5 are arguments passed to the add function.
They correspond to the parameters a and b defined in the function declaration.

- When the function is called with these arguments, a will be 3 and b will be 5.

`How it Works:`

- When you call a function with arguments, the arguments are assigned to the parameters in the order they are listed in the function declaration.

- For example, when you call add(3, 5):

- The value 3 is assigned to the parameter a.

- The value 5 is assigned to the parameter b.

- Inside the function, these parameters are used to perform the computation (return a + b;), and the result is returned.






## Rest Parameter:

- `...restParams:` This is the rest parameter syntax, denoted by three dots (...) followed by a parameter name (restParams in this case).

- It allows the function to accept an indefinite number of arguments after the first two parameters (param1 and param2).

- All remaining arguments that are passed to the function are gathered into an array named restParams.

- This array can then be accessed and manipulated within the function body like any other array in JavaScript.

- `...restParams:` Rest parameter jo ki three dots (...) se indicate hota hai. Yeh sabhi bache hue arguments ko ek array main  collect karta hai. mtlb rest parameter se hum log multiple value send kr skte hain or ye salve array k form main aaye ga.  























<!-- 

Comple rest parameter 

 -->




## Rest parameter 

- Rest parameters were introduced in ECMAScript 6 (ES6) as a feature to simplify working with function parameters, it  allow you to write functions that can accept an indefinite number of arguments. Instead of defining a fixed number of parameters, you can use ... before the last parameter name to gather all remaining arguments into an array.



- Rest parameter JavaScript mein ek feature hai jo ek function ko indefinite number ke arguments ko ek array ke roop mein accept karne ki anumati deta hai. Iska matlab hai ki aap ek function ko aise define kar sakte hain jo alag-alag sankhya ke arguments ko handle kar sake bina har ek ko alag se naam dena padhe.

````javascript
function functionName(param1, param2, ...restParams) {
  // function body
}


````

1. Function Declaration:

- `function:` This keyword is used to declare a function in JavaScript.

- function keyword ka use function ko declare kr ne k liye hota hain 

- `functionName:` This is the name of the function. You can name it anything you like, following the rules for naming identifiers in JavaScript.

functionName: Aapke function ka naam. ye name kuch bhi ho skta hain. 


<!-- 

correct



 -->








### How  Rest parameter Work


- When you call a function with a rest parameter, JavaScript collects all extra arguments into the array. Here's how you use it:


````javascript


function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2)); // Output: 3
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum()); // Output: 0 (no arguments, empty array)


````

- In this example, sum accepts any number of arguments (numbers) and calculates their sum.

- The ...numbers syntax allows sum to handle varying numbers of arguments seamlessly.







`Example`

```javascript
function add(a, b) {
    return a + b;
}

```

`In this example:`

- a and b are parameters of the add function.
- They are placeholders for values that will be provided when the function is called.

`How it Works:`

- When you call a function with arguments, the arguments are assigned to the parameters in the order they are listed in the function declaration.

- For example, when you call add(3, 5):

- The value 3 is assigned to the parameter a.

- The value 5 is assigned to the parameter b.

- Inside the function, these parameters are used to perform the computation (return a + b;), and the result is returned.

