# Constants in C

- The constants in C are the read-only variables whose values cannot be modified once they are declared in the C program. The type of constant can be an integer constant, a floating pointer constant, a string constant, or a character constant. In C language, the const keyword is used to define the constants.

a constant in C is a variable that cannot be modified once it is declared in the program. We can not make any change in the value of the constant variables after they are defined.

- Fixed Values in C that do not change during execution.

- Constans are defined using `#defined` or `const`

**Syntax to Define Constant**

```c
const data_type var_name = value;
```

**Types of Constants in C**

- Integer Constant
- Character Constant
- Floating Point Constant
- Double Precision Floating Point Constant
- Array Constant
- Structure Constant

## 1. **Integer Constant**

**Definition:** An integer constant is a whole number written directly in the code. It can be in decimal (base 10), octal (base 8), or hexadecimal (base 16) format.

**Syntax:**

```c
const int variableName = value;

```

**Example:**

```c
const int DECIMAL = 123;     // Decimal integer constant
printf("Decimal: %d\n", DECIMAL);
const int OCTAL = 0123;      // Octal integer constant (starts with 0)
printf("Octal: %o\n", OCTAL);

const int HEXADECIMAL = 0x7B; // Hexadecimal integer constant (starts with 0x)

   printf("Hexadecimal: %X\n", HEXADECIMAL);

```

**Explanation:**

- `DECIMAL` is a regular decimal integer.

- `OCTAL` starts with 0, indicating that it's an octal number.

- `HEXADECIMAL` starts with 0x, indicating that it's a hexadecimal number.

## 2. **Character Constant**

**Definition:** A character constant represents a single character enclosed in single quotes.

**Syntax:**

```c

const char variableName = 'character';
```

**Examples:**

```c
const char LETTER = 'A';      // Single character constant
    printf("Letter: %c\n", LETTER);
const char NEWLINE = '\n';    // Special character constant (newline)
  printf("Newline character: %c", NEWLINE);


```


**Explanation:**

- **LETTER** holds a single character 'A'.
- **NEWLINE** holds the newline escape sequence.






## 3. **Floating-Point Constant**

**Definition:** A floating-point constant is a number that includes a decimal point.

**Syntax:**

```c

const float variableName = value;   // For float
```

**Examples:**

```c
const float PI = 3.14f;        // Floating-point constant
  printf("PI: %.2f\n", PI);

```


**Explanation:**

- **PI** represents a floating-point number with a decimal point. The suffix f specifies that it's a float.





## 4. **Double Precision Floating-Point Constant**

**Definition:** A double precision floating-point constant provides more precision than a `float`.

**Syntax:**

```c

const double variableName = value;
```

**Examples:**

```c
const double E = 2.718281828459045; // Double precision constant
 printf("E: %.15f\n", E);

```


**Explanation:**

- **E** represents a double precision floating-point number with high precision.


## 5. **Constant Array**

**Definition:** An array of constants where each element of the array is immutable.

**Syntax:**

```c

const int arrayName[] = {value1, value2, ...};
```

**Examples:**

```c
const int CONSTANT_ARRAY[] = {10, 20, 30, 40, 50}; // Array of constants
 for (int i = 0; i < sizeof(CONSTANT_ARRAY)/sizeof(CONSTANT_ARRAY[0]); i++) {
        printf("%d ", CONSTANT_ARRAY[i]);
    }
    printf("\n");

```


**Explanation:**

- **CONSTANT_ARRAY** is an array where each element is a constant integer.




<!--  -->


## 5. **Constant Array**

**Definition:** An array of constants where each element of the array is immutable.

**Syntax:**

```c

const int arrayName[] = {value1, value2, ...};
```

**Examples:**

```c
const int CONSTANT_ARRAY[] = {10, 20, 30, 40, 50}; // Array of constants
 for (int i = 0; i < sizeof(CONSTANT_ARRAY)/sizeof(CONSTANT_ARRAY[0]); i++) {
        printf("%d ", CONSTANT_ARRAY[i]);
    }
    printf("\n");

```


**Explanation:**

- **CONSTANT_ARRAY** is an array where each element is a constant integer.

<!--  -->

## 6. **Constant String**

**Definition:** A constant string literal is a sequence of characters enclosed in double quotes, where the string itself is immutable.


**Syntax:**

```c
const char* variableName = "string";
```

**Examples:**

```c
const char* GREETING = "Hello, World!"; // Constant string literal
  printf("GREETING: %s\n", GREETING);
```


**Explanation:**

- **GREETING** is a pointer to a constant string literal. The const ensures that the pointer itself cannot be reassigned.







<!--  -->


## Notes On Constants

```c
const int minutesPerHour;
minutesPerHour = 60; // error we can't change the value of Const
```
