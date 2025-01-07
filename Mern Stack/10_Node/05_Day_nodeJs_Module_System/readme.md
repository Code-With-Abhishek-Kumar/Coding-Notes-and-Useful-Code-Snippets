## What is the Node.js Module System?

- Node.js ka module system developers ko unki code ko reusable hisson mein organize karne ki suvidha deta hai, jise hum "modules" kehte hain. Isse applications ko maintain karna aur scale karna asaan ho jata hai, kyunki hum apne code ko chote aur manageable units mein tod sakte hain. 


- The Node.js module system allows developers to organize their code into reusable pieces called modules. This makes it easier to maintain and scale applications by breaking them down into smaller, manageable units.


## CommonJS Module Format
Node.js uses the CommonJS module format by default. This format includes:

- **Exporting Modules:** You can export functions, variables, or objects using `module.exports` or `exports`.
  
```javascript
  // math.js
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;

  module.exports = { add, subtract }; // Exporting functions

```

**Importing Modules:** You can import a module in another file using the require function.



```javascript

// app.js
const math = require('./math'); // Importing the math module

console.log(math.add(5, 3)); // Output: 8

```


##  **ES6 Module Syntax**

- With ES6 (ECMAScript 2015), a new module syntax was introduced using import and export. To use ES6 modules in Node.js, set `"type": "module"` in your package.json.

- JavaScript ke ES6 version mein ek naya module syntax introduce kiya gaya hai, jisme import aur export keywords ka istemal hota hai. ES6 module syntax use karne ke liye aapko package.json file mein `"type": "module"` set karna padta hai.

    Exporting with ES6:

```javascript

// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

- **Importing with ES6:**

```javascript

// app.js
import { add, subtract } from './math.js'; // Using ES6 import syntax
console.log(add(5, 3)); // Output: 8
```


## **Built-in Modules**

Node.js kai built-in modules ke saath aata hai jo ki core functionalities provide karte hain. Kuch important built-in modules hain:

Node.js comes with several built-in modules that provide core functionalities. Some important built-in modules include:

- **http:** Used for creating web servers and clients.

- **fs:** Provides an API to interact with the file system (reading and writing files).

- **path:** Helps in handling and transforming file paths.


## Third-Party Modules

You can use external libraries or packages available via npm (Node Package Manager). To install a module, use the command:


```bash
$ npm install <package-name>

```