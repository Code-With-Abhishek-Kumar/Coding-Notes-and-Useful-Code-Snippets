const express = require('express')
const app = express();
app.set('view engine' , 'ejs' )
const db = require('./config/db');
const UserSchema = require('./models/UserSchema')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Create a new user

app.get('/create', (req , res) => {
// Enter These Data To Create User and go to http://localhost:3000/create


    // UserSchema.create({
    //     username: 'John Doe',
    //     email: 'john@example.com',
    //     password: 'password123'
    // })
    // .then(user => {
    //     res.json(user);
    // })

    res.redirect('/')

});



// Use async/await to fetch all users from the database
app.get('/' , async function(res , req){
 
// The `find` method retrieves all documents (users) from the MongoDB collection
// associated with the `UserSchema`.
   let users = await UserSchema.find()
    req.send(users)
    console.log(users)
    
    
    
    
})

app.listen(3000)