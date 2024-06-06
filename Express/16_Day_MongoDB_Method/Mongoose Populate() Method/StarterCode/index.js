const express = require('express');
const mongoose = require('mongoose')
const userSchema = require('./module/userSchema');
const postSchema = require('./module/postSchema');

const app = express();




// go  to  http://localhost:3000/createUser

app.get('/createUser', async function (req, res) {

  //  let CreatedUser =  await  userSchema.create({
  //         username: "abhi005",
  //         firstName: "Abhishek",
  //         lastName: "Gupta",
  //         email: "Abhishek@gmail.com",
  //         address: "hazaribagh"
  //    })

  let user = await userSchema.find()
  res.send(user)

})


// go  to  http://localhost:3000/createPost
app.get('/createPost', async function (req, res) {
  try {

    // let users = await userSchema.find();
    let post = await postSchema.find()
    res.send(post)
    // let userIDs = users.map(user => user._id.toString());


    // let userId = userIDs[0];

    // Create a new post with the userId as postedBy
    // let createdPost = await postSchema.create({
    //     title: "First Post",
    //     postedBy: userId
    // });

    // res.send(createdPost);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// go  to  http://localhost:3000/

app.get('/', async function (req, res) {

  const posts = await postSchema.find().populate('postedBy').exec();

  res.send(posts)

})



mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'))


app.listen(3000)