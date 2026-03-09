import {$} from "../library/jquery-4.0.0.slim.module.min.js";
import {clickCard, items, selectCards, startGame} from "./memory.js";

var cards = [];
var game = $('#game');

selectCards();

let totalCards = items.length;
// Calculem les columnes arrodonint l'arrel quadrada cap amunt
let columns = Math.ceil(Math.sqrt(totalCards));
game.css('grid-template-columns', `repeat(${columns}, 100px)`);
items.forEach(function (value, idx)
{
    let $img = $('<img>', {
        id: idx,
        title: 'card'
    });
    game.append($img);  // Add element
    cards.push($img);                       // Obtain element
    setValue(idx, value);                           // Modify values
});

export function setValue(idx, value){
    cards[idx].attr('src', value);
}

export function clickOff(idx){
    cards[idx].off('click');
}

export function clickOn(idx){
    cards[idx].on('click', function(){
        clickCard(idx);
    });
}

startGame();