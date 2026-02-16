addEventListener('load', function() {
	var alies;
    document.getElementById('play').addEventListener('click', 
    function(){
        alies = window.prompt(message, default);
		console.warn(alies);
    });

    document.getElementById('options').addEventListener('click', 
    function(){
        console.error("Opció no implementada");
		var BO = document.getElementById('options');
		BO.body.Style.backgroundColor=rgba(0,200,0,0);
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