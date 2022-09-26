import {Card, Deck, Pile, Hand} from '/classes.js';

var deck1 = new Deck();
var pile1 = new Pile();
var hand1 = new Hand();
var hand2 = new Hand();


var mainDiv = document.getElementById("mainDiv");
var deckDiv = document.getElementById("deck");
var pileDiv = document.getElementById("pile");
var handDiv1 = document.getElementById("hand1");
var handDiv2 = document.getElementById("hand2");

deckDiv.onclick = function(){
    if(deck1.deckArraylist.length != 0){
        pile1.deckArraylist.push(deck1.deckArraylist.pop());
        deck1.updateDeckFaceDown(deckDiv);
        pile1.updateDeckFaceUp(pileDiv);
    }
}
pileDiv.onclick = function(){
    if(pile1.deckArraylist.length != 0){
        deck1.deckArraylist.push(pile1.deckArraylist.pop());
        deck1.updateDeckFaceDown(deckDiv);
        pile1.updateDeckFaceUp(pileDiv);
    }
}



deck1.setStandardDeck();

console.log(deck1);

deck1.shuffleDeck();

hand1.fillDeck(13, deck1);
hand2.fillDeck(13, deck1);

deck1.updateDeckFaceDown(deckDiv);
pile1.updateDeckFaceUp(pileDiv);

hand1.updateDeckFaceUp(handDiv1);
hand2.updateDeckFaceDown(handDiv2);
