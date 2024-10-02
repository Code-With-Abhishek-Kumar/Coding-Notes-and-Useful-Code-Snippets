import mongoose  from "mongoose";


const medicalRecordSchema = new mongoose.Schema({

}, {timestamps:true})



export const medical = mongoose.model('medical' , medicalRecordSchema)