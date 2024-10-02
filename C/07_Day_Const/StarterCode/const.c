#include <stdio.h>

// Preprocessor Constants
#define MAX_USERS 100       // Preprocessor constant for maximum users
#define PI 3.14159          // Preprocessor constant for the value of PI

// Integer Constant
const int MAX_SIZE = 50;  // Constant integer

// Character Constant
const char NEWLINE = '\n'; // Constant character

// Floating-Point Constant
const float GRAVITY = 9.81f; // Constant floating-point number

// Double Precision Floating-Point Constant
const double E = 2.718281828459045; // Constant double precision number

// Constant String
const char* GREETING = "Hello, World!"; // Constant string literal

// Constant Array
const int CONSTANT_ARRAY[] = {10, 20, 30, 40, 50}; // Array of constant integers

// Structure Definition
typedef struct {
    const int id;         // Constant member of the structure
    const char name[50];  // Constant member of the structure
} Person;

void printPerson(const Person *p);

int main() {
    // Displaying preprocessor constants
    printf("Preprocessor Constants:\n");
    printf("MAX_USERS: %d\n", MAX_USERS);
    printf("PI: %.5f\n", PI);

    // Displaying constant variables
    printf("\nConstant Variables:\n");
    printf("MAX_SIZE: %d\n", MAX_SIZE);
    printf("NEWLINE character: %c", NEWLINE);
    printf("\nGRAVITY: %.2f\n", GRAVITY);
    printf("E: %.15f\n", E);

    // Displaying constant string
    printf("\nConstant String:\n");
    printf("GREETING: %s\n", GREETING);

    // Displaying constant array elements
    printf("\nConstant Array:\n");
    for (int i = 0; i < sizeof(CONSTANT_ARRAY)/sizeof(CONSTANT_ARRAY[0]); i++) {
        printf("%d ", CONSTANT_ARRAY[i]);
    }
    printf("\n");

    // Creating and displaying a constant structure
    Person p = {1, "John Doe"};
    printf("\nStructure Constants:\n");
    printPerson(&p);

    return 0;
}

// Function to print person details
void printPerson(const Person *p) {
    printf("Person ID: %d\n", p->id);
    printf("Person Name: %s\n", p->name);
}
