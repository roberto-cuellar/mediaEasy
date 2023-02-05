const Post = require('../../mongo/models/post');
const Usuario = require('../../mongo/models/user');

exports.createPost = async function (payload) {
    const post = new Post(payload);
    await post.save();
    return post
}

