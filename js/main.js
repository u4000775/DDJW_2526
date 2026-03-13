import { $ } from '../library/jquery-4.0.0.slim.module.min.js';

$(window).on('load', function() {
    $('#play').on('click', function(){
        let alies = prompt("Identificat amb un alies");
        console.log(alies);
        $(location).attr('href', "./html/game.html");
    });

    $('#options').on('click', function(){
        alert("Opcions:");
    });

    $('#saves').on('click', function(){
        alert("Partides anteriors:");
    });

    $('#exit').on('click', function(){
        alert("Sortint....");
        console.warn("Carregant sortida");
    });
});