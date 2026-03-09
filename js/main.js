addEventListener('load', function() {
    $('#play').on('click', 
    function(){
        //Demanem l'àlies i el guardem en variable
		let alias = prompt("Introdueix el teu àlies:");
		
		//Ara ho mostrem per consola
		console.log("L'àlies introduït és: " + alias);
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

