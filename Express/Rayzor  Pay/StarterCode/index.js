import express from 'express'
import Razorpay from 'razorpay'

import cors from 'cors';






var corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


const app = express()

// import path from 'path'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})










const razorpay = new Razorpay({
  key_id: 'rzp_test_f9jJDk2hzpjsEo', //   Enter Your  Rayzor pay key  here
  key_secret: 'KipNG5yhnrWT8jyzD1LoDhZi'  //   Enter Your  Rayzor pay key secret here
});



// Route to create a new order
app.post('/create-order', async (req, res) => {
    let { amount } =  await req.body;
    const options = {
        amount: amount * 100, // amount in paise (e.g., 50000 paise = INR 500)
        currency: 'INR',
        // receipt: 'order_rcptid_11' // unique identifier for the order
    };

    razorpay.orders.create(options, (err, order) => {
        if (err) {
            console.error('Error creating Razorpay order:', err);
            // Send a more detailed error response
            return res.status(500).json({ error: 'Error creating order', details: err });
        }

        console.log('Order created:', order);
        // Send the order details to the client
        res.json(order);
        if (order.status === 'created') {
            console.log('Order created successfully');
        } else {
            console.log('Order creation failed');
            
        }
    });
  });


// Start the server
app.listen(3000, (err) => {
    if (err) {
        console.error(err.message); // Log any server errors
    } else {
        console.log('Server is running on port 3000');
    }
});