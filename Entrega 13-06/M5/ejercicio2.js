
function calculo() {
    var pantUnid = document.getElementById("inputPantUnid").value;
    var pantMont = document.getElementById("inputPantMont").value;
    var remUnid = document.getElementById("inputRemUnid").value;
    var remMont = document.getElementById("inputRemMont").value;
    var zapUnid = document.getElementById("inputZapUnid").value;
    var zapMont = document.getElementById("inputZapMont").value;
  
    var presupPant = pantUnid * pantMont;
    var presupRem = remUnid * remMont;
    var presupZap = zapUnid * zapMont;

    window.alert("El presupuesto de Pantalones es de: " + presupPant + ", el presupuesto para Remeras es de: " + presupRem + ", el presupuesto para Zapatillas es de: " + presupZap);
}