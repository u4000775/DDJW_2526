import {$} from "../library/jquery-4.0.0.slim.module.min.js";

$(document).ready(function() {
    $('#play').click(function(){
        let alies = prompt("Introdueix l'àlies:");
        console.log("L'àlies és: " + alies);
        window.location.assign("./html/game.html");
    });

    $('#options').click(function(){
        console.error("Opció no implementada");
    });

    $('#saves').click(function(){
        console.error("Opció no implementada");
    });

    $('#exit').click(function(){
        console.warn("No es pot sortir!");
    });
});