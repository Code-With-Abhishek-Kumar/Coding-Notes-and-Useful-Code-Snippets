# Razorpay Integration Guide

## Overview

Razorpay ek payment gateway hai jo businesses ko online payments accept, process, aur disburse karne ki suvidha deta hai. Ye kai payment methods ko support karta hai, jise isay India mein kaafi businesses use karte hain.

Razorpay allows businesses to accept, process, and disburse payments online. It supports various payment methods, making it a popular choice for many businesses in India.

---

## How Razorpay Works

1. **Merchant Sign-Up**: Businesses Razorpay par account create karte hain.
   - **Sign Up**: Businesses create an account on Razorpay.
   
2. **API Keys**: Verification ke baad, businesses ko Key ID aur Key Secret milte hain for authentication.
   - **API Keys**: After verification, businesses receive a Key ID and Key Secret for authentication.

3. **Integration**: Apni application mein Razorpay ko integrate karte hain using SDK ya APIs.
   - **Integration**: Integrate Razorpay into your application using their SDKs or APIs.

4. **Order Creation**: Jab customer payment karne ke liye ready hota hai, tab ek order create kiya jata hai.
   - **Order Creation**: Create an order in your application when a customer intends to make a payment.

5. **Payment Processing**: Customer ko Razorpay ke checkout page par redirect kiya jata hai.
   - **Payment Processing**: Direct customers to Razorpay's checkout page to complete the payment.

6. **Payment Confirmation**: Razorpay payment status ke confirmation ke liye notifications bhejta hai.
   - **Payment Confirmation**: Razorpay sends notifications back to both the merchant and customer regarding payment status.

7. **Webhooks**: Real-time updates ke liye webhooks set up kar sakte hain.
   - **Webhooks**: Set up webhooks for real-time payment status updates.

---

## Key Features

- **Multiple Payment Methods**: Credit/debit cards, UPI, net banking, aur wallets ko support karta hai.
- **Customizable Checkout**: Razorpay Checkout se seamless user experience milta hai.
- **Dashboard**: Payments manage karne ke liye comprehensive dashboard available hai.
- **Security**: PCI DSS compliant hai aur secure transactions ke liye 3D Secure ko support karta hai.

---

## Integration Steps

### 1. Sign Up

- **Visit**: [Razorpay](https://razorpay.com).
- **Create an Account**: Sign-up process complete karein.

### 2. Generate API Keys

- **Log In**: Apne Razorpay account mein login karein.
- **API Keys**: **Settings** -> **API Keys** par jayein aur apne **Key ID** aur **Key Secret** generate karein.

### 3. Install Razorpay SDK

#### Node.js

```bash
npm install razorpay
```

### 4. Configuration

Initialize Razorpay with your API key and secret:


````javascript

const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: 'Your Api key', // Replace with your Razorpay key ID
  key_secret: 'Your Api Key Secret' // Replace with your Razorpay key secret
});


````


### 5. Create Order Endpoint

Create an endpoint to handle order creation. This example demonstrates how to create an order and return its details to the client.

`Example Code`


````javascript
app.post('/create-order', async (req, res) => {
    const { amount, currency, receipt, customerDetails } = req.body;

    // Validate input
    if (!amount || !currency || !customerDetails) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    const options = {
        amount: amount * 100, // Convert to paise
        currency: currency || 'INR',
        receipt: receipt || `receipt_${Date.now()}`
    };

    try {
        const order = await razorpay.orders.create(options);
        const bill = {
            orderId: order.id,
            amount: amount,
            currency: currency,
            customerDetails: customerDetails,
            receipt: order.receipt,
            status: order.status,
            createdAt: order.created_at
        };
        res.json(bill);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Error creating order', details: error });
    }
});

````


### 5. Create Invoice Endpoint


````javascript
app.post('/create-invoice', async (req, res) => {
    const { amount, currency, customer, description } = req.body;

    // Validate input
    if (!amount || !currency || !customer) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    const invoiceData = {
        amount: amount * 100, // Convert to paise
        currency: currency || 'INR',
        customer: {
            name: customer.name,
            email: customer.email,
            contact: customer.contact
        },
        description: description || 'Invoice Description'
    };

    try {
        const invoice = await razorpay.invoices.create(invoiceData);
        res.json(invoice);
    } catch (error) {
        console.error('Error creating invoice:', error);
        res.status(500).json({ error: 'Error creating invoice', details: error });
    }
});

````


### 6.  Create Webhook Endpoint


````javascript
app.post('/webhook', (req, res) => {
    const generatedSignature = crypto
        .createHmac('sha256', process.env.WEBHOOK_SECRET)
        .update(JSON.stringify(req.body))
        .digest('hex');

    const signature = req.headers['x-razorpay-signature'];

    // Validate the signature
    if (generatedSignature === signature) {
        console.log('Webhook verified:', req.body);

        // Handle the event (e.g., payment captured, order completed)
        res.status(200).send('Webhook received');
    } else {
        console.error('Webhook signature mismatch');
        res.status(403).send('Forbidden');
    }
});

````