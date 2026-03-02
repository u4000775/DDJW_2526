import {$} from "../library/jquery-4.0.0.slim.module.min.js";

	var alies="";
    $('#play').on('click', 
    function(){
        alies=prompt("Introdueix el teu àlies: ");
		console.log(alies);
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