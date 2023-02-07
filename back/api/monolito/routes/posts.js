const { Router } = require('express');
const { check, query} = require('express-validator');
const { crearNuevoPost,verPosts } = require('../controllers/posts');
// const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

// Crear un nuevo post
router.post( '/add', [
    validarJWT,
    check('title', 'El titutlo es obligatorio').not().isEmpty(),
    check('content', 'El contenido es obligatorio').not().isEmpty(),
    check('username', 'El username es obligatorio').not().isEmpty(),
    check('userId', 'El userid es requerido').not().isEmpty(),
    validarCampos
], crearNuevoPost );

// Ver posts
router.get( '/view', [
    validarJWT,
    query('page',"El parametro page es requerido y debe ser de tipo entero").not().isEmpty().isInt(),
    query('len',"El parametro len es requerido y debe ser de tipo entero").not().isEmpty().isInt(),
    validarCampos
], verPosts );


module.exports = router;