


# C Basic Syntax


````c
#include <stdio.h> // Include standard input/output library

int main() {

    printf("Hello World");  // Print the result to the console
    return 0;    // End of the program
}

````


## 1. Include Statement: #include <stdio.h>

`````c
#include <stdio.h>
`````

 **`Purpose`**

- This line tells the computer to use a set of pre-written code from the `stdio.h` library.

- Ye line compiler ko batata hai ki `stdio.h` file ko include karna hai.


- `stdio.h` library input/output ke liye zaroori functions provide kr ta hain, jaise printf jo screen par text print karta hai.


**Why It’s Needed:**

- `stdio.h` library contains functions for doing input and output, like printing text on the screen.


## 2. Main Function: `int main()`


````c
int main() {
    // code goes here
}

````

- The main function is the starting point of execution in a C program. Every C program must have a main function.

- The `int` before `main` indicates that this function returns an integer value to the operating system upon completion.


- The code between `{ and }` is the body of the main function, where the actual execution happens.

- Ye main function hai jahan se program run hota hai

- `int` ka matlab hai ki ye function ek integer value return karega, jo operating system ko batata hai ki program sahi se chala ya nahi.


## 3. Curly Braces: `{ and }`

````c
{
    // code
}
````

- Curly braces mark the start and end of the main function’s code. Everything between them is the part of the program that gets executed.

- Ye curly braces batate hain ki main function ka code kahan se shuru hota hai aur kahan khatam hota hai.

- In braces ke beech ka code execute hota hai jab program run hota hai.

## 4. `printf("Hello World");`

````c
printf("Hello World");
````

- This line shows the text “Hello World” on the screen.

- Ye line "Hello World" text ko screen par print karti hai.

- `printf` is a function from the stdio.h library that handles displaying text.

-  `printf` ek function hai jo stdio.h file se aata hai aur text ko screen par dikhata hai.


## 5. `return 0;`

````c

return 0;

````


- The return statement ends the main function and returns a value to the operating system.

-  `0` is a common value used to indicate that the program executed successfully. 


-  Ye line main function ko khatam karti hai aur 0 return karti hai.

- `0 Ka Matlab`: 0 batata hai ki program successfully complete hua hai.


## Full Program in Hinglish


````c
#include <stdio.h>  // Standard input/output library ko include karo

int main() {  // Program ka main function jahan se execution shuru hota hai
    printf("Hello World");  // Screen par "Hello World" print karo
    return 0;  // Program ko successfully end karo aur 0 return karo
}

````


- Kya Hota Hai:

  1. `#include <stdio.h>` se zaroori functions include ho jaate hain.

  2. Program main function se shuru hota hai.
        printf function "Hello World" ko screen par dikhata hai.

   3. Program 0 return karke khatam hota hai, jo successful execution ko batata hai.

Yeh basic C program hai jo aapko programming ki basic syntax samajhne mein madad karta hai.