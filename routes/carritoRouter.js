import express from "express";
import {generarCarrito, deleteCarrito} from "../controllers/carritoController.js";

const router = express.Router();

router.post("/", generarCarrito);
router.delete("/:id", deleteCarrito);



export default router;