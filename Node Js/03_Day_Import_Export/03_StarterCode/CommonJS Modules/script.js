// Single Import:

const greet = require('./greet');
console.log(greet('John')); // Output: Hello, John!

// Destructuring Imports:

const { add, subtract } = require('./math');
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
