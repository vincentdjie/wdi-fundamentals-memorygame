var cards = ["queen", "queen", "king", "king"]
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
	console.log("User Flipped " + cards[cardsId]);
	}
	console.log(checkForMatch)
}




