const Usuario = require('../../mongo/models/user');


// Metodo encargado de buscar un usuario por email
exports.searchUserByEmail = async function (email){
    return Usuario.findOne({ email }); 
}

// Metodo encargado de crear y guardar un nuevo usuario
exports.createUser = async function (payload){
    const user = new Usuario(payload);
    await user.save();     
    return user
}