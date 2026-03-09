import {$} from '../library/jquery-4.0.0.slim.module.min.js';
import {setValue, clickOn, clickOff} from './game.js';

const resources = ['../resources/cb.png', '../resources/co.png',
                '../resources/sb.png', '../resources/so.png',
                '../resources/tb.png', '../resources/to.png'];
const back = '../resources/back.png';
export var items = [];

var game = {
    ready: 0,
    lastCard: null,
    score: 200,
    pairs: 2,
    blocked: false
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
    items.forEach(function(_, indx){
        setTimeout(function(){
            game.ready++;
            goBack(indx);
        }, 1000 + 100 * indx);
    });
}

export function clickCard(indx){
    if (game.ready < items.length) return;
    if (game.blocked) return;
    if (game.lastCard === indx) return;

    goFront(indx);

    if (game.lastCard === null) {
        game.lastCard = indx;
    }
    else {
        if (items[game.lastCard] === items[indx]) {
            game.pairs--;
            game.lastCard = null;

            if (game.pairs <= 0){
                alert(`Has guanyat amb ${game.score} punts!!!!`);
                window.location.assign("../");
            }
        }
        else {
            let firstCard = game.lastCard;
            game.blocked = true;
            game.lastCard = null;
            game.score -= 25;

            setTimeout(function() {
                goBack(indx);
                goBack(firstCard);
                game.blocked = false;

                if (game.score <= 0){
                    alert("Has perdut");
                    window.location.assign("../");
                }
            }, 1000);
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
