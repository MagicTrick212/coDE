//console.log(Math.floor(Math.random() * 1000));
var suits = ['of Hearts', 'of Clubs', 'of Spades', 'of Diamonds'];

var faces = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

var obj = {
	key: 'value',
	another_key: 88,
}

var card = {
	suit: "Hearts",
	face: "Nine",
}

var deck = [];

for (let j = 0; j < suits.length; j++) {
	for (let i = 0; i < faces.length; i++) {
		 deck.push(`${faces[i]} ${suits[j]}`)
	}
}

function shuffle(deck) {
	for (let i = deck.length - 1; i > 0; i--) {
		let rand = Math.floor(Math.random() * (i + 1));
		oldElement = deck[i];
		deck[i] = deck[rand];
		deck[rand] = oldElement;
	}
	return deck;
}

shuffle(deck);

var computerHand = deck.splice(0, 5);

var playerHand = deck.splice(0, 5);

function askForCard(face, askersHand, askeesHand)
{
	var handLengthAtStart = askersHand.length
	// check hand for any cards with "face"
	for (let i = askeesHand.length - 1; i >= 0; i--)
	{
		console.log(askeesHand[i], i)
		if (askeesHand[i].startsWith(face))
		{
			// if a card is that "face" then we give it to the other hand
			var splicedCard = askeesHand.splice(i, 1)[0]
			console.log("Moving card:", splicedCard)
		}
		else
		{
			// else we'll do nothing with that card
		}
	}
	if ((handLengthAtStart == askersHand.length))
	// if no cards were given (has the askerHand length changed?), then tell them to go fish
	askersHand.push(deck.pop())
}


askForCard(faces[0], playerHand, computerHand)
askForCard(faces[9], playerHand, computerHand)
askForCard(faces[6], playerHand, computerHand)
askForCard(faces[4], playerHand, computerHand)
console.log(computerHand)
console.log(playerHand)
console.log(deck);



//var playerDraw = playerHand.deck.pop()

// how do you go fish:
// player needs to ask computer for "card"
// if computer has card, computer needs to be able to give player "card"
// if computer does not have card, player needs to draw from deck
// repeat back and forth
// once either party has 4 of a face, that will be documented as 1 point and those faces removed from game.
// points measured at end of game to declare victor



	



// TODO: How can we print each face without just printing the entire array like neanderthals?

// -------------------------------------

// another way of thinking of for loops like this:
//for (let x = 0; x < 10; x++) {
//	console.log(x)
//}
// is that same as this while loop:
//let x = 0
//while (x < 10) {
//	console.log(x)
//	x++
//}
// the first part, the "let x" goes just outside the while loop,
// the second part stays (the conditional)
// and the third part runs at the end of the block
// I think this is a little more readable than a for loop, but is doing pretty much exactly the same
