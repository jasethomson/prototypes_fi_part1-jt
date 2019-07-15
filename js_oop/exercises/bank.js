

class Bank{
	constructor(bankName){
		//takes in the name of the bank.
		//makes an object to store all accounts into
		this.bankName = bankName;
		this.bankAccounts = {};
	}
	makeAccount( accountNumber ){
		//makes an account
		//takes in the account number of an account
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns false
		//otherwise makes an new Account object, storing it into the storage object in the constructor
		//returns the Account object that was constructed
		// debugger;
		if ( this.bankAccounts[accountNumber]){
			return false;
		} else {
			var newBankAccount = new Account();
			this.bankAccounts[accountNumber] = newBankAccount;
		}
		return newBankAccount;
	}
	checkForAccount( accountNumber ){
		//checks if an account exists or not
		//takes in the account number of an account
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
		if (this.bankAccounts[accountNumber]) {
			return true;
		} else {
			return false;
		}
	}
	removeAccount( accountNumber ){
		//removes an account
		//takes in an account number
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
			//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns
		//	'account <accountNumber> deleted'
		if(this.bankAccounts[accountNumber]){
			if(this.bankAccounts[accountNumber].storeAmount > 0){
				return "account is not empty";
			} else {
				delete this.bankAccounts[accountNumber];
				return "account " + accountNumber + " deleted"
			}
		} else {
			return "account " + accountNumber + " does not exist";
		}
	}
	deposit( accountNumber, amount ){
		//deposits money into an account
		//takes in an account number and a numeric amount
		//if the account doesn't exist, returns
			//'account does not exist'
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
		if (this.bankAccounts[accountNumber]){
			this.bankAccounts[accountNumber].add(amount);
			return "account " + accountNumber + " now has " + this.bankAccounts[accountNumber].storeAmount;
		} else {
			return "account does not exist";
		}
	}
	withdraw( accountNumber, amount ){
		//removes money from an account
		//takes in an account number and an amount
		//checks if the account exists, if not
			//return 'account does not exist'
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
		debugger;
		if (this.bankAccounts[accountNumber]){
			var amountRemoved = this.bankAccounts[accountNumber].remove(amount);
			return "removed " + amountRemoved + " from account " + accountNumber + ". It now has " + this.bankAccounts[accountNumber].storeAmount;
		} else {
			return "account does not exist";
		}
	}
}
