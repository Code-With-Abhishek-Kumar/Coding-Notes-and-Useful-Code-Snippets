
## Deep Copy vs. Shallow Copy

When working with objects and arrays in JavaScript, it's important to understand the concepts of deep copy and shallow copy.

### Shallow Copy

- **Definition**: A shallow copy creates a new object or array that has the same top-level properties as the original. However, if any properties are references to other objects, only the references are copied.

- **Characteristics**:
  - **References Shared**: Changes to nested objects or arrays in the copied object will affect the original object, as both reference the same memory location.
  
- **Example**:

  ```javascript
  let original = { a: 1, b: { c: 2 } };
  let shallowCopy = { ...original }; // or Object.assign({}, original);
  
  shallowCopy.b.c = 3; // This will also change original.b.c to 3

  ```


  ### Hinglish

- **Definition:** Shallow copy ek naya object ya array banata hai jisme original ki tarah ke top-level properties hoti hain. Lekin agar koi properties dusre objects ke references hain, toh sirf references copy hote hain.

- **Characteristics:**

- References Shared: Agar copied object mein nested objects ya arrays ko change kiya jaye, toh yeh original object ko bhi affect karega, kyunki dono same memory location ko reference karte hain.

**Example:**

```javascript

    let original = { a: 1, b: { c: 2 } };
    let shallowCopy = { ...original }; // ya Object.assign({}, original);

    shallowCopy.b.c = 3; // Yeh bhi original.b.c ko 3 mein badal dega

```

### Deep Copy

- **Definition:** A deep copy creates a new object or array and recursively copies all properties from the original object, ensuring that nested objects are independent.

- **Characteristics:**
        Independent Copies: Changes to nested objects in the copied object do not affect the original object, as they are stored in different memory locations.

    `Example:`

```javascript

    let original = { a: 1, b: { c: 2 } };
    let deepCopy = JSON.parse(JSON.stringify(original));

    deepCopy.b.c = 3; // This will not change original.b.c

```

### Hinglish

- **Definition:** Deep copy ek naya object ya array banata hai aur recursively original object se sabhi properties ko copy karta hai, jisse ensure hota hai ki nested objects independent hain.

- **Characteristics:**
        Independent Copies: Copied object mein nested objects ko change karne par original object ko koi asar nahi padta, kyunki yeh alag memory locations mein store hote hain.

**Example:**


```javascript

let original = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.c = 3; // Yeh original.b.c ko nahi badlega

```