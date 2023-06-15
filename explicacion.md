# Clase Carta

## Crear título

El siguiente código es una función llamada crearTitulo que tiene como parámetro una variable booleana llamada reversed. El propósito de esta función es devolver un elemento "div" que contendrá una imagen y el valor de una carta de la baraja con un estilo específico según el valor true o false que le demos a reversed.


- Se crea un elemento div y se le añade la clase "titulo".

- Se crea un elemento div y se le añade la clase "valor".

- Se asigna el valor de la carta al elemento div valor creado en la línea anterior.

- Se crea un elemento img y se le añade la clase "palo".

- Se establece la ruta de la imagen a mostrar en el elemento img mediante el uso de `public/img/${this.palo.toLowerCase()}.png` donde this.palo es la variable que contiene el palo de la carta, y se convierte su valor a minúsculas para que coincida con el nombre del archivo de imagen.

- Se agrega el elemento "valor" como hijo del elemento "titulo".

- Se agrega el elemento "palo" como hijo del elemento "titulo".

- Se verifica si reversed es potencialmente true.

- Si reversed es true, se agrega una clase "reversed" al elemento "titulo".

- La función devuelve el elemento "titulo" creado.
## Crear Icono

El siguiente código es una función llamada crearIcono. El propósito de esta función es devolver un elemento "article" que contendrá una imagen del palo de una carta de la baraja.

Pasos que realiza esta función:

- Se crea un elemento "article".

- Se crea un elemento "img" y se le añade la clase "palo".

- Se establece la ruta de la imagen a mostrar en el elemento img mediante el uso de `public/img/${this.palo.toLowerCase()}.png` donde this.palo es la variable que contiene el palo de la carta, y se convierte su valor a minúsculas para que coincida con el nombre del archivo de imagen.

- Se agrega el elemento "palo" como hijo del elemento "article".

- La función devuelve el elemento "article" creado.
## Crear Fila

El siguiente código es una función llamada crearFila que tiene como parámetro un array de elementos. El propósito de esta función es devolver un elemento "section" con la clase "fila" que contenga los elementos del array.

Pasos que realiza esta función:

- Se crea un elemento "section".

- Se le añade la clase "fila" al elemento.

- Se realiza un bucle que recorre el array elementos.

- Se agrega cada elemento del array como hijo del elemento "fila".

- La función devuelve el elemento "fila" con los elementos como hijos.
## Ocultar

El siguiente código es un método llamado ocultar.

Pasos que realiza este método:

- Se agrega la clase "oculto" al elemento con clase "carta" para que la carta se vuelva invisible y no se muestre en la pantalla.
## Mostrar

El siguiente código es un método llamado mostrar.

Pasos que realiza este método:

- Se remueve la clase "oculto" del elemento con clase "carta" para que la carta sea visible y se muestre en pantalla.
## Crear Figura

El propósito de esta función es devolver un elemento "div" que contendrá la imagen de la figura de una carta de la baraja.

Pasos que realiza esta función:

- Se crea un elemento "div" y se le añade la clase "figura".

- Se crea un elemento "img" y se asigna la ruta de la imagen a mostrar en la imagen mediante el uso de `public/img/${this.valor.toLowerCase()}${this.palo.toLowerCase()}.png`. Donde this.valor es la variable que contiene el valor de la carta, y this.palo es la variable que contiene el palo de la carta. Ambos valores se convierten a minúsculas para que coincidan con el nombre de archivo.

- Se agrega el elemento "imagen" como hijo del elemento "figura".

- Se devuelve el elemento "figura" creado.
## Crear Cuerpo

El propósito de esta función es devolver un elemento "div" que contendrá los iconos o figuras de una carta de la baraja.

Pasos que realiza esta función:

- Se crea un elemento "div" y se le añade la clase "cuerpo".

- Si el valor de la carta es "J", "Q" o "K", se agrega una figura de la carta al cuerpo mediante el uso de la función crearFigura() y se devuelve el cuerpo.

- En caso contrario, se obtiene la cantidad de iconos necesarios mediante la función getValor() que devuelve un número de acuerdo al valor de la carta.

- Se obtiene la distribución de la carta desde el objeto distribución (que es un objeto que indica la cantidad y distribución de iconos para cada posible valor de carta).

- Se realiza un bucle que recorre cada elemento de la distribución de la carta.

- En cada elemento se crea una fila de iconos del palo correspondiente mediante el uso de la función crearIcono() y se agrega a un array llamado "fila".

- Se agrega la fila creada a un array llamado "elementos".

- Se crea una fila contenedora para cada elemento del array elementos mediante la función crearFila() que recibe como parámetro el array fila.

- Se agrega cada fila contenedora al cuerpo.

- La función devuelve el cuerpo creado.
## getHTML

El propósito de este método es devolver el elemento HTML completo que representa la carta con su cuerpo y su borde.

Pasos que realiza este método:

- Se devuelve el elemento "div" que contiene toda la estructura y contenido de la carta, y que ha sido asignado previamente a la propiedad "contenedor" al momento de crear una instancia de la clase.

- Este método se utiliza para obtener la representación HTML completa de una carta, la cual puede ser insertada en la página web mediante el uso de JavaScript o manipulando el DOM.
## Crear Carta

El propósito de esta función es crear y configurar todos los elementos HTML necesarios para representar una carta.

Pasos que realiza esta función:

- Se crea un elemento "div" que será el contenedor de la carta, y se le agrega la clase "contenedor".

- Se crea un elemento "div" que contendrá la carta, y se le agrega la clase "carta".

- Se crean dos elementos adicionales que representarán la parte frontal y posterior de la carta, y se les agrega la clase "front" y "back", respectivamente.

- Se crea un elemento de título para la parte superior de la carta mediante la función crearTitulo() y se agrega a "front".

- Se crea el cuerpo de la carta mediante la función crearCuerpo(), que devuelve un elemento "div" conteniendo los iconos o figuras de la carta, y se agrega a "front".

- Se crea un segundo elemento de título para la parte inferior de la carta mediante la función crearTitulo() con el argumento reversed=true y se agrega a "front".

- Se agrega el elemento "front" como hijo del elemento "carta".

- Se agrega el elemento "back" como hijo del elemento "carta".

- Se agrega el elemento "carta" como hijo del elemento "contenedor".

- La función no devuelve nada, pero establece la propiedad "contenedor" de la instancia de la clase con el valor del elemento "contenedor" creado, lo que será útil para obtener el contenido HTML completo de la carta mediante el método getHTML().


# Clase Baraja

## Sacar Carta

El propósito de esta función es sacar una carta al azar de la baraja y devolver una instancia de la clase Carta con el palo y valor de la carta seleccionada.

Pasos que realiza esta función:

- Se llama a la función sacarCarta() de la clase padre (Baraja), la cual se encarga de seleccionar y eliminar una carta aleatoria de la baraja.

- Se crea una nueva instancia de la clase Carta, utilizando los valores obtenidos del objeto carta seleccionado aleatoriamente por la función sacarCarta() de la clase padre.

- Se devuelve la nueva instancia de la clase Carta.

- Al devolver una nueva instancia en lugar del objeto original, se garantiza que las dos instancias son independientes y no modificarán el estado del otro.

# Clase Mano

## Agregar Carta

El propósito de esta función es agregar una carta al mazo y añadir su representación HTML al deck del mazo.

Pasos que realiza esta función:

- Se llama a la función agregarCarta() de la clase padre (Mano), la cual se encarga de añadir la carta al mazo.

- Se obtiene la representación HTML de la carta añadida llamando al método getHTML() de la instancia de la clase Carta.

- Se agrega la representación HTML de la carta al elemento "deck" de la mano.


## Ocultar Cartas

El propósito de este método es ocultar todas las cartas del mazo excepto la carta superior (la primera carta agregada al mazo), de manera que el usuario solo pueda ver la parte superior de la carta.

Pasos que realiza este método:

- Se recorre el array de cartas del mazo utilizando el método forEach(), que acepta una función callback como argumento.

- En cada iteración se comprueba si el índice de la carta actual es diferente a cero (la primera carta del mazo).

- Si el índice es diferente a cero, se llama al método ocultar() de la instancia de la clase Carta correspondiente para ocultar la carta.


## Mostrar Cartas

El propósito de este método es mostrar todas las cartas del mazo, de manera que el usuario pueda ver tanto la parte superior como la inferior de las cartas.

Pasos que realiza este método:

- Se recorre el array de cartas del mazo utilizando el método forEach(), que acepta una función callback como argumento.

- En cada iteración se llama al método mostrar() de la instancia de la clase Carta correspondiente para mostrar la carta completa.

# Clase Juego

## Iniciar

El propósito de este método es comenzar una nueva partida de juego de cartas.

Pasos que realiza este método:

- Se llama al método borrarMesa() para limpiar la mesa de todas las cartas que puedan haber quedado del juego anterior.

- Se crea una nueva instancia de la clase Baraja y se mezcla para que las cartas estén en orden aleatorio.

- Se crean dos instancias de la clase Jugador, una para el crupier y otra para el jugador.

- Se llama al método mostrarPuntuaciones() para mostrar las puntuaciones iniciales de los jugadores.

- Se llama al método sacarCarta() cuatro veces, dos para el jugador y dos para el crupier, para repartir las cartas iniciales de la partida.

- Entre cada sacarCarta() se usa la función setTimeout() para "esperar" un segundo antes de continuar la ejecución, de manera que las cartas se muestren en la página web con una pequeña pausa.

- En la segunda llamada al método sacarCarta() para el crupier se indica un argumento opcional de "true" para que la carta esté oculta.

- Se llama al método mostrarOpciones() para mostrar las opciones de juego disponibles para el usuario.

- Este método utiliza una promesa para que la función llamante (la que inicia el juego) espere a que se completen todas las acciones dentro del método antes de continuar, lo que permite asegurarse de que todas las cartas y las puntuaciones estén actualizadas correctamente antes de que el usuario realice su jugada.

## Borrar Mesa

El siguiente código es un método llamado borrarMesa que pertenece a la clase Juego.

El propósito de este método es eliminar todas las cartas que se encuentren en la mesa y limpiar cualquier elemento de la página que muestre información de partidas anteriores.

Pasos que realiza este método:

- Se accede al elemento dentro del archivo HTML utilizando getElementById() y se selecciona el elemento con id "opciones". Luego se le asigna una cadena de texto vacía para borrar cualquier información que se mostraba en este elemento.

- Se repiten los mismos pasos anteriores, pero esta vez se accede al elemento con id "tablero" para borrar cualquier carta que estuviera en la mesa durante partidas anteriores.

- Se repiten los mismos pasos anteriores, pero esta vez se accede al elemento con id "puntuaciones" para borrar cualquier información de puntuaciones que estuviera en la página.

- Se repiten los mismos pasos anteriores, pero esta vez se accede al elemento con id "ganador" para borrar cualquier información de partidas anteriores sobre quién fue el ganador.

- De esta manera, al terminar la ejecución de este método, la mesa queda completamente vacía y lista para comenzar una nueva partida.

## Mostrar Puntuaciones


El propósito de este método es mostrar en la página web las puntuaciones actuales de los jugadores.

Pasos que realiza este método:

- Se accede al elemento dentro del archivo HTML utilizando getElementById() y se selecciona el elemento con id "puntuaciones".

- Se crea un elemento <p> para mostrar la puntuación del jugador. En el texto se utiliza la interpolación de cadenas (`${}`) para insertar el valor actual de la puntuación, el cual se obtiene con el método getValor() de la instancia de la clase Mano que representa la mano del jugador.

- Se crea otro elemento <p> para mostrar la puntuación del crupier. Se utiliza un condicional if/else para determinar si la puntuación del crupier debe mostrarse oculta (en caso de que aún no haya sacado su segunda carta). De lo contrario, se muestra la puntuación de manera normal.

- Se borra cualquier información de puntuaciones que se encontrara previamente dentro del elemento con id "puntuaciones", utilizando la propiedad innerHTML.

- Se agregan los elementos <p> creados anteriormente dentro del elemento con id "puntuaciones", utilizando el método appendChild().

- De esta manera, al ejecutar este método se actualiza la información de puntuaciones en la página web, lo que puede ser útil para que el jugador sepa qué tan cerca está de ganar la partida.
## Sacar Carta


El propósito de este método es sacar una carta de la baraja para el jugador o el crupier.

Se utiliza un argumento "jugador" para especificar para qué jugador se debe sacar la carta.

Por defecto se asume que la carta no está oculta a menos que se especifique lo contrario con el argumento "oculto".

Pasos que realiza este método:

- Se verifica si el jugador ha decidido plantarse, lo cual puede suceder si ya tiene una mano lo suficientemente buena o si llegó al valor máximo permitido de 21. Si el jugador está plantado, no se hace nada y el método se detiene con la instrucción return.

- Se llama al método sacarCarta de la instancia de la clase Baraja, lo que permite sacar una carta aleatoria.

- Se verifica si la carta debe ser ocultada, lo cual puede suceder solo en el caso del crupier en su segunda carta, mediante el argumento opcional "oculto". En caso de que la carta deba ser ocultada, se llama al método ocultar() de la instancia de la clase Carta para que la imagen de la carta no sea visible para el jugador.

- Se agrega la carta a la mano del jugador correspondiente mediante el método agregarCarta() de la instancia de la clase Jugador.

- Se llama al método mostrarPuntuaciones con el valor de "true" para actualizar las puntuaciones en la página web con la nueva carta.

- De esta manera, al ejecutar este método se saca una nueva carta de la baraja, se agrega a la mano del jugador correspondiente, se actualizan las puntuaciones en la página web y se verifica si el jugador desea plantarse.

## Mostrar Opciones

El propósito de este método es mostrar en la página web las opciones disponibles para el jugador en el momento de tomar su turno, que son pedir una carta o plantarse.

Se utiliza un argumento opcional "ended" para especificar si el juego ha terminado, en cuyo caso no se deben mostrar las opciones de pedir y plantarse.

Pasos que realiza este método:

- Se accede al elemento dentro del archivo HTML utilizando getElementById() y se selecciona el elemento con id "opciones".

- Se crea un botón para pedir una carta. Se añade un "event listener" para que al hacer click se invoque el método sacarCarta con el jugador correspondiente y luego juegue.

- Se crea un botón para plantarse. Se añade un "event listener" para que al hacer click se invoque el método plantarse() de la instancia de la clase Jugador correspondiente y luego se invoque el método jugar.

- Se borra cualquier información de opciones que se encontrara previamente dentro del elemento con id "opciones", utilizando la propiedad innerHTML.

- Se crea un botón para reiniciar el juego. Se añade un "event listener" para que al hacer click se invoque el método reiniciar() de la instancia de la clase Juego.

- Se verifica si el argumento opcional "ended" es falso. Si es así, se agrega el botonPedir y el botonPlantarse al elemento opciones utilizando el método appendChild(). En caso contrario, solo se agrega el botonReset.

- De esta manera, al ejecutar este método se muestran en la página web las opciones disponibles para el jugador, permitiéndole continuar jugando o reiniciar el juego en caso de ser necesario.
## Jugar

El propósito de este método es llevar a cabo las acciones que ocurren durante el juego, es decir, permitir que el jugador juegue y luego hacer que el crupier juegue.

Si el jugador está plantado, se verifica si la puntuación de su mano es mayor a 21. Si esto sucede, se muestra la mano del crupier, se hace que el crupier se plante y se actualiza la página web con el ganador.

Luego se llama al método jugarCrupier para que el crupier juegue.

Pasos que realiza este método:

- Se verifica si el jugador está plantado, usando la propiedad plantado de la instancia de la clase Jugador. Si es verdadero, se ejecuta el bloque de código dentro del if.

- Se llama al método mostrarOpciones con el valor de "true" para mostrar el botón de reinicio y ocultar los botones de pedir y plantarse.

- Se verifica si la puntuación de la mano del jugador es mayor que 21 con el método getValor() de la instancia de la clase Mano. Si es así, se ejecuta el bloque de código dentro del if.

- Se llama al método mostrarCartas de la instancia de la clase Mano correspondiente al crupier para que se muestren todas sus cartas.

- Se llama al método plantarse() de la instancia de la clase Crupier.

- Se llama al método mostrarPuntuaciones con el valor de "false" para actualizar la página web con las puntuaciones finales de la partida.

- Se llama al método mostrarGanador para mostrar quién ganó la partida.

- Se utiliza la instrucción return para finalizar la ejecución del método.

- Si el jugador no está plantado, se llama al método jugarCrupier para que el crupier juegue su turno.

- De esta manera, al ejecutar este método se permite que el jugador juegue y luego se hace que el crupier juegue, mostrando en la página web el ganador final.

## Jugar Crupier

El propósito de este método es llevar a cabo las acciones que ocurren durante el turno del crupier.

Se muestra la mano del crupier, se saca cartas hasta que la puntuación de su mano sea igual o mayor a 17 y se actualiza la página web con la puntuación final del crupier y el ganador.

Pasos que realiza este método:

- Se llama al método mostrarCartas de la instancia de la clase Mano correspondiente al crupier para que se muestren todas sus cartas.

- Se entra en un bucle while que se ejecuta mientras la puntuación de la mano del crupier es menor a 17.

- En cada iteración del bucle:

    - Se llama al método mostrarPuntuaciones con el valor de "false" para actualizar la página web con las puntuaciones de cada jugador.
    
    - Se utiliza la función setTimeout para esperar un segundo antes de sacar la siguiente carta del mazo, haciendo que la jugada sea más realista.
    
    - Se llama al método sacarCarta con la instancia de la clase Crupier para que saque una carta del mazo.
    
    - Se llama al método mostrarPuntuaciones con el valor de "false" para actualizar la página web con las puntuaciones de cada jugador.
    
- Luego que el bucle termina, se llama al método mostrarPuntuaciones con el valor de "false" para actualizar la página web con las puntuaciones de cada jugador, incluyendo las del crupier.

- Se llama al método mostrarGanador para mostrar quién ganó la partida.

- De esta manera, al ejecutar este método se permite que el crupier juegue su turno, mostrando en la página web el ganador final.
## Jugador Gana

El siguiente código es un método llamado jugadorGana que pertenece a la clase Juego.

- El propósito de este método es determinar si el jugador es el ganador de la partida.

- Se utiliza para verificar si la puntuación de la mano del jugador es menor o igual a 21 y si la puntuación de la mano del crupier es mayor a 21 o menor que la del jugador.

- Si ambas condiciones se cumplen, se devuelve el valor "true", indicando que el jugador ganó la partida.

Pasos que realiza este método:

- Se utiliza la instrucción return para indicar si se cumple una condición.

- La primera condición verifica si la puntuación de la mano del jugador es menor o igual a 21 con el método getValor() de la instancia de la clase Mano correspondiente al jugador.

- La segunda condición verifica si la puntuación de la mano del crupier es mayor a 21 o menor que la del jugador.

- Si ambas condiciones se cumplen, se devuelve el valor "true", indicando que el jugador ganó la partida.

- Si alguna de las condiciones no se cumple, se devuelve el valor "false", indicando que el jugador no ganó la partida.

- De esta manera, al ejecutar este método se determina si el jugador ganó la partida o no.
## Crupier Gana

El propósito de este método es determinar si el crupier es el ganador de la partida.

- Se utiliza para verificar si la puntuación de la mano del crupier es menor o igual a 21 y si la puntuación de la mano del jugador es mayor a 21 o menor que la del crupier.

- Si ambas condiciones se cumplen, se devuelve el valor "true", indicando que el crupier ganó la partida.

Pasos que realiza este método:

- Se utiliza la instrucción return para indicar si se cumple una condición.

- La primera condición verifica si la puntuación de la mano del jugador es mayor a 21 con el método getValor() de la instancia de la clase Mano correspondiente al jugador.

- La segunda condición verifica si la puntuación de la mano del crupier es menor o igual a 21 y si la puntuación de la mano del jugador es mayor a 21 o menor que la del crupier.

- Si ambas condiciones se cumplen, se devuelve el valor "true", indicando que el crupier ganó la partida.

- Si alguna de las condiciones no se cumple, se devuelve el valor "false", indicando que el crupier no ganó la partida.

- De esta manera, al ejecutar este método se determina si el crupier ganó la partida o no.
## Mostrar Ganador

El propósito de este método es mostrar quién ganó la partida en la página web.

Se utiliza para actualizar el texto del elemento con el id "ganador", dependiendo del resultado de la partida.

El parámetro opcional "borrar" indica si se deben borrar los resultados previos antes mostrar el ganador actual.

Pasos que realiza este método:

- Se utiliza la instrucción let para declarar una variable llamada "ganador" y se le asigna el valor del elemento con el id "ganador" de la página web.

- Si el parámetro opcional "borrar" es verdadero, se borra el contenido del elemento "ganador" y se devuelve de la función.

- Se emplea un condicional if-else para determinar quién ganó la partida.

- Si la condición this.jugadorGana() devuelve "true", se muestra el mensaje "Has ganado!" en el elemento "ganador".

- Si la condición this.crupierGana() devuelve "true", se muestra el mensaje "Gana la casa" en el elemento "ganador".

- Si ninguna de las condiciones anteriores es verdadera, se muestra el mensaje "Empate" en el elemento "ganador".

- De esta manera, al ejecutar este método se muestra el ganador de la partida en la página web.
## Reiniciar

El propósito de este método es reiniciar la partida para comenzar un nuevo juego.

Se utiliza para llamar al método "iniciar()" de la misma clase que se encarga de reiniciar las manos de los jugadores y la baraja.

Pasos que realiza este método:

- Se llama al método "iniciar()" de la misma instancia de la clase Juego en la que se encuentra el método "reiniciar()".

- Este método "iniciar()" se encarga de establecer nuevos valores para las manos de los jugadores y la baraja.

- De esta manera, al ejecutar este método se reinicia la partida para comenzar un nuevo juego.