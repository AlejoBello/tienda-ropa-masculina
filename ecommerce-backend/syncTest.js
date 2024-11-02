const sequelize = require('./config/database'); // Esta línea importa la instancia de Sequelize
const Product = require('./models/Product'); // Asegúrate de que el modelo Product esté correctamente definido

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos exitosa');

        await Product.sync({ force: true });
        console.log('Tabla de productos sincronizada');

        // Si tienes otro modelo, descomenta y usa esto:
        // await User.sync({ force: true });
        // console.log('Tabla de usuarios sincronizada');

        process.exit();
    } catch (error) {
        console.error('Error al sincronizar los modelos:', error);
    }
})();
