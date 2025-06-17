function makeAccount(number) {
  let balance = 0;
  let transactions = [];
  return {
    number() {
      return number;
    },

    balance() {
      return balance;
    },

    transactions() {
      return transactions;
    },

    deposit (amount) {
      balance += amount;
      transactions.push({type: 'deposit', amount: amount});
      return amount;
    },
    
    withdraw (amount) {
      if (amount > balance) {
        amount = balance
      }
      balance -= amount;
      transactions.push({type: 'withdraw', amount: amount});
      return amount;
    },
  };
}

function makeBank() {
  let actNum = 101;
  const accounts =  [];
  return {

    openAccount() {
      let newAccount = makeAccount(actNum);
      accounts.push(newAccount);
      actNum += 1;
      return newAccount;
    },

    transfer(source, destination, amount) {
      let withdrawn = source.withdraw(amount);
      return destination.deposit(withdrawn);
    },
  }
}

// let account = makeAccount();
// console.log(account.deposit(15));
// // 15
// console.log(account.balance);
// // 15
// let otherAccount = makeAccount();
// console.log(otherAccount.balance);
// // 0

// let bank = makeBank();
// console.log(bank.accounts);
// // []

// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.number);
// // 101
// console.log(bank.accounts);
// // [{...}]
// console.log(bank.accounts[0]);
// // {
// //  number: 101,
// //  balance: 0,
// //  transactions: [],
// //  deposit: [Function: deposit],
// //  withdraw: [Function: withdraw]
// // }
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number);
// // 102

// let bank = makeBank();
// let source = bank.openAccount();
// console.log(source.deposit(10));
// // 10
// let destination = bank.openAccount();
// console.log(bank.transfer(source, destination, 7));
// // 7
// console.log(source.balance);
// // 3
// console.log(destination.balance);
// // // 7

// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.balance());
// // 0
// console.log(account.deposit(17));
// // 17
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number());
// // 102
// console.log(account.transactions());
// // [{...}]

// let bank = makeBank();
// console.log(bank.accounts);
// // undefined