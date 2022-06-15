const tabla = document.querySelector('tbody#productos');
const formSearch = document.querySelector('form#search');
const productos = [
    {
        name: 'Telefono',
        price: 40000,
        description: 'Esto es un telefono'
    },
    {
        name: 'Reloj',
        price: 10000,
        description: 'Esto es un reloj'
    },
    {
        name: 'Pesa',
        price: 1000,
        description: 'Esto es una pesa'
    }
]

function comprobarSesion() {
    if (sessionStorage.getItem('existeUsuario')) return;

    this.location.href = 'http://127.0.0.1:5500/login.html'
}

function llenarTabla(productos) {
    tabla.innerHTML = '';
    productos.forEach(function(product) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td colspan="3">${product.description}</td>
        `;
        tabla.appendChild(tr);
    })
}

document.addEventListener('DOMContentLoaded', function() {
    comprobarSesion();
    llenarTabla(productos);
})

const linkCerrarSesion = document.querySelector('a#logout');
linkCerrarSesion.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Adios')
})


formSearch.addEventListener('submit', function(event) {
    event.preventDefault();
    const form = Object.fromEntries(new FormData(event.target));
    console.log(form)
    if(!form.search) return llenarTabla(productos);

    const productosFiltrados = productos.filter(function(producto) {
        return producto.name === form.search;
    });

    llenarTabla(productosFiltrados);
})