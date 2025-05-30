
function operacionDividir(a: number, b: number) {
    try {
        return a+b;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

function operacionSumar(a: number, b: number, c: number): number {
    return a+b+c;
}