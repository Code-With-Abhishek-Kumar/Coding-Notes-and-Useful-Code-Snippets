
<!-- TOC -->

- [JavaScript Loop](#javascript-loop)
- [Type of loop in JavaScript](#type-of-loop-in-javascript)
    - [For Loop:](#for-loop)
    - [While Loop:](#while-loop)
    - [for-in Loop](#for-in-loop)
    - [for…of Loop](#forof-loop)
    - [do…while Loop](#dowhile-loop)

<!-- /TOC -->

## JavaScript Loop

<!-- loops = repeat -->

What are Loops in JavaScript?

- A Loops is used to perform repeated task.

`For example, `

- if we have an array and want to output each element in the array, rather than using the index number to do so one by one, we can simply loop through and perform this operation once.




- loop ka mtlb hota hain repeat hona agr hum logo ko koi kaam baar baar kr na hain toh hum log loop ka use kr skte hain jaise ki agr main ye bolu ki 1 se le k 100 tak number print kr do toh ye deficicult hoga ki tum 1 se le k 100 tak console.log() kro esi liye hum log loop ka use kr te hain ki tum es task ko ek hi baar main kr lo bina Baar Baar type kre `console.log(1)` , `console.log(2)` , `console.log(3)` to `console.log(100)`.


- repeat ka mtlb yaha ye hain ki koi bhi repeated task ye repeated task kuch bhi ho skta hain jaise ki  koi number ko print kr na 1000 times  yaha Print Repeat ho raha hain ya fir  koi Sting ko repeat kr na ya koi bhi chij jo repeat ho raha hain waha hum log loop ka use kr skte hain.

`Example` 

- Jub hum Instagram main Apne Profile main Jate hain toh waha Hum logo k Profile main Image or Video  Repeat ho raha ho ta hain toh waha pe loop ka use hota hain . YouTube pe Video ka Baar Baar dikh na yaha pe Video Repeat ho raha hain.

## Type of loop in JavaScript

###  For Loop:


`Syntax:`

````javascript

for (initialization; condition; increment/decrement) {
    // code block to be executed
}

````

- Initialization: Ye hissa sirf ek baar loop shuru hone se pehle execute hota hai. Aam taur par ise ek loop control variable initialize karne ke liye istemal kiya jata hai.


- Condition: Har iteration se pehle, ye shart evaluate hoti hai. Agar ye true hai, to loop chalta rahega; agar false hai, to loop khatam ho jata hai.


- Increment/Decrement: Har iteration ke baad execute hota hai. Ye loop control variable ko update karne ke liye istemal hota hai.


`Use Case:`

- Iterating over arrays or collections where you know the exact number of elements.

- Executing a block of code for a specific number of times.


`Example 1`
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}

```



 ### While Loop:

 - In JavaScript, a while loop is a control flow statement that repeatedly executes a block of code as long as a specified condition evaluates to true.

- while loop tab acha hai jab aap pehle se iterations ki sankhya ko nahi jaante, lekin har iteration se pehle ek shart ko check karna hai.

 ```javascript

initialization;
while (condition) {
  
increment/decrement;
 // code block to be executed
}


 ```

 - Condition: Har iteration se pehle evaluate hoti hai. Agar true hai, to loop chalta rahega; agar false hai, to loop khatam ho jata hai.


`Example`

 ```javascript

 let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}


 ```
 `Use Case:`

- Executing a block of code at least once, regardless of the condition.

- Looping until a specific condition is met, ensuring the code inside the loop executes at least once.

### for-in Loop

### for…of Loop

### do…while Loop