const express = require('express')
var app = express()
const IP = require('ip');





// All requests to this router will
// first hit this middleware
app.use(function (req, res, next) {
    console.log("First Middleware ");
    next();
})
 
// Always invoked
app.use(function (req, res, next) {
	const ipAddress = IP.address();
    console.log(ipAddress)

    console.log("Second Middleware")
    next()
})
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// No MiddleWare
app.get('/'  , (req, res) => {
  res.send('Pass all middleware Welcome to home page')
});


var PORT = 8000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
// (PORT, () => console.log(`http://localhost:${PORT}`))
