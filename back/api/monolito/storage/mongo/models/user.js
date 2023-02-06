const { Schema, model } = require('mongoose');


const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    creationDate:{
        type: { type: Date, default: Date.now }
    },
    // chats: [Schema.Types.ObjectId],
    // posts: [Schema.Types.ObjectId],
});

module.exports = model('Usuario', UsuarioSchema );