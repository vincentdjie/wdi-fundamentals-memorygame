var cards = [
	{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
	},
	];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsinPlay[0] === cardsinPlay[1]) {
			console.log("You found a match!");
		}	else  {
				console.log("Sorry, try again.");
		}
}

var flipCard = function(cardId) {

	if (cardsinPlay.length === 2) {	
	cardsInPlay.push(cards[cardId]);
	console.log("User Flipped " + cards[cardId].rank);
	}
	console.log(checkForMatch);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

function(createBoard) {
for (var i = 0; i < arrayName.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('attributeName', 'attributeValue')
}
}

