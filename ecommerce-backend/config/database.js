const { Sequelize } = require('sequelize');

// Configuración de la conexión a MySQL
const sequelize = new Sequelize('ecommerce', 'root', 'alejobello1', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

// Función para probar la conexión
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
};

testConnection();

// Exporta la instancia de Sequelize para usarla en los modelos
module.exports = sequelize;
