/*
    ===== Código de TypeScript =====
*/

import { Producto, calcularISV } from "./06-desestructuracion-arg-fun";



const carritoCompras: Producto[] = [
    {
        desc: 'Teléfono 1',
        precio: 100
    },
    {
        desc: 'Teléfono 2',
        precio: 150
    }
];

const [total, isv] = calcularISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);
