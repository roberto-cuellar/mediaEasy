const { response } = require('express');
const Usuario = require('../storage/mongo/models/user');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const responseStructure = require('../../../network/response');
const { searchUserByEmail, createUser } = require('../storage/mongo/actions/actions');

// Metodo encargado de realizar la creacion del usuario
const crearUsuario = async(req, res = response) => {

    // Se extraen los datos del cuerpo de la peticion
    let { email, name, password } = req.body;

    try {
        // Se realiza la verificacion del email
        const usuario = await searchUserByEmail(email);
        // En caso de existir
        if(usuario){
            return responseStructure.error(req,res,'Ya hay un usuario registrado en el sistema con este email', 400);            
        }else{

        // En caso de no existir en la base de datos actual        
        // Hashear la contraseña
        const salt = bcrypt.genSaltSync();
        password = bcrypt.hashSync( password, salt );         

        const dbUser = await createUser({ email, name, password });
        // Se genera el JWT
        const token = await generarJWT(dbUser.id, name);
        const responseBody = {
            uid: dbUser.id,
            name,
            token
        }
        // Generar respuesta exitosa
        return responseStructure.success(req,res,responseBody, 201);
    }
                
    } catch (error) {
        console.log(error);
        return responseStructure.error(req,res,'Servicio temporalmente no disponible, pongase en contacto con el administrador', 500);                
    }

}

const loginUsuario = async (req, res) => {

    const { email, password } = req.body; 

    try {
        // Se valida si existe un usuario con el email 
        const dbUser = await searchUserByEmail( email );

        // En caso de no existancia si responde con no existe
        if(  !dbUser ) {
            return responseStructure.error(req,res,'El correo no existe', 400);                
        }

        // Se valida si el password hace match
        const validPassword = bcrypt.compareSync( password, dbUser.password );
        if ( !validPassword ) {
            return responseStructure.error(req,res,'Email o contraseña incorrectos', 400);              
        }

        // Se genera el JWT
        const token = await generarJWT(dbUser.id, dbUser.name);

        const responseBody = {
            error: false,
            uid: dbUser.id,
            name: dbUser.name,
            token
        }
        // Generar respuesta exitosa
        return responseStructure.success(req,res,responseBody, 201);

        
    } catch (error) {
        console.log(error);
        return responseStructure.error(req,res,'Servicio temporalmente no disponible, pongase en contacto con el administrador', 500);                      
    }
}


// // Revalidar token 
const revalidarToken = async(req, res=response) => {
    
    const {uid, name} = req;

    // Generar el JWT
    const token = await generarJWT( uid, name );

    const responseBody = {
        userid:uid,
        username:name,
        token
    }
    // Generar respuesta exitosa
    return responseStructure.success(req,res,responseBody, 201);
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}