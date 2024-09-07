import mongoose, { Schema, model } from "mongoose";

const orderItemSchema = new Schema({
  productId: {
    type: mongoose.Schema.ObjectId,
    ref: "product",
  },
  quantity: {
    type: Number,
    require: true,
  },
});

let OrderModel = new Schema(
  {
    oPrice: {
      type: Number,
      require: true,
    },

    oItems: {
      type: [orderItemSchema],
    },
    address:{
        type:String,
        require:true,
    },

    status:{
        type: String,
        enum: ['Pending' , 'Cancelled' , 'Delivered'],
        default: 'Pending',

    },
    
    customer: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export const Category = model("Category", OrderModel);
