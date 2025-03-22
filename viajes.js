// viajes.js

const destinos = [];

export const registrarDestino = (destino, fecha, transporte, personas = 1) => {
  const nuevoViaje = {
    destino,
    fecha,
    transporte,
    personas,
    costo: calcularCosto(destino, transporte, personas),
  };

  destinos.push(nuevoViaje);
};

const calcularCosto = (destino, transporte, personas) => {
  let costoBase = 0;

  const costosDestinos = {
    Paris: 500,
    Londres: 400,
    "New York": 600,
    Tokio: 700,
    Madrid: 350,
  };

  costoBase = costosDestinos[destino] || 300;

  const costosTransporte = {
    Avión: 200,
    Tren: 100,
    Autobús: 50,
  };

  costoBase += costosTransporte[transporte] || 50;

  const descuento = personas > 3 ? 0.1 : 0;
  return costoBase * personas * (1 - descuento);
};

export const mostrarItinerario = () => {
  let output = "Itinerario de Viajes:\n \n";

  destinos.forEach(({ destino, fecha, transporte, personas, costo }) => {
    output += `Destino: ${destino}\nFecha: ${fecha}\nTransporte: ${transporte}\nPersonas: ${personas}\nCosto total: $${costo.toFixed(
      2 //Redondea el costo en 2 decimales
    )}\n---------------------------\n`;
  });

  console.log(output); // Muestra en la consola del navegador
  document.getElementById("output").innerText = output; // Muestra en la página
};
