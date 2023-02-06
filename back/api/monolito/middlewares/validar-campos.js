const { response } = require('express');
const responseStructure = require('../../../network/response');
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response, next ) => {
    
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return responseStructure.error(req,res,{errors: errors.mapped()}, 400);                      
    }

    next();
}


module.exports = {
    validarCampos
}
