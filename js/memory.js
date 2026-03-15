import { jQuery } from '../library/jquery-4.0.0.slim.module.min.js';
import {setValue, clickOn, clickOff} from './game.js';

const resources = ['../resources/cb.png', '../resources/co.png',
                '../resources/sb.png', '../resources/so.png',
                '../resources/tb.png', '../resources/to.png'];
const back = '../resources/back.png';
export var items = [];

var game = {
    ready: false,
    lastCard: null,
    score: 200,
    pairs: 2
}

function shuffe(arr){
    arr.sort(function () {return Math.random() - 0.5});
}

export function selectCards(){
    items = resources.slice();          
    shuffe(items);                      
    items = items.slice(0, game.pairs); 
    items = items.concat(items);        
    shuffe(items);                      
}

export function startGame(){
    let count = 0;
    items.forEach(function(_,indx){
        setTimeout(function(){
            goBack(indx);
            count++;
            if (count === items.length) game.ready = true;
        }, 1000 + 100 * indx);
    });
}

export function clickCard(indx){
    if (!game.ready) return;

    goFront(indx);

    if (game.lastCard === null) {
        game.lastCard = indx;
    } 
    else {
        let currentCard = indx;
        let previousCard = game.lastCard;
        game.lastCard = null;

        if (items[previousCard] === items[currentCard]){
            game.pairs--;
            if (game.pairs <= 0){
                setTimeout(() => {
                    alert(`Has guanyat amb ${game.score} punts!!!!`);
                    window.location.assign("../");
                }, 500);
            }
        }
        else {
            game.ready = false; 

            setTimeout(function(){
                goBack(currentCard);
                goBack(previousCard);
                game.ready = true; 
            }, 1000); 

            game.score -= 25;
            if (game.score <= 0){
                setTimeout(() => {
                    alert ("Has perdut");
                    window.location.assign("../");
                }, 500);
            }
        }
    }
}

function goBack(idx){
    setValue(idx, back);
    clickOn(idx);
}

function goFront(idx){
    setValue(idx, items[idx]);
    clickOff(idx);
}