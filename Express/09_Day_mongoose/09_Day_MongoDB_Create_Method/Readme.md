
`1. Model.create()`

- The create() method in Mongoose is a convenience method that combines both the creation and saving of documents in a single operation. It is used to create one or more documents and immediately save them to the database. This method is ideal when you want to insert new data into the database without needing to first instantiate a new model and then manually call save().

- Mongoose ka create() method ek shortcut hai jo ek hi operation mein document create aur save dono karta hai. Jab aapko ek ya zyada documents ko directly database mein insert karna ho, bina manually model instantiate kiye aur save() ko call kiye, tab yeh method use hota hai.


`2. Document.save()`

- The save() method is used when you have already instantiated a document using new Model() and made some changes to it. The save() method triggers the saving process, which includes validation and middleware, and persists the changes to the database. It is the traditional way of saving an individual document that has already been created.

- save() method tab use hota hai jab aapne pehle new Model() se document create kiya ho aur usmein kuch changes kiye ho. Phir aap save() method call karte ho jisse document database mein save ho jata hai. Is method se validation aur middleware bhi trigger hote hain.


`3. Model.insertMany()`


- The insertMany() method is used to insert multiple documents into the database at once. This method is particularly efficient when you need to insert large volumes of data, as it performs a single batch operation rather than inserting documents one at a time. Unlike create(), insertMany() does not run document validation or middleware by default, making it faster for bulk operations.

- insertMany() method multiple documents ko ek hi baar mein database mein insert karne ke liye use hota hai. Yeh method bulk operations ke liye bohot efficient hai, kyunki ek hi batch operation mein bohot saare documents insert ho jaate hain. create() ke comparison mein, insertMany() validation aur middleware ko skip karta hai, jo isse bulk operations ke liye fast banata hai.



`4. Model.insertOne()`



`5. Model.findOneAndRemove()`


`6. Model.bulkWrite()`


