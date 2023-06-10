import JugadorBase from '../ejercicio4/jugador.js';
import Mano from '../ejercicio8/mano.js';

class Jugador extends JugadorBase {
    constructor() {
        super();
        this.mano = new Mano();
    }
}

export default Jugador;