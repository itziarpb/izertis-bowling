Kata "Software de bolera"
==========================

En esta kata se expone un problema en el que se debe implementar un algoritmo para el cálculo de la puntuación de una bolera.  
En este fichero encontrará una explicación de las normas y se plantearán casos de prueba de escenarios que el software debe soportar.  
Es un ejemplo perfecto de como TDD (Test-driven-development) nos puede ayudar a programar enfocando el desarrollo en ciclos de:
* Escritura de test: implementar test automatizados para probar la funcionalidad a desarrollar
* Escritura de código: implementar un código que implemente esa funcionalidad y pase los tests
* Refactorización: mejorar el código en diseño y comprensividad con buenos nombres y sin código duplicado.

Puedes resolver el problema en el lenguaje de programación que prefieras.
En caso de elejir java tienes en la carpeta "java-only-tests" los test implementados que puedes comentar e ir descomentando poco a poco según avances con la implementación. Si usas otro lenguaje de programación puedes traducir los tests fácilmente.

## Reglas
### Regla básicas
* Se tira 10 rondas de 2 tiradas máximo cada ronda.
* Al principio de cada ronda se colocan los 10 bolos.
* Cada bolo tirado suma un punto.

![Colocación bolos](resources/img/bolos.png?raw=true "Bolos")

### Tests
Se recomienda usar TDD y empezar escribiendo uno a uno los tests.  
La entrada al “algoritmo” serán el nº de bolos tirados y la salida la puntuación.  
Tests básicos:
* Tirar siempre un bolo (10 rondas x 2 tiradas = 20 tiradas => 20 bolos)
![Tirada siempre un bolo](resources/img/tirada_todo_1.png?raw=true "Siempre un bolo")
Este juego lo escribiremos por abreviar como "20x1" (<nº veces>x<nº bolos tirados>)  
    20x1 -> 20 puntos

* Tirar siempre 0 bolos:  
    20x0 -> 0 puntos

* Tirar 10 veces 3 y el resto 0:  
    10x3 & 10x0 -> 30 puntos



### Semipleno "/"
Si entre las 2 tiradas de la ronda tira los 10 bolos es un semipleno.  
Esto implica que te regalan como EXTRA para esta ronda tantos puntos como bolos tires en la siguiente TIRADA.  
Tests:
* Semipleno suma la siguiente tirada:  
    5 & 5 & 3 & 17x0 -> 16 puntos
* No semipleno si los 10 puntos no son en la misma ronda:  
    0 & 5 & 5 & 3 & 16x0 -> 13 puntos
* Semipleno SOLO suma la siguiente tirada:
    5 & 5 & 3 & 17x1 -> 33 puntos


### Pleno
Si en la primera tirada de una ronda tira los 10 bolos es un pleno. No tirará la segunda tirada de la ronda.  
Esto implica que te regalan como EXTRA para esta ronda tantos puntos como bolos tires en la siguientes 2 TIRADAS.  
Tests:
* Pleno suma los 2 siguientes tiradas:  
    10 & 3 & 2 & 16x0 -> 20 puntos
* Si los 10 son en segunda tirada es semipleno:  
    0 & 10 & 3 & 2 & 16x0 -> 18 puntos
* Pleno SOLO suma las 2 siguientes tiradas:  
    10 & 3 & 2 & 16x1 -> 36 puntos

### Regla del final
La décima ronda puede tener más tiradas para saber los puntos extra de plenos o semiplenos.  
Si haces un pleno tendrás dos lanzamientos más.  
Si haces un semipleno tendrás un lanzamiento más.  
Los bolos tirados en las rondas extra solo valen como puntos extra del pleno o semipleno no como tirada propia.  
Tests:
* Pleno en última ronda da 2 tiradas extra:  
    18x0 & 10 & 1 & 1 -> 12 puntos
* Semipleno en última ronda da 1 tirada extra:  
    18x0 & 5 & 5 & 1 -> 11 puntos
* Todas las tiradas perfectas de 10 bolos (las 10 del juego más las 2 extra) consiguiendo la puntuación máxima:
    12x10 -> 300

    
![300 puntos](resources/img/300puntos.png?raw=true "300 puntos")