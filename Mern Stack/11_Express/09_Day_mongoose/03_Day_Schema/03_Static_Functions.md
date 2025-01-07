
## Table of Contents

1. [Introduction](#introduction)
2. [Key Features](#key-features)
   - [Class-Level Methods](#class-level-methods)
   - [Context](#context)
3. [Common Use Cases](#common-use-cases)
   - [Data Retrieval](#data-retrieval)
   - [Bulk Operations](#bulk-operations)
   - [Aggregation and Complex Queries](#aggregation-and-complex-queries)
   - [Custom Validation](#custom-validation)
   - [Data Transformation](#data-transformation)
4. [How to Define Static Methods](#how-to-define-static-methods)
5. [Benefits of Static Methods](#benefits-of-static-methods)


# Mongoose Static Functions

- Static functions Mongoose mein aise methods hote hain jo model par directly call kiye jaate hain, na ki individual document instances par. Yeh methods model ke liye general operations ke liye useful hote hain.

- Static functions in Mongoose are methods that are associated with the model itself, not with individual instances of the model (documents). They allow you to perform operations that apply to the model as a whole.


## Key Features

1. **Class-Level Methods:**

- Static methods schema par define kiye jaate hain aur model se directly access kiye ja sakte hain.


- Static methods are defined on the schema and can be accessed directly from the model.

2. **Context:** 

- Instance methods mein this current document ko refer karta hai, jabki static methods mein this model ko refer karta hai.

- In static methods, this refers to the model itself, while in instance methods, this refers to the current document.


## Common Use Cases


### **Data Retrieval** 

- Static methods data ko specific criteria ke basis par retrieve karne ke liye ideal hote hain.


- Static methods are ideal for retrieving documents based on specific criteria without the need to instantiate a document.


`Example`

````js

userSchema.statics.findByEmail = async function(email) {
    return await this.findOne({ email });
};

````

`Index.js`

````js

userSchema.statics.findByEmail = async function(email) {
    return await this.findOne({ email });
};


````

`Output:`

````json

{
    "_id": "60d5ec49b4e32c3f50b2a90b",
    "firstName": "John",
    "lastName": "Doe",
    "email": "test@example.com",
    "password": "hashedPassword",
    "status": "active"
}


````


### Bulk Operations

- Static methods can be used for updating or deleting multiple documents efficiently.

- They are ideal for bulk operations where you need to perform the same action on multiple documents.

- Multiple documents ko update ya delete karne ke liye static methods ka istemal karna bahut efficient hota hai.

`Example:`

```javascript

userSchema.statics.updateUserStatus = async function(userIds, status) {
    return await this.updateMany({ _id: { $in: userIds } }, { status });
};

```

`Usage in index.js:`

```javascript

await User.updateUserStatus(['60d5ec49b4e32c3f50b2a90b', '60d5ec49b4e32c3f50b2a90c'], 'active');

```

`Output:`

```json

{
    "acknowledged": true,
    "modifiedCount": 2,
    "matchedCount": 2
}

```


### Aggregation and Complex Queries Static methods 

- Complex queries ya aggregations ko handle karne ke liye bhi useful hote hain.

`Example:`

```javascript

userSchema.statics.countByStatus = async function(status) {
    return await this.countDocuments({ status });
};
```

`Usage in index.js:`

```javascript

const count = await User.countByStatus('active');
console.log(count);

```

`Output:`
```bash
5
```


### Custom Validation

- Static methods ko custom validation logic ke liye bhi istemal kiya ja sakta hai.

- You can use static methods to validate data before performing operations.

`Example:`

```javascript

userSchema.statics.validateUserData = function(data) {
    if (!data.email || !data.password) {
        throw new Error('Email aur password zaroori hain.');
    }
};

```

`Usage in index.js:`

```javascript

try {
    User.validateUserData({ email: 'test@example.com', password: 'password123' });
    console.log('Validation successful');
} catch (error) {
    console.error(error.message);
}

```
`Output:`

```bash
Validation successful
```


### Data Transformation


- Static methods ko data ko transform ya format karne ke liye bhi istemal kiya ja sakta hai.

- Static methods can be used to transform or format data before returning it.

`Example:`

```javascript

userSchema.statics.transformUserData = function(users) {
    return users.map(user => ({
        id: user._id,
        fullName: `${user.firstName} ${user.lastName}`,
        email: user.email,
    }));
};

```

`Usage in index.js:`

```javascript

const users = await User.find();
const transformedUsers = User.transformUserData(users);
console.log(transformedUsers);
```

`Output:`

```json

[
    {
        "id": "60d5ec49b4e32c3f50b2a90b",
        "fullName": "John Doe",
        "email": "test@example.com"
    },
    {
        "id": "60d5ec49b4e32c3f50b2a90c",
        "fullName": "Jane Smith",
        "email": "jane@example.com"
    }
]

```


# How to Define Static Methods

- Static method define karne ke liye schema ki statics property ka istemal karte hain:

```javascript

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    status: { type: String, default: 'inactive' }
});

// Static method define karna
userSchema.statics.findByEmail = async function(email) {
    return await this.findOne({ email });
};

const User = mongoose.model('User', userSchema);
module.exports = User;

```

### Benefits of Static Methods

1. Organization: Static methods se model-related logic ko organize karna asaan hota hai.
    
2. Reusability: Commonly used functions ko ek baar define karke reuse kiya ja sakta hai.


3. Clean Code: Logic ko model ke andar encapsulate karke code ko zyada readable aur maintainable banate hain.


4. Performance: Static methods bulk operations ko efficiently handle kar sakte hain.