const { Schema, model } = require('mongoose');


const PostSchema = Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    creationDate:{ type: String, default: new Date().toLocaleDateString() 
    },
    likes: [Schema.Types.ObjectId],
    comments: [Schema.Types.ObjectId],
});

module.exports = model('Post', PostSchema );