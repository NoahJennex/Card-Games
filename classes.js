import {moveCardElement, getCoords, moveTopOfDeck} from '/functions.js'


class Card{
    constructor(suit, value, pictureBack){
        this.suit = suit;
        this.value = value;
        this.pictureFront = this.getPictureFrontString(suit, value);
        this.pictureBack = pictureBack;

        this.cardElement = this.createCardElement();
    }
    getPictureFrontString(suitIn, valueIn){
        let valueString = "";
        let suitString = "";

        if(valueIn > 1 && valueIn < 11){valueString = String(valueIn);}
        else if(valueIn == 1){valueString = "ace";}
        else if(valueIn == 11){valueString = "jack";}
        else if(valueIn == 12){valueString = "queen";}
        else if(valueIn == 13){valueString = "king";}

        if(suitIn == 0){suitString = "clubs";}
        else if(suitIn == 1){suitString = "diamonds";}
        else if(suitIn == 2){suitString = "hearts";}
        else if(suitIn == 3){suitString = "spades";}


        return "CardPNG\\"+ suitString +"_"+ valueString +".svg";

    }
    createCardElement(){
        let newCardElement = document.createElement("img");
        newCardElement.id = this.pictureFront;
        newCardElement.className="cardImg";
        newCardElement.draggable=false;
        newCardElement.src=this.pictureFront;
        return newCardElement;
    }
}

class Deck{
    constructor(deckName){
        this.deckArraylist = [];
        this.deckName = deckName;
        this.div = document.createElement("div");
        this.div.id = this.deckName
        this.div.className = "deck";
    }
    setStandardDeck(){
        this.deckArraylist = [];

        for(let i=1;i<14;i++){
            for(let j=0;j<4;j++){

                let value = i;
                let suit = j;

                let newDeckCard = new Card(suit,value, "CardPNG\\red.svg");
                this.deckArraylist.push(newDeckCard);
            }
        } 
    }
    shuffleDeck(){
        let tempArraylist = [];
        while(this.deckArraylist.length != 0){
            let randomNum = Math.floor(Math.random()*this.deckArraylist.length);
            tempArraylist.push(this.deckArraylist[randomNum]);
            this.deckArraylist.splice(randomNum,1);
        }
        this.deckArraylist = tempArraylist;

    }
    fillDeck(sizeIn, deckIn){
        for(var i=0;i<sizeIn;i++){
            this.deckArraylist.push(deckIn.deckArraylist.pop());
        }
    }
    setDeck(showCard){
        this.deckArraylist.forEach(element => {

            if(showCard == true){element.cardElement.src = element.pictureFront;}
            else{element.cardElement.src = element.pictureBack;}

            // element.cardElement.src=element.pictureFront;
            element.cardElement.className = "cardImg cardInDeck";
            this.div.appendChild(element.cardElement)
            
        });
        this.updateDeck(showCard);
    }
    updateDeck(showCard){
        let count = 0;
        this.deckArraylist.forEach(element =>{
            if(showCard == true){element.cardElement.src = element.pictureFront;}
            else{element.cardElement.src = element.pictureBack;}

            // element.cardElement.style.top = "0px";
            element.cardElement.className = "cardImg cardInDeck";
            element.cardElement.style.left = count*0.25 + "px";
            element.cardElement.style.top = -count*0.15 + "px";
            count++;
        })
    }
}

class Pile extends Deck{
    constructor(pileName){
        super(pileName);
    }
}

class Hand extends Deck{
    constructor(startingSize, handName){
        super(handName);
        this.startingSize = startingSize;
        this.selectedArray = [];
    }
//Overrides
    setDeck(showCard){
        this.deckArraylist.forEach(element => {
            
            if(showCard == true){element.cardElement.src = element.pictureFront;}
            else{element.src = element.cardElement.pictureBack;}

            element.cardElement.className = "cardImg cardHand";
            this.div.appendChild(element.cardElement)
            
        });
        this.updateDeck(showCard);
    }
    updateDeck(showCard){
        this.deckArraylist.forEach(element =>{
            if(showCard == true){element.cardElement.src = element.pictureFront;}
            else{element.src = element.cardElement.pictureBack;}

            element.cardElement.style.top = "0px";
            element.cardElement.className = "cardImg cardHand";

            element.cardElement.onmouseover = function(){
                element.cardElement.style.transform = "scale(1.01)";
                element.cardElement.style.top = "-10px";
            }
            element.cardElement.onmouseout = function(){
                element.cardElement.style.transform = "scale(1)";
                element.cardElement.style.top = "0px";
            }
            // element.cardElement.onclick() = function(){

            // }
        })
    }
}

class Player{
    constructor(name, hand){
        this.name = name;
        this.hand = hand;
        this.points = 0;
    }
}

export{Card, Deck, Pile, Hand};