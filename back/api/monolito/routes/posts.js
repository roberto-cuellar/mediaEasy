const { Router } = require('express');
const { check } = require('express-validator');
const { crearNuevoPost } = require('../controllers/posts');
// const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Crear un nuevo usuario
router.post( '/add', [
    // check('name', 'El nombre es obligatorio').not().isEmpty(),
    // check('email', 'El email es obligatorio').isEmail().not().isEmpty(),
    // check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarJWT
], crearNuevoPost );

module.exports = router;