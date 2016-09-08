const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];

var Card = function(suit, value) {
  this.suit = suit;
  this.value = value;
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
