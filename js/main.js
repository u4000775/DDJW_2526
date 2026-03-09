	addEventListener('load', function() {
    document.getElementById('play').addEventListener('click', 
    function(){
        let alias = prompt("Quin és el teu àlies?");
		console.log(alias);
        window.location.assign("./html/game.html");
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