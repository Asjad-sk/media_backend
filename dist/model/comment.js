import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const comment = mongoose.model("Comment", commentSchema);
export default comment;
