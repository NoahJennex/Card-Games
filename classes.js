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
}

class Pile extends Deck{
    constructor(){
        super();
        this.pileArraylist = [];
    }
}

class Hand {
    constructor(startingSize){
        this.startingSize = startingSize;
        this.handArraylist = [];
    }
    fillHand(sizeIn, deckIn){
        for(var i=0;i<sizeIn;i++){
            this.handArraylist.push(deckIn.deckArraylist.pop());
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

export{Card, Deck, Hand};