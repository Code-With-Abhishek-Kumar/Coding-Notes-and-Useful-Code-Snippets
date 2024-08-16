// const import mongoose  from "mongoose";

// what is new keyword
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    email: String,
    passwords:{
        type: String,
        require : [ true , "Password is Required" ],
    },
    isActive: Boolean,

   

} ,{ timestamps: true })


const User = mongoose.model("User", userSchema);

//  if to save User like this so in db it will save users

export default User;