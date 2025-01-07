## Mongoose Basic

## 1. Schemas

- A schema in Mongoose is a blueprint for your data. It defines the structure of documents within a collection, specifying what fields (or properties) the documents will have and the type of data each field should contain. Schemas also include validation rules to ensure that the data being saved is correct and follows specific formats.

- Mongoose mein schema aapke data ka ek blueprint hota hai. Ye ek collection ke andar documents ki structure define karta hai, batata hai ki documents mein kaun-kaun se fields (ya properties) honge aur har field ka data type kya hoga. Schemas validation rules bhi shamil karte hain taaki sunishchit ho sake ki jo data save kiya ja raha hai wo sahi hai aur specific formats ka palan karta hai.

- **Example:**

```javascript
  const mongoose = require('mongoose');

  const userSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      age: { type: Number, min: 0 }
  });

// model
  const User = mongoose.model('User', userSchema);

```


## 2. Validation

- Validation in Mongoose ensures that the data you want to save meets specific rules and criteria. These rules and criteria are defined through a schema. A schema acts as a blueprint that outlines how documents should look and what fields they should contain. Through this schema, you can define data types, required fields, and any specific conditions (such as minimum or maximum values).

- Mongoose mein validation sunishchit karta hai ki jo data aap save karna chahte hain wo specific rules aur criteria ko meet kare. Ye rules aur criteria schema ke zariye define kiye jaate hain. Schema ek blueprint hota hai jo batata hai ki documents kaise dikhna chahiye aur unme kaunse fields hone chahiye. Is schema ke zariye aap data ke types, required fields, aur kisi bhi specific conditions (jaise minimum ya maximum values) ko define kar sakte hain.


- **Example**

```javascript
const newUser = new User({ name: 'John', email: 'john@example.com', age: -5 });
newUser.save((err) => {
    if (err) console.log('Validation Error:', err.message); // Will output validation error for age
});

```


## 3. Middleware

Middleware in Mongoose refers to functions that run at specific times during the lifecycle of a document. This can happen before or after you save, update, or delete a document. Middleware is useful for tasks like logging information, changing data, or enforcing business rules.




- In Mongoose, middleware  refers to functions that run at specific times during the lifecycle of a document. The lifecycle refers to the different stages a document goes through from creation to deletion. For example, when you create a new document and save it to the database, it goes through stages like being created, being saved, and possibly being updated or deleted later. Middleware allows you to run functions before or after these important stages, like changing data, logging information, or applying rules. This helps you manage how data behaves throughout its lifecycle and ensures everything works as expected.



- Mongoose mein, middleware functions  document ke lifecycle ke specific time par run hote hain. Lifecycle ka matlab hai ki ek document kaise alag-alag stages se guzarta hai jab se wo create hota hai aur jab tak wo delete hota hai. Jaise, jab aap ek naya document create karte hain aur use database mein save karte hain, ye stages se guzarta hai jaise create hona, save hona, aur baad mein update ya delete hona. Middleware aapko in important stages se pehle ya baad functions run karne ki suvidha deta hai, jaise data ko change karna, information log karna, ya rules apply karna. Ye aapko data ka behaviour manage karne mein madad karta hai throughout its lifecycle, aur sunishchit karta hai ki sab kuch expected tarike se kaam kare.


````javascript

const mongoose = require('mongoose');



// Define a user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 0 }
});



// Pre middleware to change name to uppercase before saving
userSchema.pre('save', function(next) {
    this.name = this.name.toUpperCase(); // Change name to uppercase
    next(); // Move to the next step
});



// Create a model based on the schema
const User = mongoose.model('User', userSchema);


// Example of saving a new user
const newUser = new User({ name: 'John', email: 'john@example.com', age: 25 });
newUser.save((err) => {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('User saved successfully:', newUser);
    }
});


````



## 4. Modeling Relationships


- Mongoose allows you to establish connections between different documents in your database. This can be accomplished using two primary methods: `references` and `embedded` documents. These approaches enable you to create complex data structures that accurately represent real-world relationships.

- Mongoose aapko apne database mein alag-alag documents ke beech connections establish karne ki suvidha deta hai. Ye do primary methods ke zariye kiya ja sakta hai: references aur embedded documents. Ye approaches aapko complex data structures banane mein madad karte hain jo real-world relationships ko sahi tarike se dikhate hain.


`References:` Is method mein alag collections se documents ko link karne ke liye reference ka use hota hai. Jaise, ek blog post ek user ko reference kar sakta hai jo usse likhta hai. Isse data normalized rehta hai aur duplication se bachta hai.

`Embedded Documents:` Is method mein related data ko ek hi document ke andar store kiya jata hai. Maan lijiye, agar aapke paas ek user hai jiske paas multiple addresses hain, to aap un addresses ko seedha user document mein embed kar sakte hain.



**User Model.js**

````js

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model('User', userSchema);


````




**Post Model.js**

````js

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // User ka reference
});

const Post = mongoose.model('Post', postSchema);

````


## 5. Built-in Type Casting in Mongoose


- Mongoose automatically casts values to the correct type based on the schema definition. This feature helps to reduce errors related to data types by ensuring that when data is saved, it conforms to the expected types defined in the schema. For instance, if you define a field as a number in your schema but provide a string value, Mongoose will automatically convert that string to a number.


- Mongoose automatically values ko schema definition ke aadhar par sahi type mein cast karta hai. Ye feature data types se judi errors ko kam karne mein madad karta hai, kyunki jab data save hota hai, ye sunishchit karta hai ki wo schema mein defined expected types ke anuroop hai. Maan lijiye, agar aapne ek field ko apne schema mein number define kiya hai lekin aap string value dete hain, to Mongoose us string ko automatically number mein convert kar dega.

**Example**

````js
const newUser = new User({ name: 'Alice', age: '25' }); // age will be cast to Number
newUser.save();


````


## 6. Query Helpers in Mongoose


- Query helpers in Mongoose provide a powerful API for interacting with the database. They make it easier to perform various operations such as filtering, sorting, and pagination on your data. With these helpers, you can build complex queries in a simple and readable way.


- Query helpers Mongoose mein database ke saath interact karne ke liye ek powerful API provide karte hain. Ye aapko filtering, sorting, aur pagination jaise operations ko aasan tarike se perform karne mein madad karte hain. In helpers ke saath, aap complex queries ko simple aur readable tareeke se bana sakte hain.


**Example**


````js
User.find({ age: { $gte: 18 } }).sort({ name: 1 }).exec((err, users) => {
    console.log(users); // Finds users aged 18 and above, sorted by name
});

````