// Memory Game
// 
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
// var cardThree = [cards[2]];
// var cardFour = [cards[3]];
cardsInPlay.push(cardOne);
// , cardTwo, cardThree, cardFour);
// console.log("User flipped queen");
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
// console.log("User flipped king");
if ((cardsInPlay.length === 2) && (cardsInPlay[0] === cardsInPlay[1])) {alert("You found a match!");
}
		else {alert("Sorry, try again!");
	}
