import { registrarDestino, mostrarItinerario } from "./viajes.js";

const iniciarApp = () => {
  registrarDestino("Paris", "2024-06-15", "Avión", 2);
  registrarDestino("Londres", "2024-07-01", "Tren", 1);
  registrarDestino("New York", "2024-08-10", "Autobús", 4);
  registrarDestino("Tokio", "2024-09-05", "Avión", 5);
  registrarDestino("Madrid", "2024-10-20", "Tren", 2);

  mostrarItinerario();
};

iniciarApp();
