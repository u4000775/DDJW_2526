import {$} from "../library/jquery-4.0.0.slim.module.min.js";
var c1 = $('#play')
var c2 = $('#options')
var c3 = $('#saves')
var c4 = $('#exit')

c1.on('click', 
function(){
    let alies = prompt("Identificat amb un alies")
	console.log(alies);
    window.location.assign("./html/game.html");
});

c2.on('click', 
function(){
    alert("Opcions:");
});

c3.on('click', 
function(){
	alert("Partides anteriors:");
});

c4.on('click', 
function(){
	alert("Sortint....");
	console.warn("Carregant sortida");
});
