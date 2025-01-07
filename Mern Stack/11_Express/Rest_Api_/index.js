const express = require('express');


const app = express();
const book_data = require('./data/book.json');


app.get('/api/find/books', (req, res)=>{
return res.json({book_data})
    
})
// http://localhost:8000/api/find/book/2
app.get('/api/find/book/:id' , (req, res) =>{
    const id = req.params.id;
    const book = book_data.find(book => book.id === parseInt(id));
    return res.json(book);
})

app.delete('/api/delete/book/:id' , (req, res) =>{
    const id = req.params.id;
    const book = book_data.find(book => book.id === parseInt(id));
    delete book.id
})

const port = 8000;


app.listen(port, ()=> console.log(`Server Started at port ${port}`));  //server started at port 8000