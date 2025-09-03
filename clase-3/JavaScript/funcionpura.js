// Función pura
function suma(a, b) {
  return a + b; // no depende de nada externo
}

//  No pura (usa variable externa)
let x = 10;
function sumarConExterno(a) {
  return a + x;
}
