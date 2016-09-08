// Deck of Cards
// -------------
//
// Create a framework that models a generic deck of cards, with the following
// behaviors:
//
//   * Should contain an operation named Shuffle() that shuffles this deck
//     randomly.
//   * Should contain an operation called GetNextCard() that returns the next
//     card from the deck
//   * GetNextCard() should signal an error when the entire deck has been dealt
//     out
//   * A call to Shuffle() should cause all cards to be put back in the deck
//
// Using this framework, create a class to model a standard deck of 52 playing
// cards that contain 4 suits of 13 cards each.
//

var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];

var Card = function(suit, val) {
  this.suit = suit;
  this.val = val;
}

var Deck = function() {
  this.cards = [];
}

Deck.prototype.loadCards = function () {
  for (var i = 0; i < suits.length; i++) {
    for (var j = 1; j <= 13; j++) {
      this.cards.push(new Card(suits[i], j))
    }
  }
}

Deck.prototype.shuffle = function() {
  this.loadCards();
  var i = 0
    , j = 0
    , temp = null

  for (i = this.cards.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = this.cards[i]
    this.cards[i] = this.cards[j]
    this.cards[j] = temp
  }
}

Deck.prototype.myNextCard = function () {
  if (this.cards.length === 0) return "no cards left"
  return this.cards.pop();
};

deck = new Deck();
console.log(deck.cards);
deck.myNextCard();
