ingreso = ["1500", "2500", "84683", "135353", "1535", "4343354", "435453", "78351", "1878", "48483", "35483", "3843"]
egreso = ["1500", "2500", "1155", "1533", "5434", "5434543", "4543", "7816", "95634", "9433", "53133", "348133"]

flujoDeCaja = [
    enero = [ingreso[0], egreso[0]],
    Febrero = [ingreso[1], egreso[1]],
    Marzo = [ingreso[2], egreso[2]],
    Abril = [ingreso[3], egreso[3]],
    Mayo = [ingreso[4], egreso[4]],
    Junio = [ingreso[5], egreso[5]],
    Julio = [ingreso[6], egreso[6]],
    Agosto = [ingreso[7], egreso[7]],
    Septiembre = [ingreso[8], egreso[8]],
    Octubre = [ingreso[9], egreso[9]],
    Noviembre = [ingreso[10], egreso[10]],
    Diciembre = [ingreso[11], egreso[11]],
]

var resultado = 0;

for (i = 0; i < flujoDeCaja.length; i++) {
    resultado = resultado + (ingreso[i] - egreso[i]);
}

if (resultado >= 0) {
    window.alert("El flujo de caja genero Ganancias, el valor final es de: " + resultado);
} else {
    window.alert("El flujo de caja genero Perdidas, el valor final es de: " + resultado);
}
