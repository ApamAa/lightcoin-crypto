class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance0 = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      balance0 += this.transactions[i].value;
    }
    return balance0;
    // Calculate the balance using the transaction objects.
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount0, account0) {
    this.amount  = amount0;
    this.account = account0;
  }

  commit() {
  // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
  }
}

class Deposit extends Transaction {


  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {


  get value() {
    return -this.amount;
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected



// DRIVER CODE BELOW

const myAccount = new Account('billybob');
console.log(myAccount);
console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);
console.log(myAccount);
