

function score(gameString) {

    //Suponiendo la entrada de datos del juego como en el ejemplo: "0 & 10 & 3 & 2 & 16x0", lo convertimos en un array de números
    const frames = gameString.split('&').flatMap(item => {
        if (item.includes('x')) {
            const [times, num] = item.split('x').map(Number);
            return Array(times).fill(num);
        } else {
            return [Number(item)];
        }
    });

    let puntuacionTotal = 0;
    let rollActual = 0; //Variable que indicará si es la primera o segunda tirada de la ronda
    let rollCount = 0

    for (let actual = 0; actual < frames.length; actual++) {

        //Sumamos la puntuacion (solo de las 10 rondas)
        if (rollCount<11) {puntuacionTotal += frames[actual]}
        if (rollActual === 0) { rollCount++ }

        //Comprobamos is es semipleno y sumamos la siguiente tirada
        if (frames[actual] + frames[actual - 1] === 10 && rollActual === 1 && actual > 0 && rollCount < 10) {
            puntuacionTotal += frames[actual + 1];
        }

        //Comprobamos is es pleno y sumamos las dos tiradas siguientes
        if (frames[actual] === 10 && rollActual === 0 && rollCount < 10) {
            puntuacionTotal += frames[actual + 1] + frames[actual + 2];
            rollActual = 1;
        }


        
        rollActual = (rollActual + 1) % 2


    }
    return puntuacionTotal
}


module.exports = score