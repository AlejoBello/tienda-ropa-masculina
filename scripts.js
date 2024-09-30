let cart = [];

// Función para agregar al carrito
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Verifica si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(item => item.name === productName);
    
    if (existingProductIndex !== -1) {
        // Si ya existe, aumenta la cantidad
        cart[existingProductIndex].quantity += 1;
    } else {
        // Si no, lo añade al carrito
        cart.push(product);
    }

    alert(`${productName} añadido al carrito`);
    saveCart();
}

// Función para guardar el carrito en localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para cargar el carrito desde localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Función para mostrar el carrito en la tabla
function displayCart() {
    const cartTableBody = document.querySelector("#cart tbody");
    cartTableBody.innerHTML = "";

    cart.forEach(product => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price}</td>
            <td>$${(product.price * product.quantity).toFixed(2)}</td>
        `;

        cartTableBody.appendChild(row);
    });
}

// Función para limpiar el carrito
function limpiarCarrito() {
    // Vaciar el carrito desde el almacenamiento local
    localStorage.removeItem('cart');  // Usamos 'cart', no 'carrito'
    
    // Actualizar el array del carrito a vacío
    cart = [];  // Usamos 'cart', no 'carrito'

    // Refrescar la visualización del carrito
    displayCart();  // Cambié 'actualizarCarrito()' por 'displayCart()' ya que es tu función para mostrar el carrito

    // Mensaje opcional
    alert('El carrito ha sido vaciado.');
}

// Cargar el carrito al cargar la página
window.onload = function() {
    loadCart();
    if (document.querySelector("#cart")) {
        displayCart();
    }
};
