const inventario = [
    { id: 1, nombre: "Auriculares Inalámbricos", precio: 50.00, imagen: "https://placehold.co/200x200/222/FFF?text=Auriculares" },
    { id: 2, nombre: "Reloj Inteligente", precio: 120.00, imagen: "https://placehold.co/200x200/222/FFF?text=Smartwatch" },
    { id: 3, nombre: "Teclado Mecánico", precio: 85.00, imagen: "https://placehold.co/200x200/222/FFF?text=Teclado" },
    { id: 4, nombre: "Ratón Gamer", precio: 45.00, imagen: "https://placehold.co/200x200/222/FFF?text=Mouse" }
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
    carrito.forEach(producto => {
        const item = document.createElement('div');
        item.innerHTML = `
            <p>🛒 <strong>${producto.nombre}</strong> - $${producto.precio}</p>
            <hr>
        `;
        listaCarrito.appendChild(item);
    });
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
precioTotal.textContent = total.toFixed(2);

}

