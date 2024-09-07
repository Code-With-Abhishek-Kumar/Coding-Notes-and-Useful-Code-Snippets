# C Format Specifiers

In many programming languages (like Python, Java, and C++), you use print functions to display the value of a variable. However, in C, things are a bit different.

In C programming, format specifiers are used in functions like `printf` and `scanf` to control the format of input and output. These specifiers tell the function how to interpret or display the data. They are crucial because C does not have higher-level features for formatted input and output like some other languages do.



**C programming mein, format specifiers `printf` aur `scanf` jese functions mein use kiye jaate hain taaki input aur output ka format control kiya ja sake. Ye specifiers batate hain ki data ko kaise samjha ya dikhaya jayega. Ye zaroori hote hain kyunki C mein formatted input aur output ke liye high-level features nahi hote jaise kuch dusri programming languages mein hote hain.**




<table>
    <thead>
        <tr>
            <th>Format Specifier</th>
            <th>Description</th>
            <th>Example Syntax</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>%c</strong></td>
            <td>For character type</td>
            <td><code>printf("%c", 'A');</code></td>
        </tr>
        <tr>
            <td><strong>%d</strong></td>
            <td>For signed integer type</td>
            <td><code>printf("%d", -123);</code></td>
        </tr>
        <tr>
            <td><strong>%e</strong> or <strong>%E</strong></td>
            <td>For scientific notation of floats</td>
            <td><code>printf("%e", 123.456);</code></td>
        </tr>
        <tr>
            <td><strong>%f</strong></td>
            <td>For float type</td>
            <td><code>printf("%f", 3.14);</code></td>
        </tr>
        <tr>
            <td><strong>%g</strong> or <strong>%G</strong></td>
            <td>For float type with the current precision</td>
            <td><code>printf("%g", 0.000123);</code></td>
        </tr>
        <tr>
            <td><strong>%i</strong></td>
            <td>For signed integer type (same as <strong>%d</strong>)</td>
            <td><code>printf("%i", -123);</code></td>
        </tr>
        <tr>
            <td><strong>%ld</strong> or <strong>%li</strong></td>
            <td>For long integer type</td>
            <td><code>printf("%ld", 1234567890L);</code></td>
        </tr>
        <tr>
            <td><strong>%lf</strong></td>
            <td>For double type</td>
            <td><code>printf("%lf", 3.1415926535);</code></td>
        </tr>
        <tr>
            <td><strong>%Lf</strong></td>
            <td>For long double type</td>
            <td><code>printf("%Lf", 3.14159265358979L);</code></td>
        </tr>
        <tr>
            <td><strong>%lu</strong></td>
            <td>For unsigned int or unsigned long</td>
            <td><code>printf("%lu", 123456789UL);</code></td>
        </tr>
        <tr>
            <td><strong>%lli</strong> or <strong>%lld</strong></td>
            <td>For long long integer type</td>
            <td><code>printf("%lld", 123456789012345LL);</code></td>
        </tr>
        <tr>
            <td><strong>%llu</strong></td>
            <td>For unsigned long long</td>
            <td><code>printf("%llu", 123456789012345ULL);</code></td>
        </tr>
        <tr>
            <td><strong>%o</strong></td>
            <td>For octal representation</td>
            <td><code>printf("%o", 255);</code></td>
        </tr>
        <tr>
            <td><strong>%p</strong></td>
            <td>For pointer type</td>
            <td><code>printf("%p", (void *)&num);</code></td>
        </tr>
        <tr>
            <td><strong>%s</strong></td>
            <td>For string type</td>
            <td><code>printf("%s", "Hello, world!");</code></td>
        </tr>
        <tr>
            <td><strong>%u</strong></td>
            <td>For unsigned int</td>
            <td><code>printf("%u", 123456);</code></td>
        </tr>
        <tr>
            <td><strong>%x</strong> or <strong>%X</strong></td>
            <td>For hexadecimal representation</td>
            <td><code>printf("%x", 255);</code></td>
        </tr>
        <tr>
            <td><strong>%n</strong></td>
            <td>Prints nothing but stores the number of characters printed so far into an integer variable</td>
            <td><code>printf("Count: %n", &count);</code></td>
        </tr>
        <tr>
            <td><strong>%%</strong></td>
            <td>Prints the % character</td>
            <td><code>printf("Percentage: %%");</code></td>
        </tr>
    </tbody>
</table>

