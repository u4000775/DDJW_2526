import {$} from "../library/jquery-4.0.0.slim.module.min.js";

var playButton = $('#play');
playButton.on('click', function (){
    let player = prompt("Introdueix el nom del jugador","Jugador 1");
    if (player === null || player.trim() === "") {
        console.warn("Nom no valid");
    } else {
        console.log("Nom del jugador: " + player);
    }

    window.location.assign("./html/game.html");
});

var optionsButton = $('#options');
optionsButton.on('click', function (){
    console.error("Opció no implementada");
});

var savesButton = $('#saves');
savesButton.on('click', function (){
    console.error("Opció no implementada");
});

var exitButton = $('#exit');
exitButton.on('click', function (){
    console.error("Opció no implementada");
});