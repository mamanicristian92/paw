async function cargarUsuarios() {   
  try {                            
    const res = await fetch("https://jsonplaceholder.typicode.com/users");  
    const data = await res.json();
    console.log(data);

    //const arreglo = JSON.parse(data); //devuelve
    //console.log(data);

    let nombres = data.map(user=>user.name);
    console.log(nombres);
  } catch (error) {                                                       
    console.error("Error:", error);                                        
  }
}

cargarUsuarios();