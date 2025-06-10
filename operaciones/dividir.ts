/**
 * Modificación del comentario, permite dividir dos números.
 *
 * @param {number} a Número a dividir a.
 * @param {number} b Número a dividir b.
 * @return {*} 
 */
function operacionDividir(a: number, b: number) {
    try {
        return a+b;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}