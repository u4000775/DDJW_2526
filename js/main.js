import { $ } from "../library/jquery-4.0.0.slim.module.min.js";

$(document).ready(function() {
    $('#play').on('click', function(){
        let alias = prompt("Introdueix el teu àlies per jugar:");
        
        console.log("Àlies del jugador: " + alias);
        
        if (alias) {
            alert("Comença la partida, " + alias + "!");
        } else {
            alert("Comença la partida, jugador anònim!");
        }
        window.location.assign("./html/game.html");
    });

    $('#options').on('click', function(){
        console.error("Opció no implementada");
    });

    $('#saves').on('click', function(){
        console.error("Opció no implementada");
    });

    $('#exit').on('click', function(){
        console.warn("No es pot sortir!");
    });
});