import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req,res)=>{
    try {
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: "Server error. Please try again.",
            error: err
        });
    }
}

export const createPost = async (req,res)=>{
    const newPost = new PostMessage(req.body);

    try {
        var postData = await newPost.save();

        res.status(200).json({
            status: true,
            message: "New post saved successfully",
            data: postData
        });
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: "Couldn't make a post. Server error.",
            error: err
        });
    }
}

export const updatePosts = async (req,res)=>{
    const { id: _id } = req.params;
    const editInfo = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).send('Invalid id.');
    }
    else {
        const editedPost = await PostMessage.findByIdAndUpdate(_id, editInfo, { new: true});
    }

    res.status(200).json(editedPost);
}