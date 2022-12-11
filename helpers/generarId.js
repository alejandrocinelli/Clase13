// generar un id del 1 al 100 aleatorio y sin repetir
import fs from "fs";
 const generarId = () => {
   //  console.log("entro al generarId")
    let id = Math.floor(Math.random() * 100) + 1;
    let carritos = fs.readFileSync("./db/carritos.txt", "utf-8");
    carritos = JSON.parse(carritos);
    let carrito = carritos.find((carrito) => carrito.id === id);
    if (carrito) {
        id = generarId();
    }
     return id;   
    }

    export default generarId;