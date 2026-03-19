import {clickCard, gameItems, selectCards, startGame, initCard, saveGame} from "./memory.js";

export class PlayScene extends Phaser.Scene{
    constructor(){
        super('PlayScene');
        this.resources = [];
        selectCards();
        this.cards = [...gameItems];
    }

    preload() {
        this.cards.forEach(card => {
            if (!this.resources.includes(card))
                this.resources.push(card);
            initCard(val => card = val); 
        });
        this.resources.push("../resources/back.png");
        this.resources.forEach(r=>this.load.image(r,r)); // Primer paràmetre nom Segon paràmetre direcció
    }

    create() { 
        startGame();
        this.cameras.main.setBackgroundColor(0xBFFCFF);
        this.cards.forEach((c, i)=> this.add.sprite(250 + 100*i, 300, c));
    }

    update() { }
}