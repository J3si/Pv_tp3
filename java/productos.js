
//mostrar los objetos
import {mostrarConForEach} from "./funciones.js";
import {filtrarPrecio} from "./funciones.js";
import {IngrementoPrecio} from "./funciones.js";
import{ Ordenar} from "./funciones.js";
import {Agregar} from "./funciones.js";
import {Eliminar} from "./funciones.js";

const productos = [//objeto
    {
        producto: "Consola PS5",//clave, valor
        color : "Blanco",//propiedad
        precio: 130,
    },
    {//segundo objeto con diferentes valores
        producto: "Auriculares",//clave, valor
        color : "Gris",//propiedad
        precio: 12,
    },
    {
        producto : "Smartwatches",
        color : "Rosado",
        precio: 44,
    },
    {
        producto : "Lavavajillas ",
        color: "Negro",
        precio: 50,
    },
]
//array de objetos
mostrarConForEach(productos);
//nota superior
filtrarPrecio(productos);
//incremento
IngrementoPrecio(productos);
//ordenado
Ordenar(productos);
//agregar
Agregar(productos);
//eliminar
Eliminar(productos);
