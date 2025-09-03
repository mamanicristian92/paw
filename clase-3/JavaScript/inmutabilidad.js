//  Mal (modifica el original)
let numeros = [1, 2, 3];
numeros.push(4);

//  Bien (inmutable)
let nuevos = [...numeros, 4]; // crea un nuevo array
console.log(numeros); // [1, 2, 3]
console.log(nuevos);  // [1, 2, 3, 4]