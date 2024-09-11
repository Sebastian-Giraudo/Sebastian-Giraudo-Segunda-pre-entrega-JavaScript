//! Bases de arrays para almacenar productos y precios
let productos = [];
let precios = [];
let continuar = true;

//! Función para obtener el nombre del producto con el precio MAYOR
function obtenerProductoMayorPrecio() {
    let indiceMayor = precios.indexOf(Math.max(...precios));
    return productos[indiceMayor];
}

//! Función para obtener el nombre del producto con el precio MENOR
function obtenerProductoMenorPrecio() {
    let indiceMenor = precios.indexOf(Math.min(...precios));
    return productos[indiceMenor];
}

//! Bucle para agregar productos y precios
while (continuar === true) {
    let producto = prompt("Ingresá el nombre del producto:");
    let precio = parseFloat(prompt("Ingresá el precio del producto:"));

    if (isNaN(precio)) {
        alert("Por favor, ingresa un número válido para el precio.");
    } else {
        productos.push(producto);
        precios.push(precio);        
    }

    continuar = confirm("¿Deseas agregar otro producto?");
}

//! Cálculo del costo total, promedio, mayor y menor precio
let costoTotal = precios.reduce((a, b) => a + b, 0);
let promedio = costoTotal / precios.length;
let productoMayorPrecio = obtenerProductoMayorPrecio();
let productoMenorPrecio = obtenerProductoMenorPrecio();


//! Mostrar resultados con alerta
alert("El costo total de la compra es: $" + costoTotal.toFixed(2) +
    "\nEl promedio de precios de su compra fue: $" + promedio.toFixed(2) +
    "\nEl producto con mayor precio es: " + productoMayorPrecio + " ($" + Math.max(...precios).toFixed(2) + ")" +
    "\nEl producto con menor precio es: " + productoMenorPrecio + " ($" + Math.min(...precios).toFixed(2) + ")");

//! Mostrar resultados en consola
    console.log("El costo total de la compra es: $" + costoTotal.toFixed(2));
    console.log("El promedio de precios de su compra fue: $" + promedio.toFixed(2));
    console.log("El producto con mayor precio es: " + productoMayorPrecio + " ($" + Math.max(...precios).toFixed(2) + ")");
    console.log("El producto con menor precio es: " + productoMenorPrecio + " ($" + Math.min(...precios).toFixed(2) + ")");