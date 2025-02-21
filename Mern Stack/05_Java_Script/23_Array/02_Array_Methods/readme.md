# Array Methods

## 1. Create Array using Constructor

- The “Array Constructor” refers to a method of creating arrays by invoking the Array constructor function.

```js
let arr = new Array(1, 2, 3, 4, 5)
console.log(arr) // [1, 2, 3, 4, 5]
// Display constructor property
console.log(arr.constructor) // [Function: Array]
```

## 2. Array length

- The length property returns the number of elements in an array and if the array is empty, it returns 0.

- The length property is automatically updated when we add or remove elements from the array.

- The length property is read-only, but you can change it by setting a new value.

```js
let arr = [1, 2, 3, 4, 5]
console.log(arr.length) // 5
```

## 3. Push

- The push() method adds one or more elements to the end of an array and returns the new length of the array.

- The push() method modifies the original array and returns the new length of the array.

```js
let arr = [1, 2, 3, 4, 5]
arr.push(6)
console.log(arr) // [1, 2, 3, 4, 5, 6]
```

## 4. Pop

- The pop() method removes the last element from an array and returns that element.

- The pop() method modifies the original array and returns the removed element.

```js
let arr = [1, 2, 3, 4, 5]

let removedElement = arr.pop()

console.log(arr) // [1, 2, 3, 4]

console.log(removedElement) // 5
```

## 5. Shift

- The shift() method removes the first element from an array and returns that removed element.

- The shift() method modifies the original array and returns the removed element.

```js
let arr = [1, 2, 3, 4, 5]

let removedElement = arr.shift()

console.log(arr) // [2, 3, 4, 5]

console.log(removedElement) // 1
```

## 6. Unshift

- The unshift() method adds one or more elements at the beginning of an array.

- The unshift() method modifies the original array and returns the new length of the array.

```js
let arr = [1, 2, 3, 4, 5]

arr.unshift(0)

console.log(arr) // [0, 1, 2, 3, 4, 5]
```

## 7. Concat

- The concat() method is used combine two or more arrays and returns a new array.

- The concat() method does not change the existing arrays, but instead returns a new array.

```js
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr3 = arr1.concat(arr2)

console.log(arr3) // [1, 2, 3, 4, 5, 6]
```

## 8. Slice

- The Slice() method is used to extract a part of an array and returns a new array.

- The slice() method does not change the original array, but instead returns a new array.

- The slice() method takes two arguments, the starting index and the ending index.

- The starting index is required, but the ending index is optional.

- If the Startig index is negative, it will start from the end of the array.

**Syntax**

```js
array.slice(start_Index, end_Index)
```

```js
let arr = [1, 2, 3, 4, 5]

let arr2 = arr.slice(1, 4)

console.log(arr2) // [2, 3, 4]
```

## 9. Splice

- The splice() method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements. It modifies the original array and returns an array of the removed elements.

- The splice() method changes the original array and returns the removed elements.

**Syntax**

```js

array.splice(start, deleteCount, item1, item2, ...)

```

- `start:` The index at which to start modifying the array.

- `deleteCount:` The number of elements to remove (optional). If 0, no elements are removed.

- `item1, item2, ...`: The elements to add to the array (optional). If no elements are provided, it just removes elements.

#### Examples:

**1. Remove elements:**

```js
let arr = [1, 2, 3, 4, 5]
arr.splice(2, 2) // Starts at index 2, removes 2 elements
console.log(arr) // Output: [1, 2, 5]
```

**2. Add elements:**

```js
let arr = [1, 2, 3, 4, 5]
arr.splice(2, 0, 'a', 'b') // Starts at index 2, removes 0 elements, adds 'a' and 'b'
console.log(arr) // Output: [1, 2, 'a', 'b', 3, 4, 5]
```

**3. Replace elements:**

```js
let arr = [1, 2, 3, 4, 5]
arr.splice(1, 2, 'x', 'y') // Starts at index 1, removes 2 elements, adds 'x' and 'y'
console.log(arr) // Output: [1, 'x', 'y', 4, 5]
```

**4. Remove all elements:**

```js
let arr = [1, 2, 3, 4, 5]

arr.splice(0, arr.length) // Removes all elements

console.log(arr) // []
```

**5. No elements removed, just added:**

```js
let arr = [1, 2, 3, 4, 5]

arr.splice(2, 0, 'a', 'b') // Starts at index 2, removes 0 elements, adds 'a' and 'b'

console.log(arr) // [1, 2, 'a', 'b', 3, 4, 5]
```

## 10. indexOf

The indexOf() method in JavaScript is used to find the index of a specified element in an array. It returns the index of the element if it is found, or -1 if the element is not present in the array.

**Syntax**

```js
array.indexOf(element, start_Index)
```

- `element:` The element to search for in the array.

- `start_Index:` The index at which to start the search. The default is 0. If the index is greater than or equal to the length of the array, -1 will be returned.

```js
let arr = [1, 2, 3, 4, 5]

let index = arr.indexOf(3)

console.log(index) // 2
```

## 11. lastIndexOf

The lastIndexOf() method in JavaScript is used to find the index of the last occurrence of a specified element in an array. It returns the index of the element if it is found, or -1 if the element is not present in the array.

**Syntax**

```js
array.lastIndexOf(element, start_Index)
```

- `element:` The element to search for in the array.

- `start_Index:` The index at which to start the search. The default is the length of the array minus 1. If the index is greater than or equal to the length of the array, the whole array will be searched.

```js
let arr = [1, 2, 3, 4, 5, 3]

let index = arr.lastIndexOf(3)

console.log(index) // 5
```

## 12. includes

The includes() method in JavaScript is used to check if an array contains a specified element. It returns true if the element is found in the array, otherwise, it returns false.

**Syntax**

```js
array.includes(element, start_Index)
```

- `element:` The element to search for in the array.

- `start_Index:` The index at which to start the search. The default is 0. If the index is greater than or equal to the length of the array, false will be returned.

```js
let arr = [1, 2, 3, 4, 5]

let result = arr.includes(3)

console.log(result) // true
```
