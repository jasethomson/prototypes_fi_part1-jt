

class Account{
	constructor(){
		//store the amount of money in the account
		this.storeAmount = 0;
	}
	add( amount ){
		//add money to the amount stored in the account
		//takes in an amount
		//checks if it is actually a number greater than 0
			//if not, return false
		//adds it to the existing amount
		//returns the new amount in the account
		if ( amount > 0){
			this.storeAmount += amount;
			return this.storeAmount;
		}
		return false;
	}
	remove( amount ){
		//removes funds from an account
		//checks if amount is actually a number greater than 0
			//if not, return false
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
		// debugger;
		if (amount > 0){
			if (amount > this.storeAmount){
				amount = this.storeAmount;
				this.storeAmount -= amount;
				return amount;
			} else {
				this.storeAmount -= amount;
				return amount;
			}
		}
		return false;
	}
	getAmount(){
		//returns the amount in the account
		return this.storeAmount;
	}
}
