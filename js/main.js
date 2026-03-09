import {$} from "../library/jquery-4.0.0.slim.module.min.js";

    var clicar_play = $('#play');
	var clicar_opcio = $('#options');
	var clicar_saves = $('#saves');
	var clicar_sortir = $('#exit');
	
	clicar_play.on('click', function(){
	   let alies = prompt ("Introdueix el teu àlies");
		console.log(alies);
        window.location.assign("./html/game.html");
    });
	
	clicar_opcio.on('click', function(){
        console.error("Opció no implementada");
    });

    clicar_saves.on('click', function(){
        console.error("Opció no implementada");
    });

    clicar_sortir.on('click', function(){
        console.warn("No es pot sortir!");
    });
