addEventListener('load', function() {
    document.getElementById('play').addEventListener('click', 
    function(){
        let nomJugador = prompt("Introdueix el teu nom per jugar:");
        console.log("El nom del jugador es: " + nomJugador);
        alert("Comença la partida");
    });

    document.getElementById('options').addEventListener('click', 
    function(){
        console.error("Opció no implementada");
    });

    document.getElementById('saves').addEventListener('click', 
    function(){
        console.error("Opció no implementada");
    });

    document.getElementById('exit').addEventListener('click', 
    function(){
        console.warn("No es pot sortir!");
    });
});
