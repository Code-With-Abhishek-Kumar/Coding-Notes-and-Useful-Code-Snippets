# Data Types

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftechbeamers.com%2Fwp-content%2Fuploads%2F2019%2F01%2FC-Datatypes-Range-and-Sizes.png&f=1&nofb=1&ipt=8ddf9424f8a09606efb4d27f6e5c0531d26a6403a5f41926719a0d9dccc8abbd&ipo=images">



# C Data Types

In C programming, data types define the type of data that a variable can hold. Understanding these data types helps in efficient memory management and proper operations on variables. 

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.geeksforgeeks.org%2Fwp-content%2Fuploads%2F20220808115138%2FDatatypesInC.jpg&f=1&nofb=1&ipt=c9c508c27201fc58e9de93fdbf4efb40fc54fa7581e31dbd96013e90518611f2&ipo=images">

## 1. Primitive Data Types

Primitive data types are the basic types provided by C.

### **1.1. `int`**

- **Description:** Represents integer values.
  - **Hinglish:** Integer values ko represent karta hai.
- **Size:** Typically 4 bytes (varies by system).
  - **Hinglish:** Aam taur par 4 bytes (system ke hisaab se vary karta hai).
- **Example:**
  ```c
  int a = 10;
  int b = -5;
  ```




### **1.2. `float`**




### Description
- **English:** Represents single-precision floating-point numbers.
- **Hinglish:** Single-precision floating-point numbers ko represent karta hai.

### Size
- **English:** Typically 4 bytes.
- **Hinglish:** Aam taur par 4 bytes.

### Example

```c
#include <stdio.h>

int main() {
   float pi = 3.14f; // Declare and initialize a float variable with the value 3.14
   printf("Value of Pi: %.2f\n", pi); // Print the value of pi
   return 0;
}

````

## **1.3. `Double`**

### Description

- **English:** Represents double-precision floating-point numbers.
- **Hinglish:** Double-precision floating-point numbers ko represent karta hai.

### Size

- **English:** Typically 8 bytes.
- **Hinglish:** Aam taur par 8 bytes.

### Example

```c
#include <stdio.h>

int main() {
    double e = 2.71828; // Declare and initialize a double variable with the value 2.71828
    printf("Value of e: %.5f\n", e); // Print the value of e
    return 0;
}
```

## **1.4. `Char`**

### Description

- **English:** Represents single characters.
- **Hinglish:** Single characters ko represent karta hai.

### Size

- **English:** Typically 1 byte.
- **Hinglish:** Aam taur par 1 byte.

### Example

```c
#include <stdio.h>

int main() {
    char letter = 'A'; // Declare and initialize a char variable with the value 'A'
    printf("Value of letter: %c\n", letter); // Print the value of letter
    return 0;
}

```

## 2. Derived Data Types

Derived data types are built from primitive data types.

### **2.1. `Arrays`**

#### Description

- **English:** A collection of elements of the same data type stored in contiguous memory locations.
- **Hinglish:** Ek hi data type ke elements ka collection jo contiguous memory locations mein store hota hai.

#### Size

- **English:** Size depends on the number of elements and the data type.
- **Hinglish:** Size number of elements aur data type par depend karta hai.

#### Example

```c
#include <stdio.h>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5}; // Declare and initialize an array of integers with 5 elements

    // Print array elements
    for (int i = 0; i < 5; i++) {
        printf("Element %d: %d\n", i, numbers[i]);
    }

    return 0;
}

```

## 2. Derived Data Types

Derived data types are built from primitive data types.

### **2.2. `Pointers`**

#### Description

- **English:** Variables that store the address of another variable.
- **Hinglish:** Variables jo kisi aur variable ka address store karte hain.

#### Size

- **English:** Typically 4 or 8 bytes, depending on the system architecture.
- **Hinglish:** Aam taur par 4 ya 8 bytes, system architecture ke hisaab se.

#### Example

```c
#include <stdio.h>

int main() {
    int value = 10;     // Declare an integer variable
    int *ptr = &value;  // Declare a pointer variable that stores the address of 'value'

    // Print the value and address using the pointer
    printf("Value: %d\n", value);            // Prints the value of the variable 'value'
    printf("Pointer Address: %p\n", (void *)ptr); // Prints the address stored in the pointer
    printf("Value through Pointer: %d\n", *ptr); // Dereference the pointer to get the value of 'value'

    return 0;
}
```

## 2. Derived Data Types

Derived data types are built from primitive data types.

### 2.3. Structures

#### Description

- **English:** A user-defined data type that groups related variables of different types.
- **Hinglish:** Ek user-defined data type jo alag-alag types ke related variables ko group karta hai.

#### Size

- **English:** Size depends on the structure’s members.
- **Hinglish:** Size structure ke members par depend karta hai.

#### Example

```c
#include <stdio.h>

// Define a structure named Person
struct Person {
    char name[50]; // Array of characters to store the person's name
    int age;       // Integer to store the person's age
};

int main() {
    // Declare and initialize a variable of type struct Person
    struct Person person1 = {"Alice", 30};

    // Print the values of the structure's members
    printf("Name: %s\n", person1.name); // Prints the name
    printf("Age: %d\n", person1.age);   // Prints the age

    return 0;
}
```

## 2. Derived Data Types

Derived data types are built from primitive data types.

### 2.4. Unions

#### Description

- **English:** A user-defined data type that can store different data types in the same memory location.
- **Hinglish:** Ek user-defined data type jo ek hi memory location mein different data types ko store kar sakta hai.

#### Size

- **English:** Size of the largest member.
- **Hinglish:** Sabse bade member ki size.

#### Example

```c
#include <stdio.h>

// Define a union named Data
union Data {
    int i;           // Integer type
    float f;         // Float type
    char str[20];    // Array of characters (string)
};

int main() {
    // Declare a variable of type union Data
    union Data data;

    // Assign a value to the integer member
    data.i = 10;
    printf("Integer: %d\n", data.i); // Prints the value of the integer member

    // Assign a value to the float member (this will overwrite the previous value)
    data.f = 3.14f;
    printf("Float: %.2f\n", data.f); // Prints the value of the float member

    // Assign a value to the string member (this will overwrite the previous value)
    snprintf(data.str, sizeof(data.str), "Hello");
    printf("String: %s\n", data.str); // Prints the value of the string member

    return 0;
}

```

## 3. User-Defined Data Types

User-defined data types allow you to create complex types that suit your needs.

### 3.1. Enumerations (enum)

#### Description

- **English:** Defines a set of named integer constants.
- **Hinglish:** Named integer constants ka set define karta hai.

#### Example


````c
#include <stdio.h>

// Define an enumeration named Weekday
enum Weekday {
    MONDAY,    // 0
    TUESDAY,   // 1
    WEDNESDAY, // 2
    THURSDAY,  // 3
    FRIDAY,    // 4
    SATURDAY,  // 5
    SUNDAY     // 6
};

int main() {
    // Declare and initialize a variable of type enum Weekday
    enum Weekday today = FRIDAY;

    // Print the value of the enum variable
    printf("Day of the week: %d\n", today); // Prints the integer value associated with FRIDAY

    return 0;
}

````

## 3. User-Defined Data Types

User-defined data types allow you to create complex types that suit your needs.

### 3.2. Typedef

#### Description
- **English:** Provides a way to create new names (aliases) for existing data types.
- **Hinglish:** Existing data types ke liye naye names (aliases) banane ka tarika provide karta hai.

#### Example

```c
#include <stdio.h>

// Create an alias for unsigned long
typedef unsigned long ulong;

int main() {
    // Declare and initialize a variable of type ulong
    ulong bigNumber = 100000UL;

    // Print the value of the variable
    printf("Big Number: %lu\n", bigNumber); // Prints the value of bigNumber

    return 0;
}
````
