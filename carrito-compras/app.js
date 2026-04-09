const inventario = [
    { id: 1, nombre: "Auriculares Inalámbricos", precio: 50.00, imagen: "https://placehold.co/200x200/222/FFF?text=Auriculares" },
    { id: 2, nombre: "Reloj Inteligente", precio: 120.00, imagen: "https://placehold.co/200x200/222/FFF?text=Smartwatch" },
    { id: 3, nombre: "Teclado Mecánico", precio: 85.00, imagen: "https://placehold.co/200x200/222/FFF?text=Teclado" },
    { id: 4, nombre: "Ratón Gamer", precio: 45.00, imagen: "https://placehold.co/200x200/222/FFF?text=Mouse" }
];

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
    });
}

renderizarProductos();