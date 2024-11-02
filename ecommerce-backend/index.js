const express = require('express');
const app = express();
const PORT = 3000;

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando!');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


const sequelize = require('./config/database');
const Product = require('./models/Product');
const User = require('./models/User');

// Sincronizar todos los modelos
sequelize.sync({ force: true })
    .then(() => {
        console.log('Tablas sincronizadas');
    })
    .catch((error) => {
        console.error('Error al sincronizar las tablas:', error);
    });

    Product.sync({ force: true })