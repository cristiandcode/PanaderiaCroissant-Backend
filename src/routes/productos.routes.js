import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers.js";
const router = Router(); 

//crear las rutas
router.route('/prueba').get(listarProductos)
router.route('/productos').post(crearProducto)
export default router;

// 89i 2023 - 22 de mayo de 2024 - Continuamos con el backend - Que es un controlador - Crearemos endpoints para poder obtener, crear y editar productos 👨‍💻👩‍💻 minuto 24