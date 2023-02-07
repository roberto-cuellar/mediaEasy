const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const responseStructure = require('../../../network/response');


const validarJWT = ( req = request, res = response, next ) =>  {

    // Se recupera token en el header x-token
    const token = req.header('x-token');
    const userId = req.header('userId');
    // console.log('User Id: ' + userId);
    

    // En caso de que no se tenga el token, se regresara un error de autenticacion
    if( !token  ) {
        return responseStructure.error(req,res,'error en el token', 401);                      
    }

    try {
        const { uid, name } = jwt.verify( token, process.env.SECRET_JWT_SEED ); 


        if(userId){
            if(userId === uid){
                // console.log('Token perteneciente al usuario');
            }else{
                return responseStructure.error(req,res,'error en el token', 401);                      
            }
        }
        // console.log('Entra a validar token');

        req.uid  = uid;
        req.name = name
        

    } catch (error) {
        return responseStructure.error(req,res,'Token no valido', 401);                           
    }

    next();
}

module.exports = {
    validarJWT
}