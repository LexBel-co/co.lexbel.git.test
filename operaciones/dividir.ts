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

/**
 * Permite sumar dos números.
 *
 * @param {number} a Nmúmero a sumar a.
 * @param {number} b Número a sumar b.
 * @return {*}  {number}
 */
function operacionSumar(a: number, b: number): number {
    return a+b;
}

/**
 * Calcula el doble de un número.
 *
 * @param {number} a Numero a multiplicar por 2.
 * @return {*}  {number}
 */
function operacionDoble(a: number): number {
    return a * 2;
}