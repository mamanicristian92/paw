const persona = { nombre: "Ana", edad: 25 };

// Objeto → JSON
const json = JSON.stringify(persona);
console.log(json); // {"nombre":"Ana","edad":25}

// JSON → Objeto
const obj = JSON.parse(json);
console.log(obj); // { nombre: 'Ana', edad: 25 }
