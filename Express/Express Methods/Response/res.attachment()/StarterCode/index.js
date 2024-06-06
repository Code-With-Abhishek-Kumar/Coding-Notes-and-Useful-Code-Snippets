const express = require('express')
const app = express()

const path = require('path')

app.use(express.static('public'));

app.set('views engine' , 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))




app.get('/' , function(req, res){
    res.render('index.ejs')

})


// Download file

app.get('/download' , function(req, res){
    res.download('public/Images/1710771377627.jpg')
   
})


app.get('/attachment' , function(req, res){

    res.attachment('filename.png'); // Set suggested filename and clear previous headers
    res.send('This is the content of the file.');  // Send content

    
})


app.get('/download-Download-Image' , function(req, res){
   
    res.attachment('image.jpg'); // Set suggested filename and clear previous headers
    res.sendFile(__dirname + path.join('/public/Images/1710771377627.jpg')); // Download Image 

   

})




// Render Image in Web Browser

app.get('/render-image', function(req, res){
    // Assuming the image file is located in a directory named 'public/Images'
    const imagePath = __dirname + path.join('/public/Images/1710771377627.jpg');

    // Send the image file in the response 
    res.sendFile(imagePath);
});







app.listen(8000, function(error){

    if (error) {
        console.log(error)
    } else {
        console.log('Port listen on http://localhost:8000/')
    }

})


