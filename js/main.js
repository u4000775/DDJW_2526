addEventListener('load', function() {
    document.getElementById('play').addEventListener('click', function() {
        let jugador = prompt("El teu nom:");
        console.log("Benvingut: " + jugador);
        alert("Comença la partida " + jugador);
        window.location.assign("./html/game.html");
    });

    document.getElementById('options').addEventListener('click', function() {
        console.error("Opció no implementada");
    });

    document.getElementById('saves').addEventListener('click', function() {
        console.error("Opció no implementada");
    });

    document.getElementById('exit').addEventListener('click', function() {
        console.warn("No es pot sortir!");
    });
});
