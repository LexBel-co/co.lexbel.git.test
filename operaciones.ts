function suma(a: number, b: number): number {
    return a+b;
}

function dividir(a: number, b: number) {
    try {
        return a+b;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}