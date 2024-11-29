debugger



function greet(name) {
    console.log("Hello, " + name + "!");
    // No return statement
}

var result = greet("Alice");
console.log(result); // Output undefined hoga




// Function to calculate the square of a number
function square(num) {
    return num * num;
}

// Using the square function
var result1 = square(5); // Returns 25
var result2 = square(10); // Returns 100

console.log("Square of 5:", result1);
console.log("Square of 10:", result2);


// Function to calculate the sum of two numbers
function addNumbers(a, b) {
    var sum = a + b;
    return sum; // Returns the calculated sum
}

// Using the addNumbers function
var result = addNumbers(3, 5);
console.log("Sum of 3 and 5:", result); // Outputs: Sum of 3 and 5: 8








// Function to check if a number is even and return a message
function checkEven(number) {
    if (number % 2 === 0) {
        return "The number " + number + " is even."; // Returns a message if number is even
    }
    // No explicit return statement for odd numbers, implicitly returns undefined
}

// Using the checkEven function
var result1 = checkEven(4);
console.log(result1); // Outputs: The number 4 is even.

var result2 = checkEven(3);
console.log(result2); // Outputs: undefined
