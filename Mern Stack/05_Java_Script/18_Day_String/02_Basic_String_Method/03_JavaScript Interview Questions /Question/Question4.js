// Helper Link:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// How do you extract a section of a string in JavaScript?

// Q1:- Extract "Hello" From "Hello World!"

let str = "Hello World!"
let extract = str.slice(0,5)
console.log('Ans1:-',extract)




// Q2:- Extract "Gupta" From "Abhishek Gupta"

// Ans:-

/* 
Explanation:
- "Abhishek Gupta" 
    - 'A' is at index 0
    - 'b' is at index 1
    - 'h' is at index 2
    - 'i' is at index 3
    - 's' is at index 4
    - 'h' is at index 5
    - 'e' is at index 6
    - 'k' is at index 7
    - ' ' (space) is at index 8
    - 'G' is at index 9 (start of "Gupta")
    - 'u' is at index 10
    - 'p' is at index 11
    - 't' is at index 12
    - 'a' is at index 13
- slice(9, 14) extracts characters from index 9 up to, but not including, index 14, giving "Gupta".
*/


let str2 = "Abhishek Gupta"


let extract2 = str2.slice(9,14)
console.log('Ans2:-', extract2)


// Q3:- Extract the First 3 Characters  from the string "Programming".


let str3 = "Programming"
let extract3 = str3.slice(0,3)
console.log('Ans3:-',extract3)




// Q4:- Extract the Last 3 Last Characters  from the string "Programming".

// Ans:-

/* 
Explanation:
- "Programming"
    - 'P' is at index 0
    - 'r' is at index 1
    - 'o' is at index 2
    - 'g' is at index 3
    - 'r' is at index 4
    - 'a' is at index 5
    - 'm' is at index 6
    - 'm' is at index 7
    - 'i' is at index 8 (start of "i")
    - 'n' is at index 9 
    - 'g' is at index 10
   
*/


console.warn('Question No:-' , 4 )
let str4 = "Programming"
let findIndex = str4.length - 3
let Number_of_Characters = str4.length
let extract4 = str4.slice(findIndex, Number_of_Characters)
console.log('Ans 3 :- ' , extract4)
