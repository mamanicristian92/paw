fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())   // Convertir la respuesta a JSON
  .then(data => console.log(data))  // Usar los datos
  .catch(error => console.error("Error:", error));
  