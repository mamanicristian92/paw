
// math.js
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
export const multiplicar = (a,b) => a*b;
export const dividir = (a,b) => {
    if (b==0) {return "error division por cero"}
    return a/b;
}
