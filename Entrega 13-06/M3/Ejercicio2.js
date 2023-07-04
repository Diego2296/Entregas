
capital = [15000, 300000, 485000]
plazo = [30, 180, 60]
tasa = [0.15, 0.10, 0.23]
nombre = ["Plan001", "Plan002", "Plan003"]


creditos = [
    [capital[0], plazo[0], tasa[0], nombre[0]],
    [capital[1], plazo[1], tasa[1], nombre[1]],
    [capital[2], plazo[2], tasa[2], nombre[2]],
]

var interes = 0

for (i = 0; i < creditos.length; i++) {
    interes = ((capital[i]*plazo[i]*tasa[i])/100);
    console.log("El plan: " + nombre[i] + " genera un interes de: " + interes);
}