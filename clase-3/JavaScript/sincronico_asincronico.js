//ejemplo sincrónico
console.log("Inicio del programa");

function tareaPesada() {
  for (let i = 0; i < 3; i++) {
    console.log("Procesando...", i);
  }
}

tareaPesada();
console.log("Fin del programa");

//ejemplo asincrónico
console.log("Inicio del programa");

setTimeout(() => {
  console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

console.log("Fin del programa");
