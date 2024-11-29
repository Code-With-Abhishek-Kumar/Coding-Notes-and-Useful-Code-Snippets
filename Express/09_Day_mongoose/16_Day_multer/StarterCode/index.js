import express from 'express'

const app = express()
import multer from 'multer'
// const upload = ())

import crypto from 'crypto'
import path from 'path'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/uploads')

    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12, function (err, byte) {
            const uniqueSuffix = byte.toString('hex').toLowerCase() + path.extname(file.originalname);  // Genrate a unique name for each time with ext name
            cb(null, uniqueSuffix);
        });


    }
})


const upload = multer({ storage: storage });

app.post('/upload', upload.single('uploaded_file'), (req, res) => {


    console.log('File:', req.file);

    // // console.log('File: original name', req.file.originalname);
    // console.log('File: path', req.file.path);
    // console.log('File: size', req.file.size);
    // console.log('Body:', req.body);
// res.send('upload')

    // if (!req.file) {
    //     console.error('No file uploaded');
    // }

   
      
    res.redirect('/')

})

// Start the server
app.listen(3000, (err) => {
    if (err) {
        console.error(err.message); // Log any server errors
    } else {
        console.log('Server is running on port 3000');
    }
});