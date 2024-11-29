// Named function declaration

// Function Statement

function add(a, b) {
    return a + b;
  }
  
  console.log(add(3, 4)); // Output: 7


  // Function expression

var multiply = function(x, y) {
    return x * y;
  };
  
  console.log(multiply(5, 6)); // Output: 30


  // Immediately Invoked Function Expression (IIFE)
(function() {
    var message = "Hello, World!";
    console.log(message); // Output: Hello, World!
  })();


  // Function as method
var person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  console.log(person.fullName()); // Output: John Doe

  
  // Function with default parameters (ES5 workaround)
function greet(name) {
    name = name || "Guest";
    return "Hello, " + name + "!";
  }
  
  console.log(greet("Alice")); // Output: Hello, Alice!
  console.log(greet()); // Output: Hello, Guest!

  

  // Function with callback
function doSomething(callback) {
    console.log("Doing something...");
    callback();
  }
  
  function callbackFunction() {
    console.log("Callback executed!");
  }
  
  doSomething(callbackFunction); // Output: Doing something... Callback executed!
