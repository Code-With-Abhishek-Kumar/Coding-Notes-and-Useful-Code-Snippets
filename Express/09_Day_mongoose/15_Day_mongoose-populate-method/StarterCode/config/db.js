// db.js

const mongoose = require('mongoose');

// MongoDB connection URI
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';

let db = mongoose.connect(`${dbURI}`)
  .then(() => console.log('Connected!'));

  
module.exports = db;