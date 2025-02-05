## Data Type


In JavaScript, a data type is value That determines the type of data that can be stored in a variable. There are two types of data types in TypeScript

- In TypeScript, we can specify the data type of a variable using a colon (:) but in JavaScript, we can assign any type of data to a variable without specifying the data type.

- TypeScript is a statically typed language, so we can specify the data type of a variable when we declare it but JavaScript is a dynamically typed language, so we can assign any type of data to a variable without specifying the data type.


### 1. Primitive Data Type

**a) number**

Number data type is used to represent integer and floating-point numbers.

```typescript

let age: number = 25;
let price: number = 9.99;

```

**b) string**

String data type is used to represent a sequence of characters.

```typescript

let name: string = "John";

```

**c) boolean**

Boolean data type is used to represent true and false values.

```typescript

let isPresent: boolean = true;

```

**d) undefined**

Undefined data type is used to represent a variable that does not have a value.

```typescript

let data: undefined = undefined;

```

**e) null**

Null data type is used to represent a variable that has a null value.

```typescript

let data: null = null;

```




2. Non-Primitive Data Type

**a) object**

Object data type is used to represent a collection of key-value pairs.

```typescript

let person: object = {
    name: "John",
    age: 25
};

```

**b) array**

Array data type is used to represent a collection of elements.

```typescript

let numbers: number[] = [1, 2, 3, 4, 5];

```

**c) function**

Function data type is used to represent a function.

```typescript

let greet: Function = function() {
    console.log("Hello");
};

```

**d) any**

Any data type is used to represent any type of data.

```typescript

let data: any = 10;

```

**e) void**

Void data type is used to represent a function that does not return any value.

```typescript

let greet: Function = function(): void {
    console.log("Hello");
};

```

**f) never**

Never data type is used to represent a function that never returns a value.

```typescript

let error: Function = function(): never {
    throw new Error("An error occurred");
};

```

**g) tuple**

Tuple data type is used to represent an array with a fixed number of elements.

```typescript

let person: [string, number] = ["John", 25];

```

**h) enum**

Enum data type is used to represent a set of named constants.

```typescript

enum Color {
    Red,
    Green,
    Blue
};

let color: Color = Color.Red;

```

**i) interface**

Interface data type is used to define the structure of an object.

```typescript

interface Person {
    name: string;
    age: number;
};

let person: Person = {
    name: "John",
    age: 25
};

```

**j) class**

Class data type is used to define a blueprint for creating objects.

```typescript

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
};

let person: Person = new Person("John", 25);

```

**k) type**

Type data type is used to define a type alias.

```typescript

type Person = {
    name: string;
    age: number;
};

let person: Person = {
    name: "John",
    age: 25
};

```

**l) symbol**

Symbol data type is used to represent a unique value.

```typescript

let id: symbol = Symbol("id");

```

**m) bigint**

Bigint data type is used to represent large integers.

```typescript

let bigNumber: bigint = 100n;

```

**n) unknown**

Unknown data type is used to represent any type of data but with type checking.

```typescript

let data: unknown = 10;

```

**o) never**

Never data type is used to represent a function that never returns a value.

```typescript

let error: Function = function(): never {
    throw new Error("An error occurred");
};

```


## Union Type

Union type is used to represent a value that can be of multiple types.

```typescript

let data: number | string = 10;
data = "John";

```

## Intersection Type


Intersection type is used to combine multiple types into one type.

```typescript

type Person = {
    name: string;
};

type Employee = {
    id: number;
};

type Manager = Person & Employee;

let manager: Manager = {
    name: "John",
    id: 1
};

```

## Type Assertion

Type assertion is used to tell the TypeScript compiler that a variable is of a specific type.

```typescript

let data: any = "John";

let name: string = <string>data;

```

