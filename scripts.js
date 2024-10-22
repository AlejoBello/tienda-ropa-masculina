let cart=[];function addToCart(productName,productPrice){const product={name:productName,price:productPrice,quantity:1};const existingProductIndex=cart.findIndex(item=>item.name===productName);if(existingProductIndex!==-1){cart[existingProductIndex].quantity+=1}else{cart.push(product)}
alert(`${productName} añadido al carrito`);saveCart()}
function saveCart(){localStorage.setItem('cart',JSON.stringify(cart))}
function loadCart(){const savedCart=localStorage.getItem('cart');if(savedCart){cart=JSON.parse(savedCart)}}
function displayCart(){const cartTableBody=document.querySelector("#cart tbody");cartTableBody.innerHTML="";let total=0;cart.forEach((product,index)=>{const row=document.createElement("tr");row.innerHTML=`
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price}</td>
            <td>$${(product.price * product.quantity).toFixed(2)}</td>
            <td>
                <button onclick="decreaseQuantity(${index})">-</button>
                <button onclick="removeFromCart(${index})">Eliminar</button>
            </td>
        `;cartTableBody.appendChild(row);total+=product.price*product.quantity});document.getElementById('total').textContent=`Total: $${total.toFixed(2)}`}
function limpiarCarrito(){localStorage.removeItem('cart');cart=[];displayCart();alert('El carrito ha sido vaciado.')}
window.onload=function(){loadCart();if(document.querySelector("#cart")){displayCart()}};function decreaseQuantity(index){if(cart[index].quantity>1){cart[index].quantity-=1}else{cart.splice(index,1)}
saveCart();displayCart()}
function removeFromCart(index){cart.splice(index,1);saveCart();displayCart()}
document.querySelectorAll('.increase').forEach(button=>{button.addEventListener('click',function(){const productName=this.closest('tr').querySelector('td').innerText;addToCart(productName,getPriceByProductName(productName));displayCart()})})