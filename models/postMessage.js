import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const POST_SCHEMA = new Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

const postMessage = mongoose.model("post_messages", POST_SCHEMA);

export default postMessage;