import mongoose from "mongoose";
const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    duration: {
        type: Number,
        required: true,
        min: 1,
        max: 120
    },
    url: {
        type: String,
        required: true
    },
    uploader: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Video = mongoose.model("Video", videoSchema);
export default Video;
