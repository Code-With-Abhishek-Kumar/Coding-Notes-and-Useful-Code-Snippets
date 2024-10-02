## **Comments in C**


The comments in C are human-readable explanations or notes in the source code of a C program.These are the statements that are not executed by the compiler or an interpreter. make it easy and detailed.


 Comments can be used to explain code, and to make it more readable. These comments help humans understand what the code is doing, but they are ignored by the compiler or interpreter.



C mein comments woh human-readable explanations ya notes hote hain jo C program ke source code mein add kiye jaate hain. Ye comments code ko explain karne aur usse zyada readable banane ke liye use kiye jaate hain. Compiler ya interpreter in comments ko execute nahi karte; ye sirf humans ko samajhne mein madad karte hain ki code kya kar raha hai. Is tarah, comments program ke execution ko affect nahi karte, bas code ko samajhna asaan banate hain.


## Why Use Comments?


1. **Make Code Clear:** Explain what the code does.

2. **Help with Maintenance:** Make it easier to understand and update later.

3. **Aid in Debugging:** Temporarily disable code to find errors.



## Types of Comments in C

1. **Single-Line Comments**

A single-line comment in C starts with ( // ) double forward slash. It extends till the end of the line and we don’t need to specify its end.

- **Syntax:** 

````c
// This is a single line comment
````

- **Use:** For brief notes.

`Example`


```c



// C program to demonstrate commenting after line of code
#include <stdio.h>
 
int main() {
    // single line comment here
   
      printf("Welcome to GeeksforGeeks"); // comment here
    return 0;
}

```



2. **Multi-line comments**

The Multi-line comment in C starts with a forward slash and asterisk ( /* ) and ends with an asterisk and forward slash ( */ ). Any text between /* and */ is treated as a comment and is ignored by the compiler.

It can apply comments to multiple lines in the program. It is used to explain the code in detail.

- **Syntax:** 

````c
/* 

I am
multi line
Comment

*/
````

- **Use:** For longer explanations.

`Example`


```c



/* C program to illustrate 
use of 
multi-line comment */
#include <stdio.h>
int main(void)
{
    /*
    This is a
    multi-line comment
    */
   
      /*
    This comment contains some code which
    will not be executed.
    printf("Code enclosed in Comment");
    */
    printf("Welcome to GeeksforGeeks");
    return 0;
}


```


**Best Practices**

- **Be Clear:** Write comments that are easy to understand.
    
- **Explain Why:** Describe why you’re doing something, not just what.


- **Keep Updated:** Make sure comments match the code.