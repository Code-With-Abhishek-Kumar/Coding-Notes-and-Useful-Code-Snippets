- When you create a Mongoose model using `mongoose.model("User", userSchema)`, the model name `"User"` is used internally to refer to the collection in MongoDB. However, MongoDB collection names are automatically derived from the model name in a specific way:

- Jab aap Mongoose model create karte hain using `mongoose.model("User", userSchema)`, to model name `"User"` internally MongoDB collection ko refer karta hai. Lekin, MongoDB collection names automatically model name se derive kiye jaate hain ek specific tarike se:

1. Model Name: "User"
2. Collection Name


````javascript
const User = mongoose.model("User", userSchema);

````
- Mongoose automatically pluralizes and lowercases the model name to determine the collection name.

- In this case, the collection name would be "users".

- Mongoose automatically model name ko pluralize aur lowercase kar deta hai collection name determine karne ke liye.

- Is case mein, collection name "users" hogi.


- Iska matlab hai ki jab aap is model ka use karke documents save karenge, wo `"users"` collection mein store ho jayenge aapke MongoDB database mein.