const responseStructure = require('../../../network/response');
const { createPost } = require('../storage/mongo/actions/postActions');


// Metodo encargado de realizar la creacion del registro de un post
const crearNuevoPost = async(req, res = response) => { 
    
    // Se extraen los datos del cuerpo de la peticion
    const { title, content, username, userId } = req.body;
    console.log('Cuerpo: ', req.body);

    try {
        // Se crea el nuevo post
        await createPost({ title, content, username });

        // Respuesta del servicio
         return responseStructure.success(req,res,'Post guardado correctamente', 201);
        
    } catch (error) {
        console.log(error);
        return responseStructure.error(req,res,error + 'No se pudo completar la accion, por favor intente mas tarde.', 500);                      
         
    }

};


module.exports = {
    crearNuevoPost
}