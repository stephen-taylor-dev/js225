// (function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// })();


// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// sum += (function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);


// // sum += sum(numbers);  // ?

// console.log(sum);


// let countdown = (function() {
//   return function(start) {
//     for(let i = start; i >= 0; i -= 1) {
//       console.log(i);
//     }
//     console.log('Done!');
//   }
// })();

function countdown(count) {
  (function(n) {
    for (let i = n; i >= 0; i -= 1) {
      console.log(i);
    }

    console.log('Done!');
  })(count);
}

function countdown(n) {
  (function recursiveCountdown(n) {
    console.log(n);
    if (n === 0) {
      console.log('Done!');
    } else {
      recursiveCountdown(n-1);
    }
  })(n);
};


countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!