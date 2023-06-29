
var costosFijos = prompt("Ingresar costos fijos:");
var precioVenta = prompt("Ingresar precio de venta por unidad:");
var costosVariables = prompt("Ingresar monto variable por unidad:");

var puntoEquilibrio = costosFijos / (precioVenta - costosVariables);

console.log("El punto de equilibrio es: " + puntoEquilibrio);

