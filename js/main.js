addEventListener('load', function() {
    document.getElementById('play').addEventListener('click', 
    function(){
        let alias = prompt("Introdueix el teu àlies per jugar:");
        
        console.log("Àlies del jugador: " + alias);
        
        if (alias) {
            alert("Comença la partida, " + alias + "!");
        } else {
            alert("Comença la partida, jugador anònim!");
        }
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