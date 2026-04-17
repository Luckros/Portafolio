const inventario = [
    { 
        id: 1, 
        nombre: "Auriculares Inalámbricos", 
        precio: 50.00, 
        imagen: "./img/auriculares.jpeg"
    },
    { 
        id: 2, 
        nombre: "Reloj Inteligente", 
        precio: 120.00, 
        imagen: "./img/reloj.png" 
    },
    { 
        id: 3, 
        nombre: "Teclado Mecánico", 
        precio: 85.00, 
        imagen: "./img/teclado.jpg" 
    },
    { 
        id: 4, 
        nombre: "Mouse Gamer", 
        precio: 45.00, 
        imagen: "./img/mouse.jpeg" 
    }
];

let carrito = [];

const contenedorProductos = document.getElementById('contenedor-productos');

function renderizarProductos() {
    contenedorProductos.innerHTML = "";
    inventario.forEach(producto => {
        const nuevo = document.createElement('div');
        nuevo.classList.add('tarjeta-producto');
        
        nuevo.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio}</p>
            <button class="btn-agregar" data-id="${producto.id}">Agregar al Carrito</button>
        `;
        
        contenedorProductos.appendChild(nuevo);
        const btnAgregar = nuevo.querySelector('.btn-agregar');
        btnAgregar.addEventListener('click', () => {
            agregarAlCarrito(producto.id);
        });
    });
}

renderizarProductos();

const btnAbrirCarrito = document.getElementById('btn-abrir-carrito');
const btnCerrarCarrito = document.getElementById('btn-cerrar-carrito');
const ventanaCarrito = document.getElementById('ventana-carrito');


btnAbrirCarrito.addEventListener('click', () => {
    ventanaCarrito.classList.remove('carrito-oculto');
});

btnCerrarCarrito.addEventListener('click', () => {
    ventanaCarrito.classList.add('carrito-oculto');
});


const listaCarrito = document.getElementById('lista-carrito');
const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('precio-total');

function agregarAlCarrito(idProducto) {
    const productoElegido = inventario.find(p => p.id === idProducto);
    carrito.push(productoElegido);
    renderizarCarrito();
}

function renderizarCarrito() {
    listaCarrito.innerHTML = '';
    contadorCarrito.textContent = carrito.length;
    carrito.forEach((producto, index) => {
        const item = document.createElement('div');
        item.classList.add('item-carrito');
        item.innerHTML = `
            <p>🛒 <strong>${producto.nombre}</strong> - $${producto.precio}</p>
            <button class="btn-eliminar" title="Quitar del carrito">❌</button>
        `;
        listaCarrito.appendChild(item);
        const botonEliminar = item.querySelector('.btn-eliminar');
        botonEliminar.addEventListener('click', () => {
            eliminarDelCarrito(index);
        });
    });
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    precioTotal.textContent = total.toFixed(2);

}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    renderizarCarrito();
}

const btnComprar = document.getElementById('btn-comprar');
btnComprar.addEventListener('click', () => {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de comprar.");
        return;
    }
    alert("Pago procesado con éxtio. ¡Gracias por tu compra!");
    carrito = [];
    renderizarCarrito();
});

