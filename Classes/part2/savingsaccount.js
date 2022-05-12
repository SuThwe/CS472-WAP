class Savingsaccount extends Account {
    constructor(number, interest) {
        super(number);
        this.interest = interest;
    }

    getInterest() {
        return this.interest;
    }

    setInterest(interest) {
        this.interest = interest;
    }

    addInterest() {
        var newInterest = 0;
        var balance = this.getBalance()
        if(balance > 0) {
            newInterest = balance * this.interest / 100;
        }
        this.deposit(newInterest);
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Account " + this._number + ": balance " + this._balance + " , interest: " + this.interest;
    }
}