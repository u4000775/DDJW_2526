import {$} from "../library/jquery-4.0.0.slim.module.min.js";
$(function() {
    
    $('#play').on('click', 
    function(){
        const nom_jugador = prompt("Introdueix el teu nom:",
                "");
        alert("Hola " + nom_jugador + "!\nComença la partida");
        window.location.assign("./html/game.html");
    });

    $('#options').on('click', 
    function(){
        console.error("Opció no implementada");
    });

    $('#saves').on('click', 
    function(){
        console.error("Opció no implementada");
    });

    $('#exit').on('click', 
    function(){
        console.warn("No es pot sortir!");
    });
});