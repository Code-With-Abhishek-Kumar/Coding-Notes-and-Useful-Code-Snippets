const express = require('express')

const app = express()

app.get('/', function(req,res){
res.send('Hello From Express')
})

app.listen(3000) 

// nodemon ./script.js 

// To to this link 

// http://localhost:3000/