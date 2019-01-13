// Create an array cards.
var cards = ["queen", "queen", "king", "king"];
// current player's hand
var cardsInPlay = [];

// first item in cards
var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);


// third item in cards
var cardTwo = cards[2];
// 3rd item to current hand
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
  // check for match equality between the two cards
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}