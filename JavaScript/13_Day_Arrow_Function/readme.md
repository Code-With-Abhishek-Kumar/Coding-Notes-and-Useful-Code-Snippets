

## Fat Arrow function

fat arrow function ko 3 type se likh skte hain


Fat Arrow functions ko JavaScript mein kai alag-alag tareeko se lika ja sakta hai, aur yeh sabhi syntax ke saath alag-alag situations aur requirements ko handle karte hain. 



 a) basic fat arrow

````javascript
let functionName = (param1, param2) => {
  // Function body
};



````

 b) fat arrow with  Single Parameter

````javascript
let functionName = param => {
  // Function body
};



````




 c) fat arrow with explicit return


````javascript
let functionName = (param1, param2) => expression;

````


d) No Parameters

````javascript

let functionName = () => {
  // Function body
};


````



`Example`


- `functionName:` This is the name of the function (optional for variable assignment).

- `(param1, param2, ...):` Parameters (arguments) that the function accepts. If there's only one parameter, the parentheses can be omitted.

- `() =>:` The "Fat Arrow" symbol, which signifies that this is an Arrow function.

`{}:` The function body, where you write the logic of what the function should do.


### Examples