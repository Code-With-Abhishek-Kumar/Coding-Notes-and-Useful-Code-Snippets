const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title: String,
    date:{
        type:String,
        default:new Date(),
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})


module.exports = mongoose.model('post', postSchema);
