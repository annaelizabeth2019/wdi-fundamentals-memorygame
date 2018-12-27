// Memory Game
// 
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
cardImage:"images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
},
];
var cardsInPlay = [];
//check if the cards in play are a match and display an alert
var checkForMatch = function() {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank && cardsInPlay[0].suit === cardsInPlay[1].suit) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
		}}
//flip over a card
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
//check if there are 2 cards in play
	if (cardsInPlay.length >= 2) {
		cardsInPlay = [];
	} 
	cardsInPlay.push(cards[cardId]);
//display the image for the for the face of the card in place of the back of the card
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch(); console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
	}

//generate gameboard

var createBoard = function(){
for (var i=0; i < cards.length; i++){
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src',"images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}
}
createBoard();