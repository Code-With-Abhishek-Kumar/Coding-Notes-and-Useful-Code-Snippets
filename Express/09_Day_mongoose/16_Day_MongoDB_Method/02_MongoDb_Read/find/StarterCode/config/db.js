// db.js

const mongoose = require('mongoose');

// MongoDB connection URI
const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test';

let db = mongoose.connect(`${dbURI}`)
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err.message))




module.exports = db;