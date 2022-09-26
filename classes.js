class Card{
    constructor(suit, value, pictureBack){
        this.suit = suit;
        this.value = value;
        this.pictureFront = this.getPictureFrontString(suit, value);
        this.pictureBack = pictureBack;
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
}

class Deck{
    constructor(){
        this.deckArraylist = [];
        this.cardElementArraylist = [];
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
    updateDeckFaceUp(deckDivIn){
        deckDivIn.innerHTML = "";
        for(var i=0;i<this.deckArraylist.length;i++){
            let element = this.deckArraylist[i];
            let deckCount = i;
            let cardPic = document.createElement("img");
            cardPic.className="cardImg";
            cardPic.draggable=false;
            cardPic.src=element.pictureFront;
            cardPic.style.position = "absolute";
            cardPic.style.left = deckCount/4+"px";
            cardPic.style.top = "-"+deckCount/8+"px";
            deckDivIn.appendChild(cardPic);
            deckCount++;
        }
    }
    updateDeckFaceDown(deckDivIn){
        deckDivIn.innerHTML = "";
        for(var i=0;i<this.deckArraylist.length;i++){
            let element = this.deckArraylist[i];
            let deckCount = i;
            let cardPic = document.createElement("img");
            cardPic.className="cardImg";
            cardPic.draggable=false;
            cardPic.src=element.pictureBack;
            cardPic.style.position = "absolute";
            cardPic.style.left = deckCount/4+"px";
            cardPic.style.top = "-"+deckCount/8+"px";
            deckDivIn.appendChild(cardPic);
            deckCount++;
        }
    }
}

class Pile extends Deck{
    constructor(){
        super();
    }
}

class Hand extends Deck{
    constructor(startingSize){
        super();
        this.startingSize = startingSize;
    }
//Overrides
    updateDeckFaceUp(deckDivIn){
        deckDivIn.innerHTML = "";
        for(var i=0;i<this.deckArraylist.length;i++){
            let element = this.deckArraylist[i];
            let deckCount = i;
            let cardPic = document.createElement("img");
            cardPic.className="cardImg cardHand";
            cardPic.draggable=false;
            cardPic.src=element.pictureFront;
            cardPic.style.position = "relative";
            // cardPic.style.right = 40*deckCount+"px";
            // cardPic.style.top = "-"+deckCount/8+"px";
            cardPic.style.marginRight = "-40px";
            deckDivIn.appendChild(cardPic);
            deckCount++;
        }
    }
//Overrides
    updateDeckFaceDown(deckDivIn){
        deckDivIn.innerHTML = "";
        for(var i=0;i<this.deckArraylist.length;i++){
            let element = this.deckArraylist[i];
            let deckCount = i;
            let cardPic = document.createElement("img");
            cardPic.className="cardImg cardHand";
            cardPic.draggable=false;
            cardPic.src=element.pictureBack;
            cardPic.style.position = "relative";
            // cardPic.style.right = 40*deckCount+"px"; //MAYBE USE NEGATIVE MARGIN
            // cardPic.style.top = "-"+deckCount/8+"px";
            cardPic.style.marginRight = "-40px";
            deckDivIn.appendChild(cardPic);
            deckCount++;
        }
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