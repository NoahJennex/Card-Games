import {Card, Deck, Pile, Hand} from '/classes.js';
import {moveCardElement, getCoords, moveTopOfDeck} from '/functions.js';

var deck1 = new Deck("deck1");
var pile1 = new Pile("pile");
var hand1 = new Hand(13, "hand1");
var hand2 = new Hand("hand2");


var deckDiv = document.getElementById("deck");

var pileDiv = document.getElementById("pile");
var handDiv = document.getElementById("hand");
var moveHandBtn = document.getElementById("moveHandBtn")

deckDiv.appendChild(deck1.div);
pileDiv.appendChild(pile1.div);
handDiv.appendChild(hand1.div);


deck1.setStandardDeck();

console.log(deck1);

deck1.shuffleDeck();


hand1.fillDeck(hand1.startingSize, deck1);
hand1.setDeck(true);
console.log(hand1);
// hand2.fillDeck(13, deck1);

deck1.setDeck(false);
pile1.setDeck(true);

deck1.div.onclick = function(){
    if(deck1.deckArraylist.length != 0){
        moveTopOfDeck(deck1, pile1, true, true);
    }
}
pile1.div.onclick = function(){
    if(pile1.deckArraylist.length != 0){
        moveTopOfDeck(pile1, hand1, true, true);
    }
}
// moveHandBtn.onclick = function(){

// }

