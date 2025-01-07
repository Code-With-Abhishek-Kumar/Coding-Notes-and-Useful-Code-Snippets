# Mongoose Schema Options Guide

This guide explains the important **Mongoose Schema options** that help you customize how your data is managed in MongoDB. These options let you control various aspects of your data, including validation, performance, and structure.

---

## 1. Timestamps

### English:
The `timestamps` option automatically adds two fields to your schema: `createdAt` and `updatedAt`. These fields are managed by Mongoose, and `createdAt` gets the document creation time, while `updatedAt` is updated whenever a document is modified.

### Hinglish:
**Timestamps** ka option aapke document me **createdAt** aur **updatedAt** fields automatically add kar deta hai. Ye fields Mongoose khud manage karta hai. Jab document create hota hai, toh **createdAt** set hota hai, aur jab document update hota hai, toh **updatedAt** field update hoti hai.

**Why we use it:**  
It helps in tracking the creation and modification times of documents without having to manually handle those fields.

---

## 2. Versioning

### English:
The `versionKey` (default is `__v`) is used for versioning. It helps in managing the version of the document. If a document is updated, its version is incremented. This prevents overwriting changes in a multi-user environment.

### Hinglish:
**VersionKey** ka use document versioning ke liye hota hai. Mongoose har update ke sath document ka version increment kar deta hai. Iska fayda yeh hota hai ki jab multiple log ek hi document ko update karte hain, toh changes overwrite nahi hote.

**Why we use it:**  
It ensures data consistency and prevents data from being overwritten when multiple users are editing the same document at the same time.

---

## 3. Strict Mode

### English:
Strict mode controls whether extra fields that are not defined in the schema can be saved. By default, it is set to `true`, which means any field not defined in the schema will be rejected. You can turn it off by setting `strict: false`.

### Hinglish:
**Strict mode** se aap control kar sakte ho ki schema me jo fields define nahi hain, kya unhe database me save karna hai ya nahi. Agar aap strict mode use karte ho, toh aapke schema me jo fields defined nahi hain, woh save nahi honge. Agar aap chahte ho ki extra fields save ho jayein, toh aap **strict: false** kar sakte ho.

**Why we use it:**  
It helps ensure that only the data you want is stored, avoiding the accidental insertion of unexpected fields.

---

## 4. Collection Name

### English:
By default, Mongoose uses the plural, lowercase form of your model name as the collection name in MongoDB. You can specify a custom collection name using the `collection` option.

### Hinglish:
By default, Mongoose aapke model ke name ko plural aur lowercase me convert karke collection name bana leta hai. Agar aapko custom collection name chahiye, toh aap **collection** option use kar sakte ho.

**Why we use it:**  
Sometimes, you may want to give your MongoDB collection a specific name rather than the automatically generated one. This option allows you to customize it.

---

## 5. _id Option

### English:
Each document in MongoDB automatically gets a unique `_id` field. You can disable this behavior by setting `_id: false` if you don’t need the `_id` field in your document.

### Hinglish:
Har MongoDB document ko ek unique **_id** milta hai. Agar aapko **_id** field nahi chahiye, toh aap **_id: false** kar sakte ho.

**Why we use it:**  
In some cases, like when migrating data or working with other ID systems, you might not want MongoDB to automatically generate the `_id` field.

---

## 6. Minimize Option

### English:
By default, Mongoose removes empty objects (`{}`) when saving documents. If you want to save empty objects, you can set `minimize: false`.

### Hinglish:
By default, Mongoose empty objects (`{}`) ko remove kar deta hai jab document save hota hai. Agar aap chahte ho ki empty objects bhi save ho jayein, toh aap **minimize: false** kar sakte ho.

**Why we use it:**  
This option is useful if you want to preserve empty objects in your documents, especially when they have meaning in your application.

---

## 7. Read and Write Concern

### English:
The `read` and `write` options control the consistency of your data when reading or writing to MongoDB. For example, you can specify `write: 'majority'` to ensure that the write is acknowledged by a majority of the nodes in a replica set.

### Hinglish:
**Read** aur **write** concerns se aap data consistency ko control kar sakte ho. Agar aapko ensure karna ho ki write operation majority nodes pe execute ho, toh aap **write: 'majority'** set kar sakte ho.

**Why we use it:**  
These options are crucial in distributed databases where you need to ensure strong consistency between nodes.

---

## 8. Auto Indexing

### English:
Mongoose automatically creates indexes for the fields in the schema. You can disable this automatic behavior by setting `autoIndex: false`, which is often done in production environments to improve performance.

### Hinglish:
By default, Mongoose schema ke fields pe indexes create kar leta hai. Agar aap production me ho aur aapko auto indexing nahi chahiye, toh aap **autoIndex: false** kar sakte ho.

**Why we use it:**  
Auto-indexing can impact performance, especially in production. Disabling it allows you to manually manage indexes to optimize query performance.

---

## 9. Custom Validation (Min/Max)

### English:
The `min` and `max` options help you enforce range restrictions on fields, like limiting a field to values between 10 and 100. You can use them for fields like age, price, etc.

### Hinglish:
**Min** aur **max** validation ka use aap numbers ya strings par range set karne ke liye kar sakte ho, jaise kisi field ko 10 se 100 ke beech rakhna.

**Why we use it:**  
To ensure that only valid values are entered into a field, you can enforce range restrictions for consistency and data integrity.

---

## 10. Custom Validators

### English:
Custom validators allow you to define your own logic to validate fields in a schema. This is useful for enforcing specific business rules that are not covered by default validators.

### Hinglish:
Aap **custom validators** use kar sakte ho apne custom logic ko define karne ke liye, jaise agar aapko koi field specific business rule ke according validate karni ho.

**Why we use it:**  
It allows you to write custom validation rules based on your application's unique requirements.

---

## 11. Virtuals

### English:
**Virtuals** are fields that don’t get saved to the database but are calculated based on other fields in the document. For example, you can create a `fullName` virtual by combining `firstName` and `lastName`.

### Hinglish:
**Virtuals** wo fields hote hain jo database me store nahi hote, par aap unhe dusre fields se calculate kar sakte ho, jaise `fullName` ko `firstName` aur `lastName` se combine karna.

**Why we use it:**  
Virtuals let you create derived fields (like full names) without storing them in the database, saving space and maintaining data integrity.

---

## 12. Subdocuments

### English:
Subdocuments are used when you want to embed a document inside another document. This helps in modeling complex data structures. For example, you might embed an `address` document inside a `user` document.

### Hinglish:
**Subdocuments** ka use tab hota hai jab aapko ek document ke andar dusra document embed karna ho, jaise aap **address** ko **user** document ke andar rakh sakte ho.

**Why we use it:**  
They allow you to model complex relationships between data, such as a user having an address, which makes data storage and retrieval more structured.

---

## 13. Pre/Post Middleware (Hooks)

### English:
**Middleware** in Mongoose allows you to run functions before or after certain operations, like saving or updating a document. For example, you can use `pre-save` middleware to modify data before saving it.

### Hinglish:
**Pre** aur **post middleware** ka use aapko document save ya update hone se pehle ya baad me kuch custom logic execute karne ke liye hota hai, jaise `pre-save` hook se data ko modify karna.

**Why we use it:**  
Middleware helps separate concerns, allowing you to run custom logic (like validation, transformation, or logging) before or after database operations, keeping the code clean and modular.

---

## Conclusion

Mongoose Schema options allow you to control how your MongoDB data is structured, validated, and optimized. By using these options effectively, you can ensure that your application is both efficient and reliable, with clean, consistent data.

These options help improve data consistency, performance, and the overall organization of your MongoDB documents, making them essential for building scalable applications.

For more information, visit the [Mongoose Documentation](https://mongoosejs.com/docs/guide.html).
