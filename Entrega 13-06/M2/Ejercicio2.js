var user = prompt("Ingresar usuario:");
var pass = prompt("Ingresar contraseña:");

if (user == "admin" && pass == "1234") {
    window.alert("Bienvenido admin.");
} else {
    window.alert("Usuario o contraseña incorrectos.")
}