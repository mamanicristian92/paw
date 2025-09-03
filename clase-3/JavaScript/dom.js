//querySelector
let sel =document.querySelector("p");
console.log(sel);

//getElementById
let a;
a =document.getElementById("cabecera");
console.log(a);

//creacion de nodos
function    miFuncion(){
    let parrafo, contenido;
    parrafo = document.createElement("p");
    contenido = document.createTextNode("Hola soy un párrafo creado con JS");
    parrafo.appendChild(contenido);
    document.getElementById("sec").appendChild(parrafo);
    //otra forma
    // let parrafo = document.createElement("p");
    // parrafo.textContent = "Hola soy un párrafo creado con JS";
   // document.body.appendChild(parrafo);
}
