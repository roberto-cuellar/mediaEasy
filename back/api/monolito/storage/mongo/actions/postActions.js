const Post = require('../../mongo/models/post');
const Usuario = require('../../mongo/models/user');

// Metodo encargado de crear y guardar un post
exports.createPost = async function ({ title, content, username, userId }) {

    const post = new Post({ title, content, username, userId});
    await post.save();
    // Agregar la referencia al esquema del usuario que hace el registro
    return post
}

// Metodo encargado de realizar la consulta de posts por el id del usuario
exports.consultarUno = async function (userId) {
    const posts = await Usuario.find({
        _id: userId
    })
    return posts
}

// Metodo encargado de realizar la consulta de posts por el id del usuario
exports.consultarTodos = async function (userId) {
    const posts = await Post.find({});
    return posts
}


