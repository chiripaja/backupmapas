/*
RUTAS AUTH
HOST + /api/auth
*/

const {Router}=require('express')
const {check}=require('express-validator')
const { loginUsuario,revalidarToken } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validarCampos')
const router=Router()


router.post('/',
[
    check('usuario','el nombre es obligatorio').notEmpty(),
    check('password','el password es obligatorio').notEmpty(),
    validarCampos
],
loginUsuario)


router.get('/renew',revalidarToken)

module.exports=router