import {Card, Deck, Hand} from '/classes.js';

var pileArraylist = [];
var deck1 = new Deck();
var hand1 = new Hand();
var hand2 = new Hand();


var mainDiv = document.getElementById("mainDiv");
var deckDiv = document.getElementById("deck");
var pileDiv = document.getElementById("pile");
var handDiv1 = document.getElementById("hand1");
var handDiv2 = document.getElementById("hand2");

deckDiv.onclick = function(){
    if(deck1.deckArraylist.length != 0){
        pileArraylist.push(deck1.deckArraylist.pop());
        updateDeck();
        updatePile();
    }
}
pileDiv.onclick = function(){
    if(pileArraylist.length != 0){
        deck1.deckArraylist.push(pileArraylist.pop());
        updateDeck();
        updatePile();
    }
}


var deckCount = 0;
var pileCount = 0;
var handCount = 0;


deck1.setStandardDeck();

console.log(deck1);

deck1.shuffleDeck();

hand1.fillHand(13, deck1);
hand2.fillHand(13, deck1);

updateDeck();
updatePile();
updateHandFaceUp(hand1, handDiv1);
updateHandFaceDown(hand2, handDiv2);


function updateDeck(){
    deckDiv.innerHTML = "";
    deck1.deckArraylist.forEach(element => {
        if(element == deck1.deckArraylist[0]){deckCount = 0;}
        let cardPic = document.createElement("img");
        cardPic.className="cardImg";
        cardPic.draggable=false;
        cardPic.src=element.pictureBack;
        cardPic.style.position = "absolute";
        cardPic.style.left = deckCount/4+"px";
        cardPic.style.top = "-"+deckCount/8+"px";
        // cardPic.style.zIndex = deckCount;
        deckDiv.appendChild(cardPic);
        deckCount++;
    });
}

function updatePile(){
    pileDiv.innerHTML = "";
    pileArraylist.forEach(element =>{
        if(element == pileArraylist[0]){pileCount = 0;}
        let cardPic = document.createElement("img");
        cardPic.className="cardImg";
        cardPic.draggable=false;
        cardPic.src=element.pictureFront;
        cardPic.style.position = "absolute";
        cardPic.style.left = pileCount/4+"px";
        cardPic.style.top = "-"+pileCount/8+"px";
        // cardPic.style.zIndex = deckCount;
        pileDiv.appendChild(cardPic);
        pileCount++;
    });
}

function updateHandFaceUp(handIn, handDivIn){
    handDivIn.innerHTML = "";
    handIn.handArraylist.forEach(element =>{
        if(element == handIn.handArraylist[0]){handCount = 0;}
        let cardPic = document.createElement("img");
        cardPic.className="cardImg cardHand";
        cardPic.draggable=false;
        cardPic.src=element.pictureFront;
        cardPic.style.position = "relative";
        cardPic.style.right = 40*(handCount)+"px";
        // cardPic.style.top = "-"+pileCount/8+"px";
        // cardPic.style.zIndex = deckCount;
        handDivIn.appendChild(cardPic);
        handCount++;
    });
}

function updateHandFaceDown(handIn, handDivIn){
    handDivIn.innerHTML = "";
    handIn.handArraylist.forEach(element =>{
        if(element == handIn.handArraylist[0]){handCount = 0;}
        let cardPic = document.createElement("img");
        cardPic.className="cardImg cardHand";
        cardPic.draggable=false;
        cardPic.src=element.pictureBack;
        cardPic.style.position = "relative";
        cardPic.style.right = 40*(handCount)+"px";
        // cardPic.style.top = "-"+pileCount/8+"px";
        // cardPic.style.zIndex = deckCount;
        handDivIn.appendChild(cardPic);
        handCount++;
    });
}

// let cardPic = document.createElement("img");
// cardPic.src=deck1.deckArraylist[0].pictureFront;
// mainDiv.appendChild(cardPic);