const { Schema, model, Types } = require('mongoose');


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
    creationDate:{
        type: { type: Date, default: Date.now }
    },
    likes: [Schema.Types.ObjectId],
    posts: [Schema.Types.ObjectId],
});

module.exports = model('Post', PostSchema );