<!-- TOC -->

- [Multer](#multer)
- [Usage](#usage)
    - [action="/upload"](#actionupload)
    - [method="post"](#methodpost)
    - [enctype="multipart/form-data"](#enctypemultipartform-data)
    - [Installation](#installation)
    - [Configure Multer](#configure-multer)
        - [Explanation](#explanation)
            - [Require Necessary Modules](#require-necessary-modules)
            - [Multer Storage Configuration](#multer-storage-configuration)
            - [Initialize Multer with Storage Configuration](#initialize-multer-with-storage-configuration)
            - [POST Route to Handle File Upload](#post-route-to-handle-file-upload)
            - [Start the Server](#start-the-server)

<!-- /TOC -->



# Multer

- Multer ek Node.js middleware hai jo HTML forms se aane wale multipart/form-data ko handle karne ke liye use hota hai. Jab bhi aap kisi HTML form se koi file upload karte hain, jaise ki images, videos, audios, etc., tab Multer aapko allow karta hai ki aap us uploaded data ko server par store kar sakein. Is data ko aap bad me access karke manipulate kar sakte hain, jaise ki use database me store karna ya phir kuch processing ke liye use karna.



- Multer is a Node.js middleware designed to handle multipart/form-data, which is typically used when uploading files via HTML forms. It simplifies the process of handling file uploads by providing an easy-to-use API and flexible configuration options.



# Usage


- Multer adds a body object and a file or files object to the request object. The `body` object `contains the values of the text fields` of the form, the `file or files` object `contains the files uploaded via the form.`


- Jab aap Multer ka use karte hain ek HTML form se file upload karne ke liye, to Multer request object mein do important objects add karta hai:


1. `body` Object





- `body` object mein HTML form ke text fields ke values hote hain jo server ko bheje jaate hain. Ye typically form ke `<input>` elements jaise text boxes, dropdowns, checkboxes etc. ke values ko contain karta hai. Jab aap form submit karte hain, ye values server tak POST request ke saath aati hain.

`Example:`


````html

<form action="/submit" method="post">
  <input type="text" name="username" />
  <input type="email" name="email" />
  <input type="submit" value="Submit" />
</form>



````

## action="/upload"


- `<form>` element ka action attribute ye specify karta hai ki jab form submit hota hai, to form data ko kis URL par send karna hai. Example mein action="/upload" ka matlab hai ki jab form submit hoga, to browser form data ko server par /upload endpoint par bhejega. Is endpoint par typically server-side script ya route hota hai jo form data ko process karta hai.


````html
<form action="/upload" method="post">
  <!-- Form fields -->
</form>

````

- Is example mein jab form submit hoga, browser form data ko server par /upload endpoint par bhejega.


## method="post"



 `<form>` element ka method attribute ye specify karta hai ki form data ko server tak kis HTTP method se bhejna hai. Sabse commonly use hone wale methods hai `GET` aur `POST`.


1. GET:

-  Form data ko query string ke roop mein URL ke saath bhejta hai. Ye chhote amounts of data ke liye suitable hai aur URL mein visible hota hai.

- Form se aaye wale data ko Url pe Show kr ta hain.

2. POST:


- Form data ko HTTP request ke body mein bhejta hai. Ye large amounts of data ke bhejne ke liye suitable hai aur GET ke comparison mein better security provide karta hai. kyu ki ye URl pe Show nhi kr ta 




````html

<form action="/upload" method="post">
  <!-- Form fields -->
</form>


````



## enctype="multipart/form-data"


- `<form>` element ka enctype attribute ye specify karta hai ki form data ko server tak kaise encode karna hai before sending. Ye attribute particularly important hai jab form mein `<input type="file">` elements shamil hote hain ya jab binary data bhejna zaroori hota hai.




1.  `enctype="application/x-www-form-urlencoded:` 

- Ye default value hota hai. Ye form data ko URL encode karta hai before sending server tak. Ye simple form data bhejne ke liye suitable hai bina file uploads ke.


2. `enctype="multipart/form-data": `


- Ye use hota hai jab form mein `<input type="file">` elements shamil hote hain. Ye specifically designed hai binary data jaise files ko handle karne ke liye. Jab is enctype ka istemal hota hai, form data ko ek series of parts mein bheja jata hai, har part mein form data ka ek portion hota hai, including file contents. Isse files ko server tak efficiently upload kiya ja sakta hai.



````html
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar">
  <!-- Other form fields -->
</form>


````


- Is example mein enctype="multipart/form-data" specify karta hai ki form binary data shamil kar sakta hai, specifically files upload karne ke liye. Ye enctype ensure karta hai ki user dwara select ki gayi file ` <input type="file">` se sahi tarah se server tak bheji jati hai.





## Installation

- To get started with Multer, you need to install it via npm:

````base
 npm install multer
````





## Configure Multer

- After installation, configure Multer in your Node.js application. Here's an example where we set up Multer to store uploaded files in a directory named uploads:




````javascript

const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const app = express();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where files will be stored
  },
  filename: function (req, file, cb) {
    // Generate a unique filename using crypto
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);
      cb(null, raw.toString('hex') + path.extname(file.originalname));
    });
  }
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

// POST route to handle file upload
app.post('/upload', upload.single('avatar'), function(req, res) {
  // 'avatar' should match the name attribute in your HTML form input field
  const uploadedFile = req.file; // Contains details of the uploaded file

  // Here you can perform actions with the uploaded file, such as saving it to a database
  // or processing it further
  res.send('File uploaded successfully');
});

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});



````


### Explanation


#### Require Necessary Modules

`````javascript
const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const app = express();

`````

`const express = require('express');`

- Imports the Express framework, which is used for building web applications in Node.js.


-  Express framework ko import karta hai, jo Node.js mein web applications banane ke liye use hota hai.

`const multer = require('multer');`


- Imports Multer, a middleware for handling multipart/form-data, which is used for file uploads.


- Multer ko import karta hai, jo multipart/form-data handle karne ke liye middleware hai, specifically file uploads ke liye.



`const crypto = require('crypto');`

 - Imports the built-in Node.js module crypto, which provides cryptographic functionality.


-  Node.js ka built-in crypto module ko import karta hai, jo cryptographic functionality provide karta hai.


`const path = require('path');`


 - Imports the built-in Node.js module path, which provides utilities for working with file and directory paths.

- Node.js ka built-in path module ko import karta hai, jo file aur directory paths ke saath kaam karne ke liye utilities provide karta hai.




`const app = express();`


- Creates an instance of the Express application.

- Express application ka instance banata hai


#### Multer Storage Configuration


````javascript

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where files will be stored
  },
  filename: function (req, file, cb) {
    // Generate a unique filename using crypto
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);
      cb(null, raw.toString('hex') + path.extname(file.originalname));
    });
  }
});



````


`multer.diskStorage({ ... }):`

- Configures Multer to store uploaded files on disk using diskStorage.


-  Multer ko configure karta hai file uploads ke liye disk storage ka upyog karke.



`destination:`

- Specifies the directory ('uploads/') where uploaded files will be saved. The callback function cb is called with null (no error) and the path where files should be stored.


- File ko store karne ke liye directory ('uploads/') specify karta hai. Callback function cb ko null (koi error nahi) aur file store hone wali path ke saath call karta hai.


`filename:` 


- Defines the filename for each uploaded file. It uses crypto.pseudoRandomBytes() to generate a random buffer of 16 bytes. This buffer is converted to a hexadecimal string (raw.toString('hex')) and combined with the original file extension (path.extname(file.originalname)) to create a unique filename for each uploaded file.



- Har uploaded file ke liye unique filename define karta hai. 

- crypto.pseudoRandomBytes() ka upyog karke random 16 bytes ka buffer generate hota hai. Is buffer ko hexadecimal string mein convert karta hai (raw.toString('hex')) aur original file extension ke saath combine karke unique filename banata hai (path.extname(file.originalname)).


#### Initialize Multer with Storage Configuration


````javascript
const upload = multer({ storage: storage });
````


`multer({ storage: storage }):` Initializes Multer middleware with the configured storage settings (storage).


#### POST Route to Handle File Upload


````javascript


app.post('/upload', upload.single('avatar'), function(req, res) {
  // 'avatar' should match the name attribute in your HTML form input field
  const uploadedFile = req.file; // Contains details of the uploaded file

  // Here you can perform actions with the uploaded file, such as saving it to a database
  // or processing it further
  res.send('File uploaded successfully');
});

````

- app.post('/upload', upload.single('avatar'), function(req, res) { ... });: Defines a POST route ('/upload') that handles file uploads.

 - upload.single('avatar') is Multer middleware that handles a single file upload where 'avatar' is the name attribute of the file input field in the HTML form.


- req.file: Contains details of the uploaded file such as fieldname, originalname, encoding, mimetype, size, and destination.


- Response Handling: In this example, upon successful file upload, the server responds with 'File uploaded successfully'.


#### Start the Server


````javascript
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});

````