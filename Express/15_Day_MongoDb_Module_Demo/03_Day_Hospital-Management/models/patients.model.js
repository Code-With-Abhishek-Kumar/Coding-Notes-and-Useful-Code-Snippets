import mongoose  from "mongoose";


const patientSchema = new mongoose.Schema({

 name:{
    type: String,
    required : true,
 },

 diagnosedWith:{
    type: String,
    required : true,
 },



 address:{
    type: String,
    required : true,
 },


 age:{
    type: String,
    required : true,
 },


 bloodGroup:{
    type: String,
    enum: [
        'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
    ],
    required : true,

 },


 bloodGroup:{
    type: String,
    enum: [
        'M', 'F'
    ],
    required : true,

 },



 admittedIn:{
    type: mongoose.Schema.ObjectId,
    ref: `Hospital`
 },











}, {timestamps:true})



export const patient = mongoose.model('patient' , patientSchema)