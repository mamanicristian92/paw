let arreglo=[1,3,7,5,8,2] //26
let arreglo2=["hola","mundo","cristian"]
let suma=0
arreglo.forEach(function (elemento){
    suma=suma+elemento
});

let cant_par=0;
let cant_impar=0;

arreglo.forEach(function (elemento){
    if (elemento%2==0) {
        cant_par++;
    }
    else {
        cant_impar++;
    }
});
arreglo2.forEach(function(elemento,indice,arreglo2){
    arreglo2[indice]=elemento.toUpperCase()
})

const numeros=[1,2,3,4]
const duplicados=numeros.map(function(num){
    return num*2
})
const cuadrados=numeros.map(function(num){
    return num*num
})

let nombres=["cristian","sergio","carlos"]
const nombres_mayus=nombres.map(function(nombre){
    return nombre.toUpperCase()
})
const first_letter=nombres.map(function(nombre){
    return nombre[0]
})

console.log("suma total: ",suma)
console.log("numeros pares: ",cant_par)
console.log("numeros impares: ",cant_impar)
console.log("arreglo2: ",arreglo2)

console.log(numeros)
console.log(duplicados)
console.log(cuadrados)
console.log(cuadrados)

console.log(nombres_mayus)
console.log(first_letter)




