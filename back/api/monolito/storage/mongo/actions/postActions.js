const Post = require('../../mongo/models/post');
const Usuario = require('../../mongo/models/user');

// Metodo encargado de crear y guardar un post
exports.createPost = async function ({ title, content, username, userId }) {

    const post = new Post({ title, content, username, userId});
    await post.save();
    // Agregar la referencia al esquema del usuario que hace el registro
    return post
}

// // Metodo encargado de realizar la consulta de posts por el id del usuario 
// exports.consultarUno = async function (userId, page, len) {
//     const skipNumber = Number((page-1)*(len));
//     const limitNumber = Number(len);
    
//     const postsTotalCount = await Post.find({}).countDocuments();

//     const posts = await Post.find({
//         userId: userId
//     }).skip(skipNumber).limit(limitNumber);
//     return {posts, postsTotalCount}
// }

// // Metodo encargado de realizar la consulta de posts por el id del usuario
// exports.consultarTodos = async function (userId, page, len) {

//     const skipNumber = Number((page-1)*(len));
//     const limitNumber = Number(len);
    
//     const postsTotalCount = await Post.find({}).countDocuments();
    
//     const posts = await Post.find({}).skip(skipNumber).limit(limitNumber);
//     return {posts, postsTotalCount}
// }

exports.consultarPosts = async function (userId, page, len) {
    let posts = [];
    const skipNumber = Number((page-1)*(len));
    const limitNumber = Number(len);
    const query = userId ? {userId: userId} : null;
    posts = await Post.find(query).skip(skipNumber).limit(limitNumber);
        
    const postsTotalCount = await Post.find(query).countDocuments();

        
    return {posts, postsTotalCount}
}



