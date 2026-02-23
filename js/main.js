addEventListener('load', function() {
    document.getElementById('play').addEventListener('click', 
    function(){
        let alies = prompt("Introdueix l'àlies:");
        console.log("L'àlies és: " + alies);
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
