// Mostrar usuarios
async function cargarUsuarios() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    //console.log(data);
    names = data.map(user => user.name.toUpperCase());
    //console.log(names);
    
    const listaUsuarios = document.getElementById("lista-usuarios");

    names.forEach(name => {
      const li = document.createElement("li");
      li.textContent = name;
      listaUsuarios.appendChild(li);
    });

  } catch (error) {
    console.error("Error al cargar usuarios:", error);
  }
}

async function cargarPosts() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await res.json();
    document.getElementById("nombre-usuario").textContent = `Posts de usuario: ${data.name}`;
//    user1 = data.json().name;
    res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await res.json();
    posts = data.filter(post => post.userId === 1);
    //console.log(posts);
    
    const listaPosts = document.getElementById("lista-posts");

    posts.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      listaPosts.appendChild(li);
    });

  } catch (error) {
    console.error("Error al cargar usuarios:", error);
  }
}




// Ejecutar
cargarUsuarios();
cargarPosts();

async function buscarUsuario() {
  console.log("Buscando usuario...");
  const input = document.getElementById("input-buscar-usuario").value.toLowerCase();
  const resultadoDiv = document.getElementById("resultado-busqueda-usuario");
  resultadoDiv.innerHTML = ""; // Limpiar resultados anteriores
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const usuario = data.find(user => user.name.toLowerCase().includes(input));
    console.log(usuario);
    console.log(input);
    console.log(data);
    if (usuario) {
      resultadoDiv.textContent = `name: ${usuario.name}`;
    } else {
      resultadoDiv.textContent = "Usuario no encontrado";
    }
  } catch (error) {
    //console.error("Error al buscar usuario:", error);
    resultadoDiv.textContent = "Error al buscar usuario";
  }
}

document.getElementById("btn-buscar-usuario").addEventListener("click", buscarUsuario); //buscarUsuario() es diferente a buscarUsuario porque el primero se ejecuta inmediatamente y el segundo es una referencia a la función que se ejecutará cuando se haga click
document.getElementById("input-buscar-usuario").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    buscarUsuario();
  }
});