addEventListener('load', function() {
    document.getElementById('play').addEventListener('click', 
    function(){
        //Demanem l'àlies i el guardem en variable
		let alias = prompt("Introdueix el teu àlies:");
		
		//Ara ho mostrem per consola
		console.log("L'àlies introduït és: " + alias);
    });

    document.getElementById('options').addEventListener('click', 
    function(){
        console.error("Opció no implementada");
    });

    document.getElementById('saves').addEventListener('click', 
    function(){
        console.error("Opció no implementada");
    });

    document.getElementById('exit').addEventListener('click', 
    function(){
        console.warn("No es pot sortir!");
    });
});