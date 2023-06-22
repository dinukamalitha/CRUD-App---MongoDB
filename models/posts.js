const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    topic:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    postCategory:{
        type: String,
        required: true
    }
});

const Posts= mongoose.model('Posts', postSchema);
module.exports = Posts;

