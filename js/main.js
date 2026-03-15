import {$} from "../library/jquery-4.0.0.slim.module.min.js";
$(document).ready(function() {
    var play = $('#play');
    var options = $('#options');
    var saves = $('#saves');
    var exit = $('#exit');

    play.click(function(){
        window.location.assign("./html/game.html");
    });

    options.click(function(){
        console.error("Opció no implementada");
    });

    saves.on('click', function(){
        console.error("Opció no implementada");
    });

    exit.on('click', function(){
        console.warn("No es pot sortir!");
    });
});
