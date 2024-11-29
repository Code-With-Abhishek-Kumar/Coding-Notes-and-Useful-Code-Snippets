# Stack Memory vs. Heap Memory

Understanding how memory is managed in JavaScript involves knowing the differences between stack memory and heap memory.

## Stack Memory

- **Definition**: Stack memory is a type of memory that stores temporary data. It is used for static memory allocation, meaning the size of data is known at compile time.
  
- **Characteristics**:
  - **Fast Access**: Access to stack memory is very fast because it follows a Last In, First Out (LIFO) structure.
  - **Automatic Management**: When a function is called, its variables are stored in stack memory, and when the function exits, that memory is automatically freed.
  - **Limited Size**: Stack memory is typically smaller than heap memory, and if it runs out, a stack overflow error can occur.

- **Use Cases**: Stack memory is used for primitive data types (e.g., numbers, strings, booleans) and function calls.

### Hinglish
- **Definition**: Stack memory ek tarah ki memory hai jo temporary data store karti hai. Yeh static memory allocation ke liye use hoti hai, matlab data ka size compile time par pata hota hai.

- **Characteristics**:
  - **Fast Access**: Stack memory ka access bohot fast hota hai kyunki yeh Last In, First Out (LIFO) structure follow karti hai.
  - **Automatic Management**: Jab function call hota hai, toh uske variables stack memory mein store hote hain, aur jab function exit hota hai, tab woh memory automatically free ho jaati hai.
  - **Limited Size**: Stack memory aam tor par heap memory se chhoti hoti hai, aur agar yeh khatam ho jaaye, toh stack overflow error ho sakti hai.

- **Use Cases**: Stack memory primitive data types (e.g., numbers, strings, booleans) aur function calls ke liye use hoti hai.

## Heap Memory

- **Definition**: Heap memory is used for dynamic memory allocation, meaning data can be allocated and deallocated at runtime.
  
- **Characteristics**:
  - **Slower Access**: Access to heap memory is generally slower than stack memory due to the need for complex management and allocation processes.
  - **Manual Management**: Unlike stack memory, memory in the heap must be manually managed. If you create an object or array, you need to make sure to free it when you are done.
  - **Larger Size**: Heap memory is typically larger than stack memory, allowing for storage of larger objects and complex data structures.

- **Use Cases**: Heap memory is used for objects, arrays, and data structures whose size is not known at compile time.

### Hinglish
- **Definition**: Heap memory dynamic memory allocation ke liye use hoti hai, matlab data ko runtime par allocate aur deallocate kiya ja sakta hai.

- **Characteristics**:
  - **Slower Access**: Heap memory ka access aam tor par stack memory se slower hota hai kyunki yeh complex management aur allocation processes ki zaroorat hoti hai.
  - **Manual Management**: Stack memory ke contrast, heap memory ko manually manage karna padta hai. Agar aap ek object ya array create karte hain, toh aapko ensure karna hota hai ki jab aap use khatam karte hain, tab aap usse free karein.
  - **Larger Size**: Heap memory aam tor par stack memory se badi hoti hai, jo bade objects aur complex data structures ko store karne ki suvidha deti hai.

- **Use Cases**: Heap memory objects, arrays, aur data structures ke liye use hoti hai jinka size compile time par nahi pata hota.
