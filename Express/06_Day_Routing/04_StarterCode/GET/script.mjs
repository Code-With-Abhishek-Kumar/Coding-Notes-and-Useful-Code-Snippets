
import express from 'express'
var app = express()


// send html
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (request , response) => {
    response.send("<h1>Hello world</h1>")
})

// Sending Json 
app.get('/sendJson', (request , response) => {
    response.send(({name:"abhishek", language:"bca"}))
})

// respond with multiple json when a GET request is made to the /api/user
app.get('/api/user', (request , response) => {
    response.send([
        {id:1, username:"Manish" , displayName:"Manish Rana"},
        {id:2, username:"Karan" , displayName:"Karan Gupta"},
        {id:3, username:"Abhishek" , displayName:"Abhishek Gupta"},
    ])
})


// Define a route with query parameters
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search query: ${query}`);

  });




const PORT = 3001;

app.listen(PORT , function(err){
    if (err) console.log(err)
    console.log(`Server listening on Port http://localhost:${PORT}/`);
})