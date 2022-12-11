import express from 'express';
import productosRouter from './routes/productosRouter.js';
import carritoRouter from './routes/carritoRouter.js';

const app = express();
app.use(express.json());

// Routes for de app (API)
app.use("/api/productos",(productosRouter))
app.use("/api/carrito",(carritoRouter))

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

export default app;