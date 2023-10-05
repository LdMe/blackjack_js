import Baraja from "../ejercicio7/baraja.js";
import Jugador from "../ejercicio9/jugador.js";

class Juego {

    constructor() {
        
        this.iniciar();
    }
    
    async iniciar() {
        this.borrarMesa();
        this.baraja = new Baraja();
        this.baraja.mezclar();
        this.crupier = new Jugador();
        this.jugador = new Jugador();
        this.mostrarPuntuaciones(true);
        this.sacarCarta(this.jugador);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.sacarCarta(this.crupier);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.sacarCarta(this.jugador);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.sacarCarta(this.crupier,true);
        this.mostrarOpciones();
    }

    borrarMesa() {
        document.getElementById("opciones").innerHTML = "";
        document.getElementById("tablero").innerHTML = "";
        document.getElementById("puntuaciones").innerHTML = "";
        document.getElementById("ganador").innerHTML = "";
    }

    mostrarPuntuaciones(oculto=true) {
        let puntuaciones = document.getElementById("puntuaciones");
        let puntuacionJugador = document.createElement("p");
        puntuacionJugador.innerText = `Puntuación jugador: ${this.jugador.mano.getValor()}`;
        let puntuacionCrupier = document.createElement("p");
        if (oculto) {
            puntuacionCrupier.innerText = `Puntuación crupier: ?`;
        }
        else
        {
            puntuacionCrupier.innerText = `Puntuación crupier: ${this.crupier.mano.getValor()}`;
        }
        puntuaciones.innerHTML = "";
        puntuaciones.appendChild(puntuacionCrupier);
        puntuaciones.appendChild(puntuacionJugador);
    }

    sacarCarta(jugador,oculto=false) {
        if (jugador.plantado) {
            return;
        }
        let carta = this.baraja.sacarCarta();
        if (oculto) {
            carta.ocultar();
        }
        jugador.agregarCarta(carta);
        this.mostrarPuntuaciones(true);
    }

    mostrarOpciones(ended=false) {
        let opciones = document.getElementById("opciones");
        let botonPedir = document.createElement("button");
        botonPedir.innerText = "Pedir";
        botonPedir.addEventListener("click", () => {
            this.sacarCarta(this.jugador);
            this.jugar();
        });
        let botonPlantarse = document.createElement("button");
        botonPlantarse.innerText = "Plantarse";
        botonPlantarse.addEventListener("click", () => {
            this.jugador.plantarse();
            this.jugar();
        });
        opciones.innerHTML = "";
        let botonReset = document.createElement("button");
        botonReset.innerText = "Reiniciar";
        botonReset.addEventListener("click", () => {
           this.reiniciar();
        });
        if(!ended){
            opciones.appendChild(botonPedir);
            opciones.appendChild(botonPlantarse);
        }
        
        opciones.appendChild(botonReset);
    }

    async jugar() {
        if (this.jugador.plantado) {
            this.mostrarOpciones(true);
            if(this.jugador.mano.getValor() > 21){
                this.crupier.mano.mostrarCartas();
                this.crupier.plantarse();
                this.mostrarPuntuaciones(false);
                this.mostrarGanador();
                return;
            }
            this.jugarCrupier();
        }
    }

    async jugarCrupier() {
        this.crupier.mano.mostrarCartas();
        while (this.crupier.mano.getValor() < 17) {

            this.mostrarPuntuaciones(false);
            await new Promise(resolve => setTimeout(resolve, 1000));

            this.sacarCarta(this.crupier);

            this.mostrarPuntuaciones(false);
            
        }
        this.mostrarPuntuaciones(false);
        this.mostrarGanador();
        
    }

    jugadorGana(jugador1,jugador2) {
        const valorJugador1 = jugador1.mano.getValor();
        const valorJugador2 = jugador2.mano.getValor();
        if (valorJugador1 > 21 && valorJugador2 > 21) {
            return null;
        }
        if (valorJugador1 > 21) {
            return jugador2;
        }
        if (valorJugador2 > 21) {
            return jugador1;
        }
        if (valorJugador1 > valorJugador2) {
            return jugador1;
        }
        if (valorJugador2 > valorJugador1) {
            return jugador2;
        }
    }

       

    mostrarGanador(borrar=false) {
        
        let ganadorDOM = document.getElementById("ganador");
        let ganador = this.jugadorGana(this.jugador,this.crupier);
        if(borrar){
            ganadorDOM.innerText = "";
            return;
        }
        if (ganador === this.jugador) {
            ganadorDOM.innerText = "Has ganado!";
        }
        else if (   ganador === this.crupier) {
            ganadorDOM.innerText = "Gana la casa";
        }
        else {
            ganadorDOM.innerText = "Empate";
        }
    }

    reiniciar() {
        this.iniciar();
    }
    
}

export default Juego;