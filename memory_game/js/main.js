// Create an array cards.
var cards = ["queen", "queen", "king", "king"];
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
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  // when user flip both two cards
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

