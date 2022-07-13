import express from "express";

import { 
    registrar, 
    autenticar, 
    confirmar, 
    olvidePassword, 
    comprobarToken,
    perfil
} from '../controllers/usurioController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = express.Router()

//autenticación, registro y confirmación de usuarios
router.post('/', registrar) //nuevo usuario
router.post('/login', autenticar) //autenticar usuario
router.get('/confirmar/:token', confirmar) //confirmar usuario
//router.post("/olvide-password", olvidePassword)
//router.get('/olvide-password/:token', comprobarToken)
router.route('/olvide-password/:token').get(comprobarToken).post(olvidePassword)//esta linea sustituye a las dos abteriores

router.get('/perfil', checkAuth, perfil)

export default router
