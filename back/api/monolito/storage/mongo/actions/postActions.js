const Post = require('../../mongo/models/post');
const Usuario = require('../../mongo/models/user');

// Metodo encargado de crear y guardar un post
exports.createPost = async function ({ title, content, username, userId }) {

    const post = new Post({ title, content, username, userId});
    await post.save();
    // Agregar la referencia al esquema del usuario que hace el registro
    return post
}


exports.consultarPosts = async function (userId, page, len,date,title) {
    let posts = [];
    const skipNumber = Number((page-1)*(len));
    const limitNumber = Number(len);

    let query = {}; 

    if(userId){
        query.userId = userId;
    }
    
    if(title){
        query.title = {
            $regex: new RegExp(title,'i')}
    }

    if(date){
      console.log('Hay fecha: ', date);
        query.creationDate = {
            $regex: new RegExp(date,'i')
        }
    }
   
    posts = await Post.find(query).skip(skipNumber).limit(limitNumber);
    
    const postsTotalCount = await Post.find(query).countDocuments();

        
    return {posts, postsTotalCount}
}



