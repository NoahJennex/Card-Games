function moveCardElement(cardIn, deckIn){
    deckIn.appendChild(cardIn);
}


// get document coordinates of the element
function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
}

function moveTopOfDeck(deckFrom, deckTo, showCardFrom, showCardTo){

    let toCoords = getCoords(deckTo.div);
    let fromCoords = getCoords(deckFrom.div);
    let topCard = deckFrom.deckArraylist[deckFrom.deckArraylist.length-1];

    topCard.cardElement.style.left = (toCoords.left - fromCoords.left) + "px";
    topCard.cardElement.style.top = (toCoords.top - fromCoords.top) + "px";
    //need to add timer so element moves before before getting sent to new div (need to find way to get coords of divs)

    setTimeout(function(){
        // let topCard = deckFrom.deckArraylist[deckFrom.deckArraylist.length-1];
        if(showCardTo == true){topCard.cardElement.src = topCard.pictureFront;}
        else{topCard.cardElement.src = topCard.pictureBack;}
        moveCardElement(deckFrom.deckArraylist[deckFrom.deckArraylist.length-1].cardElement, deckTo.div);
        deckTo.deckArraylist.push(deckFrom.deckArraylist.pop());

        // deckFrom.updateDeckFaceUp();
        // deckFrom.updateDeck(showCardFrom);
        deckTo.updateDeck(showCardTo);
    },400)
}

export{moveCardElement, getCoords, moveTopOfDeck};