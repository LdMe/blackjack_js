import Carta from "../ejercicio6/carta.js";
import BarajaBase from "../ejercicio2/baraja.js";

class Baraja extends BarajaBase {
    sacarCarta() {
        let carta = super.sacarCarta();
        return new Carta(carta.palo, carta.valor);
    }
}

export default Baraja;