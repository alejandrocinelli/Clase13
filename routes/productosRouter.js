import express from 'express';
import { obtenerProductos,obtenerProyecto, agregarProducto, editarProducto ,eliminarProducto } from '../controllers/ProductosController.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.get('/', obtenerProductos);
router.get('/:id', obtenerProyecto);
router.post('/',checkAuth, agregarProducto);
router.put('/:id',checkAuth, editarProducto);
router.delete('/:id',checkAuth, eliminarProducto);

export default router;