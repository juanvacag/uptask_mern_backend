import express from "express";
const router = express.Router()
import { registrar, autenticar, confirmar } from '../controllers/usurioController.js'

//autenticación, registro y confirmación de usuarios
router.post('/', registrar) //nuevo usuario
router.post('/login', autenticar) //autenticar usuario
router.post('/confirmar/:token', confirmar) //confirmar usuario


export default router
