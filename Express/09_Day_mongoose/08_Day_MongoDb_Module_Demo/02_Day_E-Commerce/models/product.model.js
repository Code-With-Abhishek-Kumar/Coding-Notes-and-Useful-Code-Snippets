import mongoose, { Schema, model } from "mongoose";


let productSchema = new Schema({
   Pname:{
    type: String,
    require: true,
    lowercase : true,
   },

   pColor:{
    type: String,
    require: true,
    lowercase : true,
   },


   pDescription:{
     type: String,
     require: true,
     lowercase : true,
   },

   pPrice:{
    type: Number,
    require: true,
    lowercase : true,
   },

   pStock:{
    type: Number,
    default : 1,
   },

   pDiscount:{
    type: Number,
     require: true,
     lowercase : true,
   },


   pCategory:{
    type: Schema.Types.ObjectId,
    ref: 'category',
    require: true,

   },
   pImage:{
    type: String,
   
   }
},{timestamps : true})


let product = model('product' , productSchema);

export default product;