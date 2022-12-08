// controladores de la API 
import getTime from "../helpers/getTime.js";
import fs from 'fs';

//const productos = JSON.parse(fs.readFileSync('./productos.json', 'utf-8'));

const productos = [ ];

const obtenerProductos =  async (req, res) => {

    res.json(productos);

}

const obtenerProyecto =  async (req, res) => {
    const { id } = req.params;
    try {
        const productoFind = productos.find((producto) => producto.id === id);

        if(productoFind ){
        
        res.json(productoFind)}
        else{
            res.status(404).json({message: "Producto no encontrado"});
        }
    }
    catch (error) {
        res.status(404).json({message: "error"});
    }
}

const agregarProducto =  async (req, res) => {
    const { name,  id , description , code, url , price , stock } = req.body;
    const date = getTime();
    productos.push({name, id, description, code, url, price, stock, date});
    res.json(productos);
}

const editarProducto =  async (req, res) => {
    
    const { id } = req.params;

    try {
      const editarProducto = productos.find((producto) => producto.id === id);  
      const index = productos.indexOf(editarProducto);
        if(!editarProducto){
            res.status(404).json({message: "Producto no encontrado"});
        }
        else{
            
            const { name,  id , description , code, url , price , stock } = req.body;
            const date = getTime();
            productos[index] = {name, id, description, code, url, price, stock, date};
            res.json(productos[index]);

        }

    } catch (error) {
        res.status(404).json({message: "error"});
        
    }
}

const eliminarProducto =  async (req, res) => {
    const { id } = req.params;
    try {
        const productoFind = productos.find((producto) => producto.id === id);
        if(!productoFind){
            res.status(404).json({message: "Producto no encontrado"});
        }
        else{
            const index = productos.indexOf(productoFind);
            productos.splice(index,1);
            res.json(productos);
        }
    }
    catch (error) {
        res.status(404).json({message: "error"});
    }
}

export {obtenerProductos, obtenerProyecto, agregarProducto, editarProducto,eliminarProducto}