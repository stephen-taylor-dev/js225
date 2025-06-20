// // function makeCar(accRate, brakeRate) {
// //   return {
// //     speed: 0,
// //     accRate,
// //     brakeRate,
// //     accelerate() {
// //       this.speed += this.accRate;
// //     },
// //     brake() {
// //       this.speed -= this.brakeRate;
// //       this.speed = this.speed < 0 ? 0 : this.speed;
// //     },
// //   }
// // }

// // // let sedan = makeCar(8);
// // // sedan.accelerate();
// // // console.log(sedan.speed);

// // // let coupe = makeCar(12);
// // // coupe.accelerate();
// // // console.log(coupe.speed);

// // // let hatchback = makeCar(9);
// // // hatchback.accelerate();
// // // console.log(hatchback.speed);



// // let sedan = makeCar(8, 6);
// // sedan.accelerate();
// // console.log(sedan.speed);

// // sedan.brake();
// // console.log(sedan.speed);

// // sedan.brake();
// // console.log(sedan.speed);

// // function makeCountry(name, continent, visited = false) {
// //   return {
// //     name,
// //     continent,
// //     visited,
// //     getDescription() {
// //       let visitStatus = this.visited ? 'have' : "haven't";
// //       return this.name + ' is located in ' + this.continent + '. I ' + visitStatus + ' visited ' + this.name;
// //     },
// //     visitCountry() {
// //       this.visited = true;
// //     }
// //   }; 
// // }


// // let chile = makeCountry('The Republic of Chile', 'South America');
// // let canada = makeCountry('Canada', 'North America');
// // let southAfrica = makeCountry('The Republic of South Africa', 'Africa');
// // chile.visitCountry();
// // console.log(chile.getDescription());       // "The Republic of Chile is located in South America."
// // console.log(canada.getDescription());      // "Canada is located in North America."
// // console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."

// function createProduct(id, name, stock, price) {
//   return {
//     id,
//     name,
//     stock,
//     price,
//     describe() {
//       console.log(`Name: ${this.name}`);
//       console.log(`ID: ${this.id}`);
//       console.log(`Price: $${this.price}`);
//       console.log(`Stock: ${this.stock}`);
//     },
//     setProductPrice(newPrice) {
//       if (price >= 0) {
//         this.price = newPrice;
//       } else {
//         console.log('Invalid price.');
//       }
//     },
//   }
// }


// let scissors = createProduct(0, 'Scissors', 8, 10);
// let drill = createProduct(2, 'Cordless Drill', 15, 45);

// function Period (hours, minutes) { 
//   this.hours = hours;
//   this.minutes = minutes;

//   format() = () => {
//     console.log(this === window); // => true
//     return this.hours + ' hours and ' + this.minutes + ' minutes';
//   };
// }

// const walkPeriod = new Period(2, 30);
// walkPeriod.format(); // => 'undefined hours and undefined minutes


// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// myObject.myChildObject.myMethod.call(myObject);
// myObject.myChildObject.myMethod.apply(myObject);





function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,

    total() {
       return this.phone + this.internet;
    },

    addPayment(payment) {
      if (payment.amount) {
        this.internet -= payment.amount;
      } else {
        this.phone -= payment.phone;
        this.internet -= payment.internet;
      }
    },

    addPayments(payments) {
      payments.forEach(payment => {
        this.addPayment(payment);
      });
    },

    amountDue() {
      return this.phone + this.internet;
    }
  }
}


function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // => 31000

function createPayment(services) {
  services = services || {};
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total: function() {
      return this.amount || (this.phone + this.internet);
    },
  };
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());      // this should return 0