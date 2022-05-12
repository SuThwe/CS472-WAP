window.onload = tester;

var acc = new Account(1);
var savingAcc = new Savingsaccount(1, 0.1);
var checkingAcc = new Checkingaccount(1, 40);

let account1 = new Account(37729);
let account2 = new Account(393829);
account1.deposit(50);
account2.deposit(50);
account2.withdraw(10);

let savingsAccount1 = new SavingsAccount(614243, 10);
savingsAccount1.deposit(100);
let savingsAccount2 = new SavingsAccount(838330, 15);
savingsAccount2.deposit(500);
savingsAccount2.addInterest(20);

let checkingAccount1 = new CheckingAccount(614243, 200);
let checkingAccount2 = new CheckingAccount(93843, 250);
checkingAccount2.deposit(100);

let accounts = [
    savingsAccount1,
    savingsAccount2,
    checkingAccount1,
    checkingAccount2,
];
let bank1 = new Bank(accounts);
bank1.addSavingsAccount(12);
bank1.addCheckingAccount(350);

function tester() {
    console.log("start testing...");

    describe("deposit and get balance", function(){
        it("deposit first, and returns balance == 1000", function(){
            acc.deposit(1000);
            assert.equal(acc.getBalance(), 1000);
        });
    });

    describe("withdraw", function(){
        it("deposit first, returns balance == 500", function(){
            acc.withdraw(500);
            assert.equal(acc.getBalance(), 500);
        });
    });

    describe("toString", function(){
        it("returns string == Account 1: balance 500", function(){
            assert.equal(acc.toString(), "Account 1: balance 500");
        });
    });

    describe("addInterest in Savingsaccount", function(){
        it("returns balance == 1001", function(){
            savingAcc.deposit(1000);
            savingAcc.addInterest();
            assert.equal(savingAcc.getBalance(), 1001);
        });
    });

    describe("overdraft_limit", function(){
        it("overdraft_limit 40 and withdraw 30 from 0 balance, returns balance == -30", function(){
            checkingAcc.withdraw(30);
            assert.equal(checkingAcc.getBalance(), -30);
        });
    });

    describe("Should return 1 as the account number after a savings account with 12 interest is added", function(){
        it("Should return 1 as the account number after a savings account with 12 interest is added", function(){
            assert.equal(bank1.getAccounts()[4].getNumber(), 1);
        });
    });

    describe("Should return 350 as the overdraft of the checking account added to the bank1 accounts", function(){
        it("Should return 350 as the overdraft of the checking account added to the bank1 accounts", function(){
            assert.equal(bank1.getAccounts()[5].getOverdraft(), 350);
        });
    });

    describe("Should return 2 as the account number after of the checking account added to the bank1 accounts", function(){
        it("Should return 2 as the account number after of the checking account added to the bank1 accounts", function(){
            assert.equal(bank1.getAccounts()[5].getNumber(), 2);
        });
    });

    mocha.run();
}