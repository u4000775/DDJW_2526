import {$} from "../library/jquery-4.0.0.slim.module.min.js";

// Obtenir elements
	var seleccionarPlay = $('#play');
	var seleccionarOptions = $('#options');
	var seleccionarSaves = $('#saves');
	var seleccionarExit = $('#exit');
	
// Detectar canvis
	seleccionarPlay.on('click', function (){
        var alias = prompt("Quin nom tens?");
		console.log(alias);
		alert("Benvingut " + alias + "!");
        window.location.assign("./html/game.html");
    });

    seleccionarOptions.on('click', function (){
        console.error("Opció no implementada");
    });

    seleccionarSaves.on('click', function (){
        console.error("Opció no implementada");
    });

    seleccionarExit.on('click', function (){
        console.warn("No es pot sortir!");
	});
	