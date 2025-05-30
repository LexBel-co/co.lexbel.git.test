/**
 * Operación para realizar la suma de 3 números.
 * 
 * @param {number} a Numero A
 * @param {number} b Numero B
 * @param {number} c Numero C
 * 
 * @return number
 */
function opSumar(a: number, b: number, c: number): number {
    return a+b+c;
}

function opLess(a: number, b: number): number {
    return a-b;
}

function opAbsolute(a: number): number {
    return a < 0 ? (a * -1) : (1 * a);
}