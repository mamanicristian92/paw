arr1=[1,2,3,5,6]

const[primero,...resto]=arr1

console.log(primero)
console.log(resto)

const[a,b,...resto1]=arr1
console.log(a,b,resto1)


const persona = { nombre : "Micaela", edad: 27}


const cuadrado = x => x*x
console.log(cuadrado(4))

const saludo = () => "Hola mundo"
console.log(saludo())

const alumnos = [
    {nombre: "Ana", nota: 8},
    {nombre: "Luis", nota: 6},
    {nombre: "Micaela", nota: 9}
]

const mostrar_nombres = lista => {
    lista.forEach(function(persona){console.log(persona["nombre"])})
}

const nombres = alumnos.map(function(alumno){
    return alumno["nombre"]
})
const nombres2 = alumnos.map(alumno=> alumno["nombre"])

mostrar_nombres(alumnos)
console.log(nombres)
console.log(nombres2)

const aprobados = alumnos.filter(alumno=>alumno["nota"]>6)
console.log(aprobados)