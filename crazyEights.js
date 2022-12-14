import {Card, Deck, Pile, Hand} from './classes.js';
import {getCoords, wait, moveTopOfDeck, moveSelectedCards, onCardClick} from './functions.js';



var playerArray = [];
var rotateDegree = 0;
var centerRotateDegree = 0;
var playerTurn = 0;

var centerGrid = document.getElementById("grid-item-center");
var table = document.getElementById("tableInner");
var centerDiv = document.getElementById("center");
var handDiv1 = document.getElementById("handDiv1");
var handDiv2 = document.getElementById("handDiv2");
var handDiv3 = document.getElementById("handDiv3");
var handDiv4 = document.getElementById("handDiv4");

const formOutput = [...new URLSearchParams(window.location.search)]
var numberOfPlayers = formOutput.length;
console.log(numberOfPlayers);

createTable(numberOfPlayers);





// FUNCTIONS

async function createTable(playerSize){
    var defaultHandSize = 8;
    var defaultAnimationTime = 300;
    
    var deck1 = new Deck("deck1");
    var pile1 = new Pile("pile1");
    var hand1 = new Hand(defaultHandSize, "hand1");
    playerArray.push(hand1);
    var hand2 = new Hand(defaultHandSize, "hand2");
    playerArray.push(hand2);
    var hand3 = new Hand(defaultHandSize, "hand3");
    playerArray.push(hand3);
    var hand4 = new Hand(defaultHandSize, "hand4");
    playerArray.push(hand4);

    
    var rotateButton = document.createElement("button");
    rotateButton.innerHTML = "rotate";
    document.body.appendChild(rotateButton);
    
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
    
    await pile1.fillDeck(1,deck1, 100);
    pile1.updateDeck(true);

    for(let i = 0;i<playerSize;i++){
        await playerArray[i].fillDeck(playerArray[i].startingSize, deck1, 100, false, true);
    }
    
    hand1.updateDeck(true);
    hand2.updateDeck(false, true);
    hand3.updateDeck(false, true);
    hand4.updateDeck(false, true);
    
    hand1.div.style.transform = "scale(1.1)";
    
    rotateButton.onclick = function(){nextTurn();}

}



function nextTurn(){
    if(playerTurn == -1){
        playerArray[playerArray.length-1].updateDeck(false,true);
        playerArray[playerArray.length-1].div.style.transform = "scale(1)";
    }
    else{
        playerArray[playerTurn].updateDeck(false,true);
        playerArray[playerTurn].div.style.transform = "scale(1)";
    }
    rotateDegree += -90;
    centerRotateDegree += 90;
    table.style.transform = "rotate("+rotateDegree+"deg)";
    centerGrid.style.transform = "rotate("+centerRotateDegree+"deg)";

    wait(750).then(()=>{
        playerTurn++;
        for(let i=0;i<playerArray.length;i++){
            if(i==playerTurn){playerArray[i].updateDeck(true);}
            else{playerArray[i].updateDeck(false,true);}
        }
        playerArray[playerTurn].div.style.transform = "scale(1.1)";
        if(playerTurn == playerArray.length-1){playerTurn = -1;}
    });
}