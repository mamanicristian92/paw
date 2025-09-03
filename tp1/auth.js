function auth(name,pass) {
    if (name=="nacho"&&pass=="Nerd1979") {
        return name
    }
    if (name=="pedro"&&pass=="Batman0217") {
        return name
    }
    if (name=="marta"&&pass=="Madre2312") {
        return name
    }
    return false
}
let nombre=prompt("Nombre de Usuario: ")
let password=prompt("Password: ")
if (auth(nombre,password)) {
    console.log("Bienvenido ",nombre)
}
else{
    console.log("Porfavor ingrese usuario y password validos")
}