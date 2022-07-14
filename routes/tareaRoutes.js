import express from "express";

import {
    agreagarTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstado
} from '../controllers/tareaController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = express.Router()

router.post('/', checkAuth, agreagarTarea)

router.route('/:id')
        .get(checkAuth, obtenerTarea)
        .put(checkAuth, actualizarTarea)
        .delete(checkAuth, eliminarTarea)

router.post('/estado/:id', checkAuth, cambiarEstado)

export default router