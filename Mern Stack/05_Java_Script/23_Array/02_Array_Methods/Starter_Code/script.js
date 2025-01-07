// ==========================
//       ARRAY OF NAMES
// ==========================

// This is an array containing a list of names.
// Yeh ek array hai jisme names ki list hai.
const names = [
    'Abhishek', 'Bob', 'Charlie', 'David',
    'Evelyn', 'Frank', 'Grace', 'Hannah',
    'Ian', 'Jack', 'Kathy', 'Liam',
    'Mia', 'Noah', 'Olivia', 'Paul',
    'Quincy', 'Rachel', 'Sam', 'Tina',
    'Angela', 'Anthony', 'Aria', 'Avery',
    'Abigail', 'Andrew', 'Alex', 'Audrey',
    'Asher', 'Austin', 'Annie', 'Allison',
    'Uma', 'Victor', 'Wendy', 'Xander',
    'Yara', 'Zane', 'Alice', 'Brian',
    'Catherine', 'Daniel', 'Ella', 'Felix',
    'Gina', 'Henry', 'Isla', 'James',
    'Kim', 'Leo', 'Maya', 'Nina',
    'Oscar', 'Penny', 'Quinn', 'Rita',
    'Steve', 'Tara', 'Ursula', 'Vera',
    'Will', 'Xena', 'Yusuf', 'Zelda'
];

// ==========================
//         FOR EACH LOOP
// ==========================

// The forEach method runs a function for each item in the array.
// forEach method har item ke liye ek function run karta hai.
console.warn("Loop Array");
names.forEach(function(name) {
    // Check if the current name is "Charlie".
    // Yeh check karta hai kya current name "Charlie" hai.

    if (name === "Charlie") {
        return; // If the name is "Charlie", skip to the next name.
        // Agar name "Charlie" hai, toh agle name par chalo.
    }
    console.log(name); // Print the current name.
    // Current name ko print karo.
});

// ==========================
//           MAP
// ==========================

// The map method creates a new array by applying a function to each item in the original array.
// map method ek naya array banata hai jisme har item par function apply hota hai.
console.warn("Create new array from old Array");
let newArray = names.map(function(name) {
    // You can change the name here; currently, it just returns the same name.
    // Yahan name ko badal sakte hain; abhi ke liye wahi name return kar rahe hain.
    return name; // Return the name unchanged.
});

// Print the new array.
// Naya array print karo.
console.log("New Array:", newArray);

// ==========================
//          FILTER
// ==========================

// The filter method creates a new array with items that meet a certain condition.
// filter method ek naya array banata hai jo un items ko rakhta hai jo specific condition ko meet karte hain.
console.warn("Filtered array based on specific condition");
let filteredArray = names.filter(function(name) {
    // Check if the name starts with 'A'.
    // Yeh check karta hai kya name 'A' se shuru hota hai.
    return name.startsWith('A'); // Returns true for names that start with 'A'.
    // 'A' se shuru hone wale names ko true return karega.
});

// Print the filtered array.
// Filtered array print karo.
console.log("Filtered Array (names starting with 'A'):", filteredArray);


// ==========================
//        SPREAD OPERATOR
// ==========================

// The spread operator (...) lets you combine arrays or expand them into individual elements.
// Spread operator (...) arrays ko combine ya expand karne ke liye use hota hai.
console.warn("Merging arrays using spread operator");

// Here, we define an additional array of names to merge with the original array.
// Yahan, hum ek additional names ka array define karte hain jo original array ke saath merge hoga.
const additionalNames = ['Alice', 'Bob', 'Charlie'];

// Use the spread operator to combine both arrays into one.
// Spread operator ka istemal karke dono arrays ko ek me combine karte hain.
const allNames = [...names, ...additionalNames]; // Merge two arrays
// Do arrays ko merge karte hain. 

// Print the merged array.
// Merged array print karo.
console.log("All Names:", allNames);
// This shows a single array with names from both original and additional arrays.
// Yeh ek single array dikhayega jo original aur additional arrays ke names ko milata hai.


// ==========================
//            FIND
// ==========================

// The find method returns the first item in the array that meets a certain condition.
// find method array me se pehla item return karta hai jo specific condition ko meet karta hai.
console.warn("Finding a specific name in the array");

// Use the find method on the names array.
// Names array par find method ka istemal karte hain.
let foundName = names.find(function(name) {
    // Check if the current name is 'David'.
    // Yeh check karta hai kya current name 'David' hai.
    return name === 'David'; // Look for 'David' in the names array.
    // 'David' ko names array me dhoond rahe hain.
});

// If 'David' is found, foundName will hold 'David', otherwise it will be undefined.
// Agar 'David' milta hai, toh foundName 'David' ko rakhega, warna yeh undefined hoga.

// Print the found name.
// Found name ko print karo.
console.log("Found Name:", foundName); // Print the found name
// Yeh found name ko print karega, jo 'David' hoga agar vo mile, nahi toh undefined hoga.

// ==========================
//          REDUCE
// ==========================

// The reduce method processes each item in the array to produce a single value.
// reduce method array ke har item ko process karta hai aur ek single value deta hai.
console.warn("Calculating total length of names");
let totalLength = names.reduce(function(accumulator, name) {
    return accumulator + name.length; // Add up the lengths of all names.
    // Sabhi names ki lengths ko jodte hain.
}, 0); // Start with an initial value of 0.
console.log("Total Length of All Names:", totalLength); // Print the total length.
// Total length ko print karo.

// ==========================
//          SOME
// ==========================

// The some method checks if at least one item in the array meets a certain condition.
// some method check karta hai agar array me se koi item specific condition ko meet karta hai.
console.warn("Checking for short names in the array");
let hasShortName = names.some(function(name) {
    return name.length < 4; // Checks if any name is shorter than 4 characters.
    // Check karte hain agar koi name 4 characters se chhota hai.
});
console.log("Is there any short name (less than 4 chars)?", hasShortName); // Output: true/false

// ==========================
//          EVERY
// ==========================

// The every method checks if all items in the array meet a certain condition.
// every method check karta hai agar sabhi items specific condition ko meet karte hain.
console.warn("Checking if all names are long enough");
let allLongNames = names.every(function(name) {
    return name.length > 3; // Checks if all names are longer than 3 characters.
    // Check karte hain agar sabhi names 3 characters se lamba hai.
});
console.log("Do all names have more than 3 characters?", allLongNames); // Output: true/false

// ==========================
//         INDEX OF
// ==========================

// The indexOf method finds the first position of a given item in the array.
// indexOf method diya gaya item ke first position ko array me dhoondta hai.
console.warn("Finding the index of a specific name");
let indexOfCharlie = names.indexOf('Charlie'); // Find index of 'Charlie'.
console.log("Index of Charlie:", indexOfCharlie); // Output: index of Charlie.

// ==========================
//         LAST INDEX OF
// ==========================

// The lastIndexOf method finds the last position of a given item in the array.
// lastIndexOf method diya gaya item ke last position ko array me dhoondta hai.
console.warn("Finding the last index of a specific name");
let lastIndexOfA = names.lastIndexOf('Avery'); // Find last index of 'Avery'.
console.log("Last Index of Avery:", lastIndexOfA); // Output: index of Avery.

// ==========================
//         SLICE
// ==========================

// The slice method creates a new array containing a portion of the original array.
// slice method ek naya array banata hai jo original array ka ek portion rakhta hai.
console.warn("Slicing the array");
let slicedNames = names.slice(1, 5); // Get names from index 1 to 4.
console.log("Sliced Names (index 1 to 4):", slicedNames); // Output: names from index 1 to 4.

// ==========================
//         SPLICE
// ==========================

// The splice method changes the contents of the array by adding, removing, or replacing items.
// splice method array ke contents ko badal deta hai items ko add, remove, ya replace karke.
console.warn("Modifying the array with splice");
let splicedNames = names.splice(2, 2, 'Zara', 'Leo'); // Remove 2 items starting from index 2 and add 'Zara' and 'Leo'.
console.log("Names after Splice:", names); // Output: names with 'Zara' and 'Leo' added.

// ==========================
//         REVERSE
// ==========================

// The reverse method reverses the order of items in the array.
// reverse method array ke items ke order ko ulta kar deta hai.
console.warn("Reversing the array");
let reversedNames = [...names].reverse(); // Create a reversed copy of names.
console.log("Reversed Names:", reversedNames); // Output: names in reverse order.

// ==========================
//         SORT
// ==========================

// The sort method arranges the items in the array in order.
// sort method array ke items ko order me arrange karta hai.
console.warn("Sorting the array");
let sortedNames = [...names].sort(); // Create a sorted copy of names.
console.log("Sorted Names:", sortedNames); // Output: names in sorted order.

// ==========================
//         JOIN
// ==========================

// The join method combines all items in the array into a single string.
// join method array ke saare items ko ek single string me combine karta hai.
console.warn("Joining the array into a string");
let joinedNames = names.join(", "); // Join names with a comma and space.
console.log("Joined Names:", joinedNames); // Output: names as a single string.
