

## Table of Contents


## Table of Contents

1. [Mongoose Schema](#mongoose-schema)
2. [Example](#example)
3. [Mongoose Schema Types](#mongoose-schema-types)
   - [1. String](#1-string)
   - [2. Number](#2-number)
   - [3. Date](#3-date)
   - [4. Buffer](#4-buffer)
   - [5. Boolean](#5-boolean)
   - [6. Mixed](#6-mixed)
   - [7. ObjectId](#7-objectid)
   - [8. Array](#8-array)
   - [9. Decimal128](#9-decimal128)
   - [10. Map](#10-map)
   - [11. UUID](#11-uuid)
4. [Creating a Mongoose Model](#creating-a-mongoose-model)
5. [Understanding the _id Property](#understanding-the-_id-property)
6. [Overwriting the Default _id](#overwriting-the-default-_id)
7. [Disable _id](#disable-_id)



# Mongoose  Schema 


In Mongoose, a schema defines the structure of documents in a collection. It specifies what fields the documents will have and the data types for each field. This helps maintain consistency in the database. You can define various data types like `String`, `Number`, `Date`, etc.


- Mongoose mein schema documents ke structure ko define karta hai ek collection mein. Ye batata hai ki documents mein kaunse fields honge aur har field ka data type kya hoga. Ye database mein consistency maintain karne mein madad karta hai.

### `Example`

````js


const blogSchema = new Schema({
  title: String, // Title of the blog post
  author: String, // Author's name
  body: String, // Content of the blog post
  comments: [{ body: String, date: Date }], // Array of comments
  date: { type: Date, default: Date.now }, // Date of creation
  hidden: Boolean, // Whether the post is hidden
  meta: {
    votes: Number, // Number of votes
    favs: Number // Number of favorites
  }
});


````


# Mongoose Schema Types

### **1. String**

`Description:`

- Represents textual data.

- Can store any characters, including letters, numbers, and symbols.

- Commonly used for names, emails, descriptions, etc.

- String type textual data ko represent karta hai. Isme koi bhi characters store kiye ja sakte hain, jaise letters, numbers, aur symbols.

**`Example`**


```js

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});


```




### **2. Number**

`Description:`

- Represents numerical data (both integers and floats).

- Used for age, price, counts, etc.

- Number type numerical data ko represent karta hai. Iska use age, price, counts, etc. ke liye hota hai.


**`Example`**


```js

const productSchema = new mongoose.Schema({
  price: Number,
  stock: Number
});


```




### **3. Date**

`Description:`

- Represents date and time.

- Used for timestamps, birthdays, etc.

- Date type date aur time ko represent karta hai. Iska use timestamps, birthdays, etc. ke liye hota hai.


**`Example`**


```js

const eventSchema = new mongoose.Schema({
  eventDate: Date
});


```

<!--  -->


### **4.  Buffer**

`Description:`

- Represents binary data (like images or files).

- Useful for storing images or file data.

- Buffer type binary data ko represent karta hai, jaise images ya files. Iska use images ya file data store karne ke liye hota hai.


**`Example`**


```js

const fileSchema = new mongoose.Schema({
  data: Buffer
});


```



### **5. Boolean**

`Description:`

- Represents true or false values.

- Used for flags, status, etc.

- Boolean type true ya false values ko represent karta hai. Iska use flags, status, etc. ke liye hota hai.

**`Example`**


```js

const taskSchema = new mongoose.Schema({
  completed: Boolean
});



```








### **6. Mixed**

`Description:`

- Represents any type of data.

- Used when the data structure is not fixed.

- Mixed type kisi bhi type ka data represent karta hai. Iska use tab hota hai jab data structure fixed nahi hota.

**`Example`**


```js

const flexibleSchema = new mongoose.Schema({
  data: mongoose.Schema.Types.Mixed
});


```




### **7. ObjectId**

`Description:`

-  Represents a unique identifier for a document in MongoDB.

- Used for referencing other documents.

- ObjectId type MongoDB mein document ka unique identifier represent karta hai. Iska use dusre documents ko reference karne ke liye hota hai.

**`Example`**


```js

const commentSchema = new mongoose.Schema({
  postId: mongoose.Schema.Types.ObjectId
});



```




### **8. Array**

`Description:`

- Represents an array of values.

- Used for lists, such as tags or comments.

- Array type values ka ek array represent karta hai. Iska use lists, jaise tags ya comments ke liye hota hai.

**`Example`**


```js

const blogSchema = new mongoose.Schema({
  tags: [String]
});



```




### **9. Decimal128**

`Description:`

- Represents a 128-bit decimal-based number.

- Useful for high precision decimal values like currency.

- Decimal128 type 128-bit decimal-based number ko represent karta hai. Iska use high precision decimal values, jaise currency, ke liye hota hai.

**`Example`**


```js

const orderSchema = new mongoose.Schema({
  totalAmount: mongoose.Schema.Types.Decimal128
});


```



### **10.  Map**

`Description:`

- Represents a map of key-value pairs.

-  Useful for dynamic fields where the number of keys is unknown.

- Map type key-value pairs ka ek map represent karta hai. Iska use dynamic fields ke liye hota hai jahan keys ki sankhya unknown hoti hai.

**`Example`**


```js

const settingsSchema = new mongoose.Schema({
  preferences: {
    type: Map,
    of: String
  }
});


```


<!--  -->


### **11.  UUID**

`Description:`

- Represents a universally unique identifier.

-  Used for uniquely identifying objects in an application.

- UUID type ek universally unique identifier ko represent karta hai. Iska use objects ko uniquely identify karne ke liye hota hai.

**`Example`**


```js

const userSchema = new mongoose.Schema({
  uuid: mongoose.Schema.Types.UUID
});



```

## Creating a Mongoose Model

- To work with a schema, we need to convert it into a model using the following syntax:

- Model banane ke liye humein apne schema ko model mein convert karna padta hai. Yeh syntax use karte hain:

`mongoose.model`: This function takes two arguments: the model name `('Blog')` and the schema `(blogSchema)`. It returns a model that you can use to interact with the database.



```js

const Blog = mongoose.model('Blog', blogSchema);
// Ready to go!


```


## Understanding the `_id Property`

- By default, Mongoose adds an `_id` property to every schema. This `_id` is of type `ObjectId`, which uniquely identifies each document.

- When you create a new document, Mongoose automatically generates an _id for it:


- Default behavior mein, Mongoose har schema mein _id property add karta hai. Yeh _id type ObjectId hota hai jo har document ko uniquely identify karta hai.



```js

const schema = new Schema();
schema.path('_id'); // ObjectId { ... }

```


## Overwriting the Default _id


- You can replace the default `_id` with your own identifier type, but you must ensure that the document has an `_id` before saving it.

- Aap default _id ko apne identifier type se replace kar sakte hain, par aapko yeh ensure karna hoga ki document mein _id hai jab aap ise save karte hain.



```js
const schema = new Schema({
  _id: Number // <-- Overwriting Mongoose's default `_id`
});
const Model = mongoose.model('Test', schema);

const doc = new Model();
await doc.save(); // Throws "document must have an _id before saving"

doc._id = 1;
await doc.save(); // Works


```



## Disable _id


- You can also disable `_id` using this syntax:

- Aap is syntax ka use karke bhi `_id` ko disable kar sakte hain:


```js
const nestedSchema = new Schema({
  _id: false, // <-- Disable _id
  name: String
});


```



## Instance Methods


- Mongoose mein instance methods aapko custom functions define karne ki suvidha dete hain jo individual document instances par operate karte hain. Inka istemal karke aap apne code ko aur organized aur maintainable bana sakte hain.


- Instance methods in Mongoose allow you to define custom functions that operate on individual document instances. Using these methods helps you keep your code organized and maintainable.


### What Do Instance Methods Do?

1. Encapsulate Logic:


 - Instance methods se aap related functionality ko model ke andar encapsulate kar sakte hain. Encapsulation ka matlab hai kisi cheez ko uske context mein band karna, jisse aapka code modular aur organized rehta hai. Jab aap instance methods ka istemal karte hain, to aap un functions ko directly apne data model ke saath link karte hain, jisse samajhna aasan hota hai ki kaunsa logic kis data se related hai. Is tarah se, aapka code structured hota hai, aur aap easily dekh sakte hain ki kis model ki functionalities kya hain, jo maintenance aur readability dono ko enhance karta hai.