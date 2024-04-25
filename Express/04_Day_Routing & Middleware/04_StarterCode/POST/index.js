const express = require('express')
var app = express()

app.use(express.json)
app.use(express.urlencoded({extended: true}))



app.get('/'  , (req, res) => {
  res.send('ff')
});

app.post('/post'  , (req, res) => {
  console.log(req.body)
  const name = req.body.name;
  const email = req.body.email;

  // Process the form data
  console.log(`Submitted Name: ${name}`);
  console.log(`Submitted Email: ${email}`);

  // Send a response to the client
  res.send('Form submitted successfully!');
});

var PORT = 8000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
// (PORT, () => console.log(`http://localhost:${PORT}`))
