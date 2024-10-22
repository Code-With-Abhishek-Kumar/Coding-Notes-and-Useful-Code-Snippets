

# Instance Methods


- Mongoose mein instance methods aapko custom functions define karne ki suvidha dete hain jo individual document instances par operate karte hain. Inka istemal karke aap apne code ko aur organized aur maintainable bana sakte hain.


- Instance methods in Mongoose allow you to define custom functions that operate on individual document instances. Using these methods helps you keep your code organized and maintainable.


### What Do Instance Methods Do?

1. Encapsulate Logic:


 - Instance methods se aap related functionality ko model ke andar encapsulate kar sakte hain. Encapsulation ka matlab hai kisi cheez ko uske context mein band karna, jisse aapka code modular aur organized rehta hai. Jab aap instance methods ka istemal karte hain, to aap un functions ko directly apne data model ke saath link karte hain, jisse samajhna aasan hota hai ki kaunsa logic kis data se related hai. Is tarah se, aapka code structured hota hai, aur aap easily dekh sakte hain ki kis model ki functionalities kya hain, jo maintenance aur readability dono ko enhance karta hai.


 - Mongoose mein instance methods aise custom functions hain jo individual document instances par operate karte hain. Ye aapko specific data ke saath relevant logic ko encapsulate karne ki suvidha dete hain, jisse aapka code clean, organized, aur maintainable rahta hai.


## How to Define Instance Methods

- To define an instance method in Mongoose, you add a function to the methods property of your schema. Here’s how to do it in detail:


````js

const mongoose = require('mongoose');

// Step 1: Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Step 2: Define an instance method
userSchema.methods.getGreeting = function() {
  return `Hello, my name is ${this.name}`;
};

// Step 3: Create a model
const User = mongoose.model('User', userSchema);

// Step 4: Create an instance of the model
const user = new User({ name: 'Alice', email: 'alice@example.com' });

// Step 5: Use the instance method
console.log(user.getGreeting()); // Output: Hello, my name is Alice


````


## Breakdown of the Example


`Defining the Schema:`

- A Mongoose schema is created for a user with fields `name` and `email`.

- Ek Mongoose schema create kiya gaya hai name aur email fields ke sath.

`Defining the Instance Method:`


- `userSchema.methods.getGreeting:` Here, we define an instance method named getGreeting. This method, when called on an instance of the User model, returns a string that includes the name of that specific user.

- userSchema.methods.getGreeting: Yahan hum getGreeting naam ka instance method define karte hain. Jab aap is method ko kisi instance par call karte hain, ye us specific user ka naam include karte hue greeting message return karta hai.





`Creating an Instance:`



- We create an instance of User by passing an object with `name` and `email`.


- Hum User ka ek instance create karte hain aur isme name aur email pass karte hain.

`Using the Instance Method:`

- When we call `user.getGreeting()`, it executes the method and returns the greeting message, using the name property from the instance (this.name).


- Jab hum user.getGreeting() call karte hain, ye method execute hota hai aur greeting message return karta hai, jisme this.name se user ka naam use hota hai.


## Instance Methods Ke Use Cases

Mongoose mein instance methods ka istemal karne ke kai maqsad hote hain, jo aapki application ki functionality aur code structure ko sudharne mein madadgar hote hain. Yahan kuch common use cases diye gaye hain:

### 1. Business Logic Implement Karna
Instance methods aapko specific business rules define karne ki suvidha dete hain. Misal ke taur par, agar aap ek e-commerce application bana rahe hain, to aap ek method bana sakte hain jo discounts calculate kare based on user loyalty status ya order value. Is tarah se aap business logic ko model ke andar encapsulate kar sakte hain, jo code ko zyada organized banata hai.


````js
userSchema.methods.calculateDiscount = function() {
    return this.isLoyal ? 10 : 0; // Example logic
};


````

### 2. Data Manipulation
Instance methods ka istemal aapke documents ke data ko manipulate karne ke liye kiya ja sakta hai. Aap methods bana sakte hain jo data ko format karein, validate karein, ya kuch fields ki values ko modify karein. Misal ke taur par, agar aapke paas `User` schema hai, to aap ek method bana sakte hain jo user ke password ko hash karein jab bhi wo save ho.



````js
const mongoose = require('mongoose');

// User schema define karte hain
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Instance method to convert name to uppercase
userSchema.methods.convertNameToUppercase = function() {
  this.name = this.name.toUpperCase();
};

// Model banate hain
const User = mongoose.model('User', userSchema);

// User instance create karte hain
const user = new User({ name: 'alice', email: 'alice@example.com' });
user.convertNameToUppercase(); // Name ko uppercase mein convert karega
user.save(); // Database mein save karega


````


### 3. Custom Validation:
Instance methods aapko complex validation logic implement karne ki suvidha dete hain. Jaise, agar aapko kisi field ki value ko validate karna hai jo dusre fields par depend karta hai.


````js
userSchema.methods.isEmailValid = function() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
};


````

### 4. Code Reusability
Instance methods aapko common functionality ko encapsulate karne ki suvidha dete hain, jisse code reusability badh jati hai. Aap ek method ko multiple jagah par istemal kar sakte hain, is se aapko duplicate code likhne ki zarurat nahi padti.


````js
// Example Method for sending email
userSchema.methods.sendWelcomeEmail = function() {
    emailService.send({
        to: this.email,
        subject: 'Welcome!',
        body: 'Thanks for joining us!',
    });
};


````

### 5. Complex Calculations:


Agar aapko kisi user ke transactions ya activities se related complex calculations karni hain, to aap instance methods ka istemal kar sakte hain. Isse aapke calculations modular aur easy to maintain hote hain.

````js

userSchema.methods.calculateTotalSpent = function() {
    return this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
};

````



