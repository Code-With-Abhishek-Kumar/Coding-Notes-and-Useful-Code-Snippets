const express = require('express')
const app = express();

const postSchema = require('./models/PostSchema');

const routeHandler = require('./middleware/routeHandler');
const db = require('./config/db');
app.use(express.static('public'))
app.set('view engine' , 'ejs' )

app.use(routeHandler)  // Handle all routes





app.get('/' , async function(res , req){
    let post =  await postSchema.find().populate('user_id')
    req.send(post)
    
    
    
})

app.listen(3000)