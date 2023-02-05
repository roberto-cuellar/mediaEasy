const { response } = require('express');
const jwt = require('jsonwebtoken');
const responseStructure = require('../../../network/response');


const validarJWT = ( req, res = response, next ) =>  {

    // Se recupera token en el header x-token
    const token = req.header('x-token');

    // En caso de que no se tenga el token, se regresara un error de autenticacion
    if( !token  ) {
        return responseStructure.error(req,res,'error en el token', 401);                      
    }

    try {
        const { uid, name } = jwt.verify( token, process.env.SECRET_JWT_SEED );
        req.uid  = uid;
        req.name = name;
    } catch (error) {
        return responseStructure.error(req,res,'Token no valido', 401);                           
    }

    next();
}

module.exports = {
    validarJWT
}