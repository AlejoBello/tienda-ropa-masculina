import express from 'express';
const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(express.json());


const productos = [
    { id: 1, nombre: 'Camisa', precio: 20 },
    { id: 2, nombre: 'Pantalón', precio: 30 },
    { id: 3, nombre: 'Zapatos', precio: 50 },
];

// Ruta para obtener productos
app.get('/api/productos', (req, res) => {
    res.json(productos);
});

// Ruta para gestionar el carrito de compras (agregar o eliminar productos)
app.post('/api/carrito', (req, res) => {
    const { action, producto } = req.body; // { action: 'add', producto: { id, cantidad } }
    res.json({ message: `Producto ${action === 'add' ? 'agregado' : 'eliminado'} del carrito`, producto });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
