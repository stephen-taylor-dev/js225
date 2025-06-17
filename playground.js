// // let Aircraft = {
// //   name: 'Cessna 152',
// //   fuelCapacity: 24.5,
// //   cruisingSpeed: 111,

// //   takeOff() {
// //     console.log("Taking off");
// //   },

// //   land() {
// //     console.log("Landing")
// //   },
// // }

// // let cesna = Object.assign({}, Aircraft);
// // console.log(cesna)


// // function Book(title, author, year) {
// //   this.title = title;
// //   this.author = author;
// //   this.year = year;
// // }

// // let book1 = new Book('Neuromancer', 'William Gibson', 1984);
// // let book2 = new Book('Doomsday Book', 'Connie Willis', 1992);

// // console.log(book1);
// // console.log(book2);

// // function Albumn(title, artist, releaseYear) {
// //   this.title = title;
// //   this.artist = artist;
// //   this.releaseYear = releaseYear;
// // }

// // let thriller = new Albumn('Thriller', 'Michael Jackson', 1982);
// // let darkSideOfTheMoon = new Albumn('The Dark Side of the Moon', 'Pink Floyd', 1973);

// // console.log(thriller)
// // console.log(darkSideOfTheMoon)

// function Smartphone(brand, model, releaseYear) {
//   this.brand = brand;
//   this.model = model;
//   this.releaseYear = releaseYear;

//   this.batteryLevel = function () {
//     console.log("Battery level at 100%.")
//   }

//   this.info = () => {
//     console.log(`Brand: ${this.brand}`);
//     console.log(`Model: ${this.model}`);
//     console.log(`Year: ${this.releaseYear}`);
//   }
// }

// let iphone = new Smartphone('Apple', 'iPhone 12', 2020);
// let samsung = new Smartphone('Samsung', 'Galaxy S21', 2021);

// iphone.info();
// samsung.info();


function change(a) {
  b = 2;
  console.log(a);
}

let b = 1;
change(b);          // => 2
console.log(b);     // => 1