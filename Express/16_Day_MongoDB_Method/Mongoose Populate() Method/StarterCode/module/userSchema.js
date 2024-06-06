

const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    address: {
        type:String,
    },


})


module.exports = mongoose.model('User', userSchema);
