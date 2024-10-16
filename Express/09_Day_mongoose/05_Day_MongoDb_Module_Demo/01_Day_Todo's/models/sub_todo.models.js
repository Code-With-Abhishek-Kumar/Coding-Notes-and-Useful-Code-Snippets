import mongoose from "mongoose";

import { User } from "./user.model";


const subTodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
}, { timestamps: true })



export const SubTodo = mongoose.model('SubTodo', subTodoSchema)