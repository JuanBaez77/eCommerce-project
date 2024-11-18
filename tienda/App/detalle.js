const productos = {
    producto1: {
        imagen: "producto1.jpg",
        titulo: "Batería Hudson Granito",
        precio: "$207.409",
        descripcion: "Set de ollas antiadherentes 9 piezas"
    },
    producto2: {
        imagen: "producto2.jpg",
        titulo: "Otro Producto",
        precio: "$150.000",
        descripcion: "Descripción del otro producto."
    }
};

function mostrarDetalles(idProducto) {
    const detalle = document.getElementById("detalle-producto");
    const producto = productos[idProducto];

    if (producto) {
        document.getElementById("imagen-detalle").src = producto.imagen;
        document.getElementById("titulo-detalle").innerText = producto.titulo;
        document.getElementById("precio-detalle").innerText = producto.precio;
        document.getElementById("descripcion-detalle").innerText = producto.descripcion;

        detalle.classList.remove("oculto");
    }
}

function cerrarDetalles() {
    const detalle = document.getElementById("detalle-producto");
    detalle.classList.add("oculto");
}
