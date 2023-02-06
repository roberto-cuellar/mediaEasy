const responseStructure = require('../../../network/response');
const { createPost, consultarPosts} = require('../storage/mongo/actions/postActions');


// Metodo encargado de realizar la creacion del registro de un post
const crearNuevoPost = async(req, res = response) => { 
    
    // Se extraen los datos del cuerpo de la peticion
    const { title, content, username, userId } = req.body;
    try {
        // Se crea el nuevo post
        await createPost({ title, content, username, userId });

        // Respuesta del servicio
         return responseStructure.success(req,res,'Post guardado correctamente', 201);
        
    } catch (error) {
        console.log(error);
        return responseStructure.error(req,res,error + 'No se pudo completar la accion, por favor intente mas tarde.', 500);                      
         
    }
};


// Metodo encargado de realizar una consulta para visualizar los posts de una persona segun su id
const verPosts = async(req, res = response) => { 
    
    // Se extraen los datos del cuerpo de la peticion
    const { userId, page, len } = req.query;  
    
    
    try {
        
        let posts = [];
        posts = await consultarPosts(userId, page, len);
        // if(userId){
        //     posts = await consultarPosts(userId, page, len);
        // }else{
        //     posts = await consultarPosts(userId, page, len);
        // }
    
        // Respuesta del servicio
         return responseStructure.success(req,res,posts, 201);
        
    } catch (error) {
        console.log(error);
        return responseStructure.error(req,res,error + ', No se pudo completar la accion, por favor intente mas tarde.', 500);                      
         
    }
};



module.exports = {
    crearNuevoPost,
    verPosts
}