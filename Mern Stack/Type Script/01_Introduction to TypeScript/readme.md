## Ts Basic

### What is TypeScript (TS)?

- TypeScript is a programming language that builds on JavaScript by adding static typing. It’s designed to make JavaScript development more reliable, easier to maintain, and scalable, especially for larger applications. TypeScript is compiled into JavaScript before it can be run in browsers or Node.js environments.

- TypeScript, JavaScript ka ek upgrade hai. Yeh JavaScript mein static typing add karta hai, jiska matlab hai ki aap code likhte waqt type specify kar sakte ho (jaise number, string, boolean), taaki aapko mistakes jaldi pata chal sake. TypeScript ko JavaScript ka superset kaha jata hai, matlab JavaScript ka jo code hai, woh TypeScript mein bhi kaam karega, lekin TypeScript aur advanced features provide karta hai.


### Who Developed TypeScript?


- TypeScript (abbreviated as TS) is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. TypeScript is designed for the development of large applications and transcompiles to JavaScript.

- TypeScript ek high-level programming language hai jo ki Microsoft ne develop kiya hai. TypeScript JavaScript ke liye ek superset hai, jisme static typing ke sath optional type

### Why TypeScript?


- TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript is designed to be a statically typed language that helps developers catch errors at compile time rather than at runtime. TypeScript also provides features such as classes, interfaces, and modules that make it easier to write and maintain large applications.

- TypeScript JavaScript ka superset hai, jisme koi bhi valid JavaScript code valid TypeScript code hai. TypeScript ek statically typed language hai, jisme errors compile time pe detect hote hai, runtime pe nahi. TypeScript mein classes, interfaces, modules jaise features provide karta hai, jisse large applications likhna aur maintain karna aasan ho jata hai.

### TypeScript Features

- TypeScript has many features that make it a powerful language for building large applications. Some of the key features of TypeScript include:

- Static Typing: TypeScript allows developers to specify types for variables, function parameters, and return values. This helps catch errors at compile time and makes code easier to understand.

- Classes: TypeScript supports object-oriented programming features such as classes, interfaces, and inheritance.


### TypeScript Advantages


- TypeScript has several advantages over JavaScript, including:

- Static Typing: TypeScript allows developers to specify types for variables, function parameters, and return values. This helps catch errors at compile time and makes code easier to understand.


### TypeScript Disadvantages


- TypeScript has some disadvantages compared to JavaScript, including:

- Learning Curve: TypeScript has a steeper learning curve than JavaScript due to its additional features and syntax.


### TypeScript vs JavaScript


- TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript adds static typing and other features to JavaScript to make it more reliable and scalable for large applications.


### TypeScript vs JavaScript Performance


- TypeScript is compiled into JavaScript before it can be run in browsers or Node.js environments. This compilation step can add some overhead to the performance of TypeScript applications compared to JavaScript applications.


### TypeScript vs JavaScript Syntax


- TypeScript has a similar syntax to JavaScript, but with some additional features such as static typing, classes, interfaces, and modules. TypeScript code can be compiled into JavaScript code that is compatible with all major browsers and Node.js environments.


### TypeScript vs JavaScript Popularity


- TypeScript has been gaining popularity in recent years due to its static typing and other features that make it easier to write and maintain large applications. TypeScript is widely used in the development of web applications, server-side applications, and mobile applications.





### Step-by-Step Installation Guide

#### Step 1: Install TypeScript

Open a terminal window and run the following command to install TypeScript globally on your system:

If you did't have node installed in your system then first install node.js from [here](https://nodejs.org/en/download/)



```bash
npm install --global typescript
```

#### Step 2: Verify Installation

To verify that TypeScript has been installed successfully, run the following command:


```bash
tsc --version
```


#### Step 3:  Initialize TypeScript Configuration:

To initialize a TypeScript project, create a new directory for your project and run the following command:


```bash
tsc --init
```



#### Step 4: Write TypeScript Code

Create a new TypeScript file with a .ts extension and write some TypeScript code in it. For example:


```typescript
console.log("Hello, TypeScript!");
```

#### Step 5: Compile TypeScript Code

To compile the TypeScript code into JavaScript, run the following command:


```bash
tsc yourfile.ts
```

This will generate a JavaScript file with the same name as your TypeScript file.

```bash
tsc
```

This Will watch the file and compile it automatically when you save the file.

```bash

tsc -w
```


## Install Some Vs Code Extensions


**1. EsLint**

- Install EsLint 

<img src="./Images/Screenshot%20at%202025-02-01%2013-09-05.png" alt="Screenshot at 2025-02-01 13-09-05" style="zoom:50%;" />




**2. Prettier**


- Install Prettier


<img src="./Images/Screenshot at 2025-02-01 13-11-59.png" alt="Screenshot at 2025-02-01 13-09-05" style="zoom:50%;" />

**3. JavaScript and TypeScript Nightly**

- Install JavaScript and TypeScript Nightly




<img src="./Images/Screenshot at 2025-02-01 13-13-51.png" alt="Screenshot at 2025-02-01 13-09-05" style="zoom:50%;" />

**4. Live Server**


- Install Live Server

<img src="./Images/Screenshot at 2025-02-01 13-17-53.png" alt="Screenshot at 2025-02-01 13-09-05" style="zoom:50%;" />



5. **Pretty TypeScript Errors**

- Install Pretty TypeScript Errors

<img src="./Images/Screenshot at 2025-02-01 13-19-45.png" alt="Screenshot at 2025-02-01 13-09-05" style="zoom:50%;" />