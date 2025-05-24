// mostrar los objetos del array por consola
export const mostrarConForEach = (productos) => {

    console.log("Objetos del array");
    productos.forEach(({producto,color,precio}) => {
        console.log(`
        productos: ${producto}
        color: ${color}
        precio: ${precio}`);
        //console.log(alumnos);
    })
}
//Precio mayor a 20.000
export const filtrarPrecio = (productos) => {

    console.log("Precio mayor a 20");
    const nueva = productos.filter( prod => prod.precio > 20);//filtra los objetos que cumplen la condicion
    console.log(nueva);
}

//incremento del 21% en el precio de los productos

export const IngrementoPrecio = (productos) => {

    console.log("Incremento del 21% en el precio de los productos");
    const incremento = productos.map (prod => ({//efectua cambios sobre cada uno de los elementos del arreglo
        producto: prod.producto,
        color: prod.color,
        precio: (prod.precio + (prod.precio * 0.21)).toFixed(2),//toFi xed(2) redondea a dos decimales
    }));

    console.log(incremento);
}

//ordenamiento de menor a mayor
export const Ordenar =(productos) =>{
    console.log("Ordenado de menor a mayor");
    const nuevo = productos.sort((a,b) => Number(a.precio) - Number(b.precio));
    console.log(nuevo);

}
//
export const Agregar = (productos) => {
    console.log("Agregar un nuevo producto");
    productos.push({
        producto: "Parlante Bluetooth",
        color: "Negro",
        precio: 59000.90,
    });
    console.log(productos);
};

export const Eliminar = (productos) => {
    console.log("Eliminar un producto");
    const nuevo = productos.sort((a,b) => Number(a.precio) - Number(b.precio));
    const primerElemento = nuevo.shift();
    console.log("El elemento eliminado es: ");
    console.log(primerElemento);
    console.log("El arreglo queda de la siguiente manera: ");
    console.log(nuevo);

}
