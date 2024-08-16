import mongoose  from "mongoose";

import { User } from "./user.model";


const subTodoSchema = new mongoose.Schema({
 
},{timestamps: true})



export const SubTodo = mongoose.model('SubTodo' , subTodoSchema)