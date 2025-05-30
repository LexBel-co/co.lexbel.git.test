/**
 * Permite dividir dos números.
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
 * Permite sumar tres números.
 *
 * @param {number} a Nmúmero a sumar a.
 * @param {number} b Número a sumar b.
 * @param {number} c Número a sumar c.
 * @return {*}  {number}
 */
function operacionSumar(a: number, b: number, c: number): number {
    return a+b+c;
}