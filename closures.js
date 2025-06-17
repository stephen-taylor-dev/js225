// function makeMultipleLister(number) {
//   return function () { 
//     for (let i = number; i < 100; i += number) {
//       console.log(i);
//     }
//   }
// }

// let lister = makeMultipleLister(13);
// lister();
// // 13
// // 26
// // 39
// // 52
// // 65
// // 78
// // 91

// let total = 0;

// function add(num) {
//   total += num;
//   console.log(total);
// }

// function subtract(num) {
//   total -= num;
//   console.log(total);
// }

// add(1);
// // 1
// add(42);
// // 43
// subtract(39);
// // 4
// add(6);
// // 10

// // Private version 
// function makeAdderSubtracter() {
//   let total = 0;

//   function add(number) {
//     total += number;
//     console.log(total);
//   }

//   function subtract(number) {
//     total -= number;
//     console.log(total);
//   }

//   return {
//     add,
//     subtract,
//   }
// }

// const { add, subtract } = makeAdderSubtracter();


// function makeList() {
//   const items = []
//   return {
//     list() {
//       if (items.length === 0) {
//         console.log('The list is empty.');
//       } else {
//         items.forEach(item => console.log(item));
//       }
//     },
//     add(item) {
//       let index = items.indexOf(item);
//       if (index === -1) {
//         items.push(item);
//         console.log(item + ' added!');
//       }
//     },
//     remove(item) {
//       let index = items.indexOf(item);
//       if (index !== -1) {
//         items.splice(index, 1);
//         console.log(item + ' removed!');
//       } else {
//         console.log('Item not found in list');
//       }
//     },
//   }
// }

