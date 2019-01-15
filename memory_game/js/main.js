// Create an array cards.
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  }, 
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  }, 
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
// current player's hand
var cardsInPlay = [];
// function to store the steps to check for a match
var checkForMatch = function() {
  // check for match equality between the two cards
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};
/* function to store all steps when the user flips a card
- accepts 1 parameter: cardId (indexNumber)
*/
var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId].rank);
  // push name of card ie: king 
  cardsInPlay.push(cards[cardId].rank);
  // when user flip both two cards
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

