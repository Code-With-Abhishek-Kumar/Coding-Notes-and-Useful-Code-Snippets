# Mongoose Schemas Query Helpers

**English**

- Mongoose Query Helpers are custom  methods that  make it easier to write and reuse queries. These helpers help you avoid repeating the same query logic in your code.


- Mongoose’s built-in query methods (like `.find()`, `.findOne()`, `.limit()`, `.skip()`) can be enhanced with custom methods to create complex queries or reusable query patterns. These custom methods, once defined, can be chained just like regular query methods.

- For example, if you often need to find users by age or status, you can create a helper to do that for you, and then reuse it whenever you need.


**Hinglish**

- Mongoose Query Helpers wo custom functions hote hain jo aap apne Mongoose schema mein create karte ho, jisse queries likhna aur reuse karna asaan ho jata hai. Ye helpers aapko baar-baar same query logic likhne se bachate hain.

- Jaise agar aapko baar-baar users ko age ya status ke basis pe find karna ho, toh aap ek helper function bana sakte hain, aur phir jab zarurat ho, usse reuse kar sakte hain.


## Why Use Query Helpers?

Query Helpers make your code:

**`Cleaner`**

-  No need to repeat the same query logic in different places.

- Aapko same query logic baar-baar likhne ki zarurat nahi padti.



**`Easier to read:`**


- Complex queries become simple by breaking them into smaller functions.

- Complex queries ko chhote functions mein divide kar ke simple banaya ja sakta hai.

**`Reusable:`**

- You can use these helpers wherever you need the same query logic.

- Aap in helpers ko jahan chahein use kar sakte hain jab same query logic chahiye ho.

## How to Create Query Helpers


- To create a Query Helper, you add a function to the query object of your schema. This object allows you to define custom functions that can be used in your queries.

- Query Helper banane ke liye, aap apne schema ke query object mein ek function add karte hain. Is object ke through aap custom functions define kar sakte ho jo queries mein use kiye ja sakte hain.


````js
schema.query.<helperName> = function() {
  // Your query logic
};

````

##  Example: Create and Use Query Helpers


````js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
});

// Query helper to find users by age
userSchema.query.findByAge = function(age) {
  return this.where('age').equals(age);
};

// Query helper to find users by age range
userSchema.query.filterByAgeRange = function(minAge, maxAge) {
  return this.where('age').gte(minAge).lte(maxAge);
};

// Query helper to find active users
userSchema.query.isActive = function() {
  return this.where('status').equals('active');
};

// Create the model
const User = mongoose.model('User', userSchema);




````


## Using Query Helpers:


````js
// Find active users aged 25
User.find().isActive().findByAge(25).exec((err, users) => {
  if (err) {
    console.log(err);
  } else {
    console.log(users);
  }
});

// Find users in the age range of 20 to 30
User.find().filterByAgeRange(20, 30).exec((err, users) => {
  if (err) {
    console.log(err);
  } else {
    console.log(users);
  }
});



````


## Explain code 

1. Setting Up Mongoose and Schema

- To use Mongoose in your Node.js application, you first need to require the mongoose package and set up a Schema. A schema defines the structure of documents in a MongoDB collection, including the types of fields and validation rules.

- Sabse pehle, Mongoose ko apne project me import karte hain aur ek schema define karte hain. Schema me hum batate hain ki ek document (jaise user ka data) ka format kya hoga.


````js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


````

 **Here:**

 - mongoose is the Mongoose library.

 - Schema is the Mongoose class that is used to define how a document in the MongoDB collection will look.



2. Now, we define the schema for our User model:


````js
const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
});


````

**In the userSchema:**

- `name`, `age`, and `email` are simple fields that store the user’s details.

- status field can only be `active` or `inactive`, with the default value set to 'active'.



**Creating Query Helpers**

````js

userSchema.query.findByAge = function(age) {
  return this.where('age').equals(age);
};


````

**this.where('age'):**

- Refers to the current query object (this), and where('age') specifies that the query will be applied on the age field of the document.

- Iska matlab hai ki query ko hum age field par apply kar rahe hain.

**.equals(age):**

- This is a query condition to match documents where the age field is equal to the given age value.

-  Yeh query condition hai jo yeh check karegi ki age field ka value kitna hai, jo age variable ke equal ho.


- Toh agar aap findByAge(25) use karenge, toh yeh 25 saal ke users ko dhundh lega.


````js
userSchema.query.filterByAgeRange = function(minAge, maxAge) {
  return this.where('age').gte(minAge).lte(maxAge);
};

````


this.where('age'): Age field par query lagayi ja rahi hai.


.gte(minAge): Yeh query condition hai jo minAge se zyada ya barabar age wale users ko dhundhegi.



.lte(maxAge): Yeh query condition hai jo maxAge se kam ya barabar age wale users ko dhundhegi.


### How to  Use Query Helper


````js

// Usage of query helpers
User.find().findByAge(25)
  .then(users => console.log(users))
  .catch(err => console.error(err));

User.find().filterByAgeRange(20, 30)
  .then(users => console.log(users))
  .catch(err => console.error(err));


````