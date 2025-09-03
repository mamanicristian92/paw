/*
TP1
1. Crear una función declarada dividir que tome dos números como
argumento y devuelva la división. ()
2. Crea una función expresada llamada saludar que tome un nombre
como argumento y devuelva un mensaje de saludo. (Asignadas a una Var)
3. Crea una función declarada llamada calcularArea que tome el
largo y el ancho de un rectángulo como argumentos y devuelva su
área.
4. Crea una función expresada llamada esPar que tome un número
como argumento y devuelva true si es par y false en caso
contrario.
5. Crea una función declarada llamada encontrarMayor que tome dos
números como argumentos y devuelva el mayor de los dos.
*/
//let edad=10

function dividir(a,b) {
    if (b!=0) {
        return a/b
    }
    else {
        return "error división por cero"
    }
}
const saludar=function(nombre){
    return "Hola "+nombre+" xD"
}
function calcularArea(ancho,alto) {
    return ancho*alto
}
const esPar=function(num) {
    return num%2==0
}
function encontrarMayor(a,b) {
    return a>b?a:b
}

//activar solo script
/* let a=7
let b=5
let nombre="Cristian"
let ancho=3
let alto=5
let num1=11
let num2=12 */
//activar para navegador
let a=prompt("ingrese cociente")
let b=prompt("ingrese divisor")
let nombre=prompt("ingrese nombre")
let ancho=prompt("ingrese ancho de rectangulo")
let alto=prompt("ingrese alto de rectangulo")
let num1=prompt("ingrese un numero")
let num2=prompt("ingrese otro numero")

//resultados
console.log(dividir(a,b))
console.log(saludar(nombre))
console.log("area del rectangulo: ",calcularArea(ancho,alto)) //20
console.log("el número ",num1," es par: ",esPar(num1))
console.log("el número mayor es: ",encontrarMayor(num1,num2))