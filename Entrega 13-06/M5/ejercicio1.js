
function captura() {
    var costosFijos = document.getElementById("inputCostoFijo").value;
    var precioVenta = document.getElementById("inputPrecioVenta").value;
    var costosVariables = document.getElementById("inputCostoVariable").value;
    var puntoEquilibrio = 0;

    puntoEquilibrio = costosFijos / (precioVenta - costosVariables);
    window.alert("El punto de equilibrio es: " + puntoEquilibrio);
}
