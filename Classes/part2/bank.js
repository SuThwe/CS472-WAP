class Bank{

    constructor(accounts) {
        this._accounts = accounts;
    }

    static nextNumber = 1;

    addAccount(account){
        this._accounts.push(account);
    }

    addSavingsAccount(interest){
        console.log(Bank.nextNumber)
        let savingsAccount = new SavingsAccount(Bank.nextNumber++, interest);
        this.addAccount(savingsAccount);
        return Bank.nextNumber;
    }

    addCheckingAccount(overdraft){
        let checkingAccount = new CheckingAccount(Bank.nextNumber++, overdraft);
        this.addAccount(checkingAccount);
        return Bank.nextNumber;
    }

    closeAccount(number){
        let accounts = this._accounts.filter(acc => acc.getNumber() !== number);
        this._accounts = accounts;
    }

    accountReport(){
        accounts.forEach(acct => {
            console.log(acct.toString()+"\n")
        });
    }

    endOfMonth(){
        let report = "";
        accounts.forEach(acc => report += acc.endOfMonth+"\n");
        console.log(report);
        return report;
    }

    getAccounts(){
        return this._accounts;
    }
}