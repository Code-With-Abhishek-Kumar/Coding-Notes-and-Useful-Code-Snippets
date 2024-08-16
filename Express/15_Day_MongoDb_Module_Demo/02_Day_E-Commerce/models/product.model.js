import mongoose, { Schema, model } from "mongoose";


let productSchema = new Schema({
   name:{
    type: String,
    require: true,
    lowercase : true,
   },

   description:{
     type: String,
     require: true,
     lowercase : true,
   },

   price:{
    type: Number,
    require: true,
    lowercase : true,
   },

   stock:{
    type: Number,
    default : 1,
   },

   discount:{
    type: Number,
     require: true,
     lowercase : true,
   },


   category:{
    type: Schema.Types.ObjectId,
    ref: 'category',
    require: true,

   },
   photo:{
    type: String,
   
   }
},{timestamps : true})


let product = model('product' , productSchema);

export default product;