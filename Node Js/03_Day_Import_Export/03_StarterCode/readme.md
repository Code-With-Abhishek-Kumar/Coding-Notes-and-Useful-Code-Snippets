



#  CommonJS Modules

- In CommonJS modules, you use module.exports or exports to make variables, functions, or objects available for use in other modules.

- CommonJS modules mein, aap module.exports ya exports ka istemaal karte hain taaki variables, functions, ya objects ko dusre modules mein upalabdh karaya ja sake.



## Single Export


````javascript

// greet.js
function greet(name) {
    return `Hello, ${name}!`;
}

module.exports = greet;



````


- Here, the `greet` function is assigned to `module.exports`, making it the sole export of the greet.js module

- Yahan, greet function ko module.exports mein assign kiya gaya hai, jisse jab yeh module kisi aur module mein require hota hai (require('./greet')), to waha greet function ko return karta hai.

## Multiple Exports:


````javascript
// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};




``````

- This example `exports` multiple functions (`add and subtract`) as an object using `module.exports`.


- Is example mein, hum multiple functions (add aur subtract) ko module.exports ke roop mein export kar rahe hain.



## Single Import:

- To import modules in CommonJS, you use the require() function.

````javascript

const greet = require('./greet');
console.log(greet('John')); // Output: Hello, John!



````

- The `require('./greet')` statement loads the greet module and assigns whatever was assigned to module.exports in greet.js to the greet variable.

- `require('./greet')` statement greet module ko load karta hai aur `greet.js` mein jo bhi `module.exports` mein assign kiya gaya hai, woh greet variable mein store ho jata hai.


## Destructuring Imports Example:


````javascript
const { add, subtract } = require('./math');
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2


````


- Here, we use destructuring to import specific functions (add and subtract) from the math module exported as an object.



# ECMAScript Modules (ES Modules)

- ES modules use export and import keywords to define exports and import them into other modules.


## Single Export:


```javascript
// greet.mjs
export function greet(name) {
    return `Hello, ${name}!`;
}

```

- In an ES module (note the .mjs extension or "type": "module" in package.json), you use export to make the greet function available for import in other modules.

## Multiple Exports:

````javascript

// math.mjs
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}


````

- Here, we use export keyword to export add and subtract functions individually from the math.mjs module.




## Single Import:
To import modules in ES modules, you use the import keyword.

````javascript
// greet.mjs
import { greet } from './greet.mjs';
console.log(greet('John')); // Output: Hello, John!


````




- The import { greet } from './greet.mjs' statement imports the greet function from greet.mjs module.

## Namespace Imports:

```javascript
import * as math from './math.mjs';
console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(5, 3)); // Output: 2

```



- Here, import * as math imports all exported bindings (add and subtract functions) from math.mjs as properties of the math object.






## Notes on ES Modules in Node.js

- **Use `.mjs` Extension or `"type": "module"` in `package.json`:**
  - ES modules in Node.js should use the `.mjs` file extension for modules or specify `"type": "module"` in `package.json` to indicate that the project uses ES modules.

- **Static Analysis:**
  - ES modules are statically analyzed, meaning imports are resolved at compile-time rather than runtime. This prevents dynamic imports like `import(moduleName)`.

## Additional Considerations

1. **Dynamic vs. Static Analysis:**
   - **CommonJS:** Modules are loaded and executed dynamically at runtime.
   - **ES Modules:** Imports are resolved statically at compile-time.

2. **Transitioning from CommonJS to ES Modules:**
   - Node.js encourages transitioning to ES modules for better interoperability with front-end JavaScript and broader ecosystem compatibility.
   - You can mix CommonJS and ES modules in Node.js by using `.cjs` for CommonJS modules and `.mjs` for ES modules.

3. **Compatibility:**
   - ES modules allow for better tree-shaking (removal of unused code) and optimization in modern JavaScript toolchains.
   - CommonJS remains widely used in existing Node.js codebases and libraries.
