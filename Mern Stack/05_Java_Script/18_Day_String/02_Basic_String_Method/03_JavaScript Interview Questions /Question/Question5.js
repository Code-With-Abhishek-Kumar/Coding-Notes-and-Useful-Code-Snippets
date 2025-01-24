// What is sort() method 

// In JavaScript, the sort() method is not directly available for strings, but it is available for arrays. If you want to sort characters in a string, you would first need to convert the string into an array, then use sort(), and finally join the sorted array back into a string.

// The sort() method is used to sort the elements of an array in place and returns the sorted array. 


//  What is Shorting 


// Sorting is the process of arranging elements in a particular order. This order can be ascending (from smallest to largest, or lexicographically from A to Z) or descending (from largest to smallest, or lexicographically from Z to A).


// Q1:-: Short String

let str = "IHGFEDCBA"
let Shorted_String = str.split('').sort().join('')
console.log(Shorted_String) // A,B,C,D,E,F,G,H,I



// Q2:- Short Number 

let Number = 123456789

let Shorted_String2 = Number.toString().split('').sort().join('')
console.log(Shorted_String2)



// Q3: - Sort the Characters of a String Alphabetically

// - Sort the characters of the string "Programming" in ascending order (A to Z).

// https://www.w3schools.com/jsref/jsref_localecompare.asp

let Str2 = "Programming";

let Shorted_String3 = Str2.split('').sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join('')
console.log(Shorted_String3)   //aggimmnoPrr

// Go and Practice sort() method in Array or object