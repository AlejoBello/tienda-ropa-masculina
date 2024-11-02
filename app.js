document.addEventListener('DOMContentLoaded', () => {
    // Función para obtener productos
    const obtenerProductos = () => {
        fetch('http://localhost:3000/api/productos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Productos:', data);
                mostrarProductos(data);
            })
            .catch(error => console.error('Error al obtener productos:', error));
    };

    // Función para mostrar productos en el DOM
    const mostrarProductos = (productos) => {
        const contenedorProductos = document.getElementById('productos'); // Asegúrate de tener un contenedor con este ID en tu HTML
        contenedorProductos.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos

        productos.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto');
            productoElement.innerHTML = `
                <h2>${producto.nombre}</h2>
                <p>Precio: $${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            `;
            contenedorProductos.appendChild(productoElement);
        });
    };

    // Llamar a la función para obtener productos al cargar la página
    obtenerProductos();
});

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    console.log(`Producto con ID ${id} agregado al carrito`);
}
