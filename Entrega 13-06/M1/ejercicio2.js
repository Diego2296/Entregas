var ingresoTotal = prompt("Ingresar Monto del Ingreso Total");

var gastosNecesrios = ingresoTotal * 0.50;
var gastosOpcionales = ingresoTotal * 0.30;
var ahorroEinversion = ingresoTotal * 0.20;

console.log("El monto disponible para Gastos necesarios es de:" + gastosNecesrios);
console.log("El monto disponible para Gastos opcionales es de:" + gastosOpcionales);
console.log("El monto disponible para Ahorros e Inversion es de:" + ahorroEinversion);
