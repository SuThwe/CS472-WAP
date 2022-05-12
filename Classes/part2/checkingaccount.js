class Checkingaccount extends Account {
    constructor(number, overdraft_limit) {
        super(number);
        this.overdraft_limit = overdraft_limit;
    }

    getOverdraftLimit() {
        return this.overdraft_limit;
    }

    setOverdraftLimit(overdraft_limit) {
        this.overdraft_limit = overdraft_limit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this.overdraft_limit)) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance + " , overdraft_limit: " + this.overdraft_limit;
    }
}