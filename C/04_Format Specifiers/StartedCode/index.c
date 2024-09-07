#include <stdio.h>

int main() {
    // Defining variables of different types
    int age = 30;             // Integer variable
    float height = 5.9;      // Floating-point variable
    char initial = 'A';      // Character variable
    char name[] = "Alice";  // String variable

    // Displaying an integer value
    printf("Age: %d\n", age);          // %d format specifier displays an integer

    // Displaying a floating-point value with one decimal place
    printf("Height: %.1f meters\n", height); // %.1f format specifier displays a float with one decimal place

    // Displaying a single character
    printf("Initial: %c\n", initial); // %c format specifier displays a single character

    // Displaying a string
    printf("Name: %s\n", name);      // %s format specifier displays a string

    // Demonstrating unsigned integer
    unsigned int score = 150;        // Unsigned integer variable
    printf("Score: %u\n", score);    // %u format specifier displays an unsigned integer

    // Demonstrating hexadecimal format
    int hexValue = 255;              // Integer variable
    printf("Hexadecimal: %x\n", hexValue); // %x format specifier displays an integer in hexadecimal format

    // Demonstrating scientific notation for floating-point numbers
    float largeNumber = 123456.789;  // Floating-point variable
    printf("Large Number: %e\n", largeNumber); // %e format specifier displays a float in scientific notation

    // Demonstrating pointer format
    int *ptr = &age;                // Pointer to integer
    printf("Address of age: %p\n", (void*)ptr); // %p format specifier displays the memory address of the pointer

    // Demonstrating width and precision
    float preciseValue = 3.14159;   // Floating-point variable
    printf("Precise Value: %.3f\n", preciseValue); // %.3f format specifier displays a float with three decimal places

    // Demonstrating width with padding
    int number = 42;                // Integer variable
    printf("Number with width: %5d\n", number); // %5d format specifier displays an integer with a minimum width of 5, padded with spaces

    return 0;
}
