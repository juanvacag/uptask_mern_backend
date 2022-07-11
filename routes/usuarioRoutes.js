import express from "express";
const router = express.Router()
import { registrar } from '../controllers/usurioController.js'

//autenticación, registro y confirmación de usuarios
router.post('/', registrar) //nuevo usuario


export default router
