
const promesa = new Promise((resolve, reject) => {
  const exito = true; // simulamos fallo
  if (exito) {
    resolve("Todo salió bien");
  } else {
    reject("Ocurrió un error");
  }
} );
 

promesa
  .then(resultado => console.log(resultado))
  .catch(error => console.error("Error capturado:", error));



