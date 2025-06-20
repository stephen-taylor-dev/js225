// class Cat {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   whoAmI() {
//     console.log(`My name is ${this.name}.`,
//                 `\nI am a ${this.color} cat.`);
//   }
// }

// let cheddar = new Cat('Cheddar', 'ginger');
// let cheddarProto = Object.getPrototypeOf(cheddar);

// console.log(Object.getOwnPropertyNames(Cat.prototype));
// console.log(Cat.prototype);

// console.log(cheddar);
// console.log(cheddarProto);
// console.log(Object.getOwnPropertyNames(cheddarProto));
// // ['constructor', 'whoAmI'];

// cheddar.whoAmI();  // My name is Cheddar.
//                    // I am a ginger cat.


// function Smartphone(brand, model, releaseYear) {
//   this.brand = brand;
//   this.model = model;
//   this.releaseYear = releaseYear;
// }

// Smartphone.prototype.batteryLevel = function() {
//    console.log("Battery level at 100%.")
// }

// Smartphone.prototype.info = function() {
//   console.log(`Brand: ${this.brand}`);
//   console.log(`Model: ${this.model}`);
//   console.log(`Year: ${this.releaseYear}`);
// }


// let iphone = new Smartphone('Apple', 'iPhone 12', 2020);
// let samsung = new Smartphone('Samsung', 'Galaxy S21', 2021);

// iphone.info();
// samsung.info();

function Vehicle(color, weight) {
  this.color = color;
  this.weight = weight;
}

Vehicle.prototype.accelerate = function() {
  console.log('Speeding up!');
}

Vehicle.prototype.decelerate = function() {
  console.log('Slowing down');
}

function Car(color, weight, licenseNumber) {
  Vehicle.call(this, color, weight);
  this.licenseNumber = licenseNumber;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
  console.log('Beep beep');
} 


function Boat(color, weight, homePort) {
  Vehicle.call(this, color, weight);
  this.homePort = homePort;
}

Boat.prototype = Object.create(Vehicle.prototype);
Boat.prototype.constructor = Boat;

Boat.prototype.dropAnchor = function() {
  console.log('Setting anchor here!');
}

function Plane(color, weight, airline) {
  Vehicle.call(this, color, weight);
  this.airline = airline;
}

Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.takeoff = function() {
  console.log('Plan is taking off.');
}


Plane.prototype.land = function() {
  console.log('Plane is landing now.');
}


let car = new Car('green', 20, 22818);
let boat = new Boat('green', 20, 'spain');
let plane = new Car('green', 20, 'southwest');

console.log(car);
console.log(boat);
console.log(plane)