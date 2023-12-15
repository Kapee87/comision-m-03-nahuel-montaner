import { Schema, model, ObjectId, Types } from "mongoose";

const commentSchema = new Schema({
    description: {
        type: String,
        required: true,

    },
    autor: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
})



export default model("Comment", commentSchema)