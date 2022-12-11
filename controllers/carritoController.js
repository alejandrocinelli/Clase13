import getTime from "../helpers/getTime.js";
import generarId from "../helpers/generarId.js";
import fs from "fs";

class Carrito {
    constructor() {
        this.id = null;
        this.timestamp = null;
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

}

const carritos = [];

const generarCarrito = (req, res) => {

    //console.log("entro al carrito");
    const carrito = new Carrito();
    carrito.id = generarId();
    carrito.timestamp = getTime();
    carritos.push(carrito);
    fs.writeFileSync("./db/carritos.txt", JSON.stringify(carritos, null, 2));
    res.json(carrito);
    //res.send("Hello World desde el carrito!");
}   

const deleteCarrito = async (req, res) => {   
    //console.log("entro al deleteCarrito");
    const { id } = req.params;
    //console.log(id);
    try {
       
    const carrito = fs.readFileSync("./db/carritos.txt", "utf-8");
    const carritos = JSON.parse(carrito);

    const carritoIdFind = carritos.find((carrito) => carrito.id == id);
    
    if(!carritoIdFind){
        res.status(404).json({message: "Carrito no encontrado"});
    }
    else {
        const carritoFiltrado = carritos.filter((carrito) => carrito.id != id);
        fs.writeFileSync("./db/carritos.txt", JSON.stringify(carritoFiltrado, null, 2));
        res.json(carritoFiltrado);
    }
        
    } catch (error) {
        res.status(404).json({message: "error"});
        
    }
    
    //console.log(carritos)
    
}

export { generarCarrito, deleteCarrito };