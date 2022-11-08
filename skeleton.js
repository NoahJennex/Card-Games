import {Card, Deck, Pile, Hand} from '/classes.js';
import {getCoords, moveTopOfDeck, moveSelectedCards, onCardClick} from '/functions.js';

var defaultHandSize = 8;

var deck1 = new Deck("deck1");
var pile1 = new Pile("pile1");
var hand1 = new Hand(defaultHandSize, "hand1");
var hand2 = new Hand(defaultHandSize, "hand2");
var hand3 = new Hand(defaultHandSize, "hand3");
var hand4 = new Hand(defaultHandSize, "hand4");

var defaultAnimationTime = 300;

var centerDiv = document.getElementById("center");
var handDiv1 = document.getElementById("handDiv1");
var handDiv2 = document.getElementById("handDiv2");
var handDiv3 = document.getElementById("handDiv3");
var handDiv4 = document.getElementById("handDiv4");

// var pileDiv = document.getElementById("pile");
// var handDiv = document.getElementById("hand");
// var moveHandBtn = document.getElementById("moveHandBtn");

centerDiv.appendChild(pile1.div);
centerDiv.appendChild(deck1.div);
handDiv1.appendChild(hand1.div);
handDiv2.appendChild(hand2.div);
handDiv3.appendChild(hand3.div);
handDiv4.appendChild(hand4.div);

deck1.setStandardDeck();
deck1.shuffleDeck();
deck1.setDeck(false);
pile1.setDeck(true);

await hand1.fillDeck(hand1.startingSize, deck1, 100);
await hand2.fillDeck(hand2.startingSize, deck1, 100);
await hand3.fillDeck(hand3.startingSize, deck1, 100);
await hand4.fillDeck(hand4.startingSize, deck1, 100);

hand1.updateDeck(true);