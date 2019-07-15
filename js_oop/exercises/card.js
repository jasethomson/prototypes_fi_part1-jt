
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getSuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		//takes in nothing
		//make storage for your card objects
		this.cardStorage = [];
	}
	addCard( suit, faceValue ){
		//adds a card to the deck
		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
		// debugger;
		var newCard =  new Card(suit, faceValue);
		this.cardStorage.push(newCard);
		return this.cardStorage.length;
	}
	shuffle(){
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
		var randomPosition = null;
		var cardHolder = "";
		for(var index =0; index<this.cardStorage.length; index++){
			randomPosition = Math.floor(Math.random() * (this.cardStorage.length));
			cardHolder = this.cardStorage.pop();
			this.cardStorage.splice(randomPosition,0,cardHolder);
		}
	}
	getCardCount(){
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
		// debugger;
		return this.cardStorage.length;
	}
	dealCards( numberOfCardsToDeal ){
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it,
			//in the opposite order they were added (last-in, first-out)
		//cannot return more cards than the deck has
		var cardRemoval = "";
		var cardsFromDeck = [];
		if (numberOfCardsToDeal<this.cardStorage.length){
		for(var index = 0; index<numberOfCardsToDeal; index++){
			cardRemoval = this.cardStorage.pop();
			cardsFromDeck.push(cardRemoval);
		}
	} else {
		numberOfCardsToDeal = this.cardStorage.length;
		for (var index = 0; index < numberOfCardsToDeal; index++) {
			cardRemoval = this.cardStorage.pop();
			cardsFromDeck.push(cardRemoval);
		}
	}
		return cardsFromDeck;
	}
}
