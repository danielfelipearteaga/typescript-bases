/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

/* console.log('El volumen actual de: ', reproductor.volumen);
console.log('El segundo actual es: ', reproductor.segundo);
console.log('La canción actual de: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor); */

/* const autor = 'Fulano'; */

/* const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor; */

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor: autorDetalle } = detalles;

/* console.log('El volumen actual de: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La canción actual de: ', cancion);
console.log('El autor es: ', autorDetalle); */

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = dbz;

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', p3);