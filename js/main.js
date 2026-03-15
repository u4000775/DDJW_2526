$(document).ready(function() {
    $('#play').on('click', function() {
        let aliesJugador = prompt("Introdueix el teu àlies per jugar:");
        console.log(aliesJugador);
        window.location.assign("./html/game.html");
    });

    $('#options').on('click', function() {
        console.error("Opció no implementada");
    });

    $('#saves').on('click', function() {
        console.error("Opció no implementada");
    });

    $('#exit').on('click', function() {
        console.warn("No es pot sortir!");
    });
});