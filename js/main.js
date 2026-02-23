addEventListener('load', function() {
    document.getElementById('play').addEventListener('click', 
    function(){
        let aliasJugador = prompt("Introdueix el teu àlies per jugar:");
        console.log("Àlies del jugador: " + aliasJugador);
        alert("Benvingut, " + aliasJugador + "! El joc començarà aviat.");
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