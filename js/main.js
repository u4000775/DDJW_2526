	import {$} from "../library/jquery-4.0.0.slim.module.min.js";
	var p = $('#play');
	var o = $('#options');
	var s = $('#saves');
	var e = $('#exit');
    p.on('click', 
    function(){
        let alias = prompt("Quin és el teu àlies?");
		console.log(alias);
        window.location.assign("./html/game.html");
    });

    o.on('click', 
    function(){
        console.error("Opció no implementada");
    });

    s.on('click', 
    function(){
        console.error("Opció no implementada");
    });

    e.on('click', 
    function(){
        console.warn("No es pot sortir!");
    });
	