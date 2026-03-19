import {clickCard, gameItems, selectCards, startGame, initCard, saveGame} from "./memory.js";

export class PlayScene extends Phaser.Scene{
    constructor(){
        super('PlayScene');
        this.resources = [];
        selectCards();
        this.cards = [...gameItems];
    }

    preload() {
        this.cards.forEach((card, indx) => {
            if (!this.resources.includes(card))
                this.resources.push(card);
            initCard(val => {
                this.cards[indx] = val
                console.log(val);
            }); 
        });
        this.resources.push("../resources/back.png");
        this.resources.forEach(r=>this.load.image(r,r)); // Primer paràmetre nom Segon paràmetre direcció
    }

    create() { 
        startGame();
        this.cameras.main.setBackgroundColor(0xBFFCFF);

        this.g_cards = this.physics.add.staticGroup();
        this.cards.forEach((c, i)=> this.g_cards.create(250 + 100*i, 300, c));

        this.g_cards.children.iterate((c, i) => {
            c.setInteractive();
            c.on('pointerup', ()=> clickCard(i));
        });
    }

    update() { 
        this.g_cards.children.iterate((c, i) => c.setTexture(this.cards[i]));
    }
}