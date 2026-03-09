import {$} from "../library/jquery-4.0.0.slim.module.min.js";

$(function() {
    $('#play').on('click', function() {
        let jugador = prompt("El teu nom:");
        console.log("Benvingut: " + jugador);
        alert("Comença la partida " + jugador);
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
