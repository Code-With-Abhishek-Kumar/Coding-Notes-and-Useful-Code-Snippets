#include <stdio.h>

int main() {
    // Integer Variable
    int age = 25; // Represents the age of a person
    
    // Float Variable
    float heightInMeters = 1.75f; // Represents height in meters
    
    // Double Variable
    double piValue = 3.141592653589793; // Represents the value of pi
    
    // Character Variable
    char initialLetter = 'J'; // Represents the initial letter of a name
    
    // Unsigned Integer Variable
    unsigned int numberOfItems = 150; // Represents the number of items (cannot be negative)
    
    // Short Integer Variable
    short temperatureInCelsius = 30; // Represents the temperature in Celsius
    
    // Long Integer Variable
    long distanceInKilometers = 123456L; // Represents a distance in kilometers
    
    // Long Long Integer Variable
    long long largePopulation = 9876543210LL; // Represents a large population count
    
    // Boolean Variable (C99 Standard or later)
    _Bool isWeekend = 1; // Represents whether it is the weekend (1 for true, 0 for false)
    
    // Print all variables with descriptive text
    printf("Age: %d years\n", age);
    printf("Height: %.2f meters\n", heightInMeters);
    printf("Value of Pi: %.15f\n", piValue);
    printf("Initial Letter: %c\n", initialLetter);
    printf("Number of Items: %u\n", numberOfItems);
    printf("Temperature: %d°C\n", temperatureInCelsius);
    printf("Distance: %ld kilometers\n", distanceInKilometers);
    printf("Large Population: %lld\n", largePopulation);
    printf("Is it the weekend? %d\n", isWeekend); // 1 for true, 0 for false
    
    return 0;
}
