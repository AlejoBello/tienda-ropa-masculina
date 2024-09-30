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

    let total = 0;

    cart.forEach((product, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price}</td>
            <td>$${(product.price * product.quantity).toFixed(2)}</td>
            <td>
                <button onclick="decreaseQuantity(${index})">-</button>
                <button onclick="removeFromCart(${index})">Eliminar</button>
            </td>
        `;

        cartTableBody.appendChild(row);

        // Sumar el total
        total += product.price * product.quantity;
    });

    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
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


function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);  // Eliminar si la cantidad es 1
    }
    saveCart();
    displayCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    displayCart();
}
