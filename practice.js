// let invoices = {
//   unpaid: [],
//   paid: [],

//   add: function (name, amount) {
//     this.unpaid.push({name, amount});
//   },

//   totalDue: function () {
//     return this.unpaid.reduce((amount, invoice) => {
//       return amount + invoice.amount;
//     }, 0);
//   },

//   totalPaid: function () {
//     return this.paid.reduce((amount, invoice) => {
//       return amount + invoice.amount;
//     }, 0);
//   },


//   payInvoice: function(name) {
//     const newUnpaid = [];
//     this.unpaid.forEach(invoice => {
//       if (invoice.name === name) {
//         this.paid.push(invoice);
//       } else {
//         newUnpaid.push(invoice)
//       }
//     });

//     this.unpaid = newUnpaid;
//   },
// }

// invoices.add('Due North Development',	250);
// invoices.add('Moonbeam Interactive',	187.50);
// invoices.add('Slough Digital', 300);

// // console.log(invoices.unpaid);

// // console.log(invoices.totalDue());


// invoices.payInvoice('Due North Development');
// invoices.payInvoice('Slough Digital');
// console.log(invoices.totalPaid());
// console.log(invoices.totalDue());


// let numbers = [1, 2, 3, 4];
// function makeCheckEven() {
//   return (number) => number % 2 === 0;
// }

// let checkEven = makeCheckEven();

// console.log(numbers.filter(checkEven)); // [2, 4]

// function execute(func, operand) {
//   return func(operand);
// }

// execute(function(number) {
//   return number * 2;
// }, 10); // 20

// execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there buddy'); // "HEY THERE BUDDY"

// function makeListTransformer(func) {
//   return function(collection) {
//     return collection.map(func);
//   }
// }

// let timesTwo = makeListTransformer(function(number) {
//   return number * 2;
// });

// console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]


// function makeCounterLogger(start) {
//   return function (end) {
//     if (start < end) {
//       for (let i = start; i <= end; i += 1) {
//         console.log(i);
//       }
//     } else {
//       for (let i = start; i >= end; i -= 1) {
//         console.log(i);
//       }
//     }
//   }
// }

// let countLog = makeCounterLogger(5) 
// countLog(8);
// countLog(2)

function makeList() {
  const list = [];
  return function (item) {
    if (item === undefined && list.length === 0) {
      console.log('The list is empty');
    } else if (item === undefined) {
      list.forEach(existingItem => console.log(existingItem));
    } else {
      let index = list.indexOf(item);
      if (index >= 0) {
        list.splice(index, 1);
        console.log(`${item} removed!`);
      } else {
        list.push(item);
        console.log(`${item} added!`);
      }
    }
  }
}


let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book