let productos = [];

function agregarProducto() {
    const producto = {
        nombre: document.getElementById("nombre").value,
        precio: Number(document.getElementById("precio").value),
        stock: Number(document.getElementById("stock").value),
        categoria: document.getElementById("categoria").value
    };
    productos.push(producto);
    mostrarProductos();
    alert("Producto agregado");
}

function buscarProductos() {
    const categoria = document.getElementById("buscarCategoria").value;
    let encontrados = [];
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].categoria == categoria) {
            encontrados.push(productos[i]);
        }
    }
    mostrarProductos(encontrados);
}

function actualizarStock() {
    const nombre = document.getElementById("actualizarNombre").value;
    const nuevoStock = Number(document.getElementById("nuevoStock").value);
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == nombre) {
            productos[i].stock = nuevoStock;
            mostrarProductos();
            alert("Stock actualizado");
            return;
        }
    }
    alert("Producto no encontrado");
}

function eliminarProducto() {
    const nombre = document.getElementById("eliminarNombre").value;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == nombre) {
            productos.splice(i, 1);
            mostrarProductos();
            alert("Producto eliminado");
            return;
        }
    }
    alert("Producto no encontrado");
}

function calcularTotal() {
    let total = 0;
    for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio * productos[i].stock;
    }
    document.getElementById("total").innerHTML = "Total: $" + total;
}

function mostrarProductos(lista) {
    let listaHTML = "";
    const productosAMostrar = lista || productos;
    for (let i = 0; i < productosAMostrar.length; i++) {
        const p = productosAMostrar[i];
        listaHTML += "<div class='producto'>" +
                     "<strong>" + p.nombre + "</strong><br>" +
                     "Precio: $" + p.precio + "<br>" +
                     "Stock: " + p.stock + "<br>" +
                     "Categoría: " + p.categoria +
                     "</div>";
    }
    document.getElementById("listaProductos").innerHTML = listaHTML;
}
