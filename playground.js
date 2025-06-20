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


// function change(a) {
//   b = 2;
//   console.log(a);
// }

// let b = 1;
// change(b);          // => 2
// console.log(b);     // => 1
 


// let apple = {
//   name: 'Apple',
//   color: 'Red',

//   isRipe: function() {
//     return `This ${this.name} is ripe.`;
//   },

//   describe: function() {
//     return `This ${this.name} is ${this.color}.`;
//   },
// };


// function makeFruit(name, color) {
//   return {
//     name,
//     color,

//     isRipe: function() {
//       return `This ${this.name} is ripe.`;
//     },

//     describe: function() {
//       return `This ${this.name} is ${this.color}.`;
//     },
//   }

// }

// let banana = makeFruit('Banana', 'Yellow')
// let blackberry = makeFruit('Blackberry','Black');



// function makeSmartphone(brand, model, releaseYear) {
//   return {
//     brand,
//     model,
//     releaseYear,

//     batteryLevel() {
//       console.log("Battery level at 100%.")
//     },

//     info () {
//       console.log(`Brand: ${this.brand}`);
//       console.log(`Model: ${this.model}`);
//       console.log(`Year: ${this.releaseYear}`);
//     },
//   }
// }



// let iphone = new makeSmartphone('Apple', 'iPhone 12', 2020);
// let samsung = new makeSmartphone('Samsung', 'Galaxy S21', 2021);

// iphone.info();
// samsung.info();


// function createInstrument(name, type) {
//   return {
//     name,
//     type,

//     play() {
//       console.log(`We are playing a tune on this ${this.name}`);
//     },

//     showType() {
//       console.log(`This ${this.name} is a ${this.type} instrument`);
//     },
//   }
// }


// let violin = createInstrument('violin', 'string');
// violin.play();     // We are playing a tune on this violin
// violin.showType(); // This violin is a string instrument

// let flute = createInstrument('flute', 'wind');
// flute.play();      // We are playing a tune on this flute
// flute.showType();  // This flute is a wind instrument

// let drum = createInstrument('drum', 'percussion');
// drum.play();       // We are playing a tune on this drum
// drum.showType();   // This drum is a percussion instrument


// class Smartphone {
//   constructor(brand, model, releaseYear) {
//     this.brand = brand;
//     this.model = model;
//     this.releaseYear = releaseYear;
//   }

//   batteryLevel() {
//     console.log("Battery level at 100%.")
//   }

//   info() {
//     console.log(`Brand: ${this.brand}`);
//     console.log(`Model: ${this.model}`);
//     console.log(`Year: ${this.releaseYear}`);
//   }
// }

// let iphone = new Smartphone('Apple', 'iPhone 12', 2020);
// let samsung = new Smartphone('Samsung', 'Galaxy S21', 2021);

// iphone.info();
// samsung.info();

// class Vehicle {
//   constructor(color, weight) {
//     this.color = color;
//     this.weight = weight;
//   }

//   accelerate() {
//     console.log('Speeding up!');
//   }

//   decelerate() {
//     console.log('Slowing down');
//   }
//  }

// class Car extends Vehicle {
//   constructor(color, weight, licenseNumber) {
//     super(color, weight);
//     this.licenseNumber = licenseNumber;
//   }

//   honk() {
//     console.log('Beep beep');
//   }
// }

// class Boat extends Vehicle {
//   constructor(color, weight, homePort) {
//     super(color, weight);
//     this.homePort = homePort;
//   }

//   dropAnchor() {
//     console.log('Setting anchor here!');
//   }
// }

// class Plane extends Vehicle {
//   constructor(color, weight, airline) {
//     super(color, weight);
//     this.airline = airline;
//   }

//   takeoff() {
//     console.log('Plan is taking off.');
//   }

//   land() {
//     console.log('Plane is landing now.');
//   }
// }

// let car = new Car('green', 20, 22818);
// let boat = new Boat('green', 20, 'spain');
// let plane = new Car('green', 20, 'southwest');

// // console.log(car);
// // console.log(boat);
// // console.log(plane);


// console.log(car instanceof Vehicle && boat instanceof Vehicle);
// console.log(car instanceof Car);
// console.log(boat instanceof Car === false);

// let track = 'Python'
// switch (track) {
//       case 'JavaScript':
//       case 'Python':
//       case 'Ruby':
//         console.log(`${track} is good`);
//         break;
//       default:
//         throw new Error(`Invalid track: '${track}'`);
// }

// class Person {
//   #name;
//   #age;

//   constructor(name, age) {
//     this.#name = name;
//     this.age = age;
//   }

//   set age(newAge) {
//     if (newAge < 0) {
//       throw new RangeError(`Invalid age: '${newAge}'`);
//     }
    
//     this.#age = newAge;
//   }

//   showAge() {
//     console.log(this.#age);
//   }
// }

// let person = new Person('John', 30);
// person.showAge(); // 30
// person.age = 31;
// person.showAge(); // 31

// try {
//   // This line should raise a RangeError,
//   // but does not.
//   person.age = -5;
//   person.showAge(); // -5
// } catch (e) {
//   // The following line should run, but won't
//   console.log('RangeError: Age must be positive');
// }


// class Book {
//   #title;
//   #author;
//   #year

//   constructor(title, author, year) {
//     this.#title = title;
//     this.#author = author;
//     this.year = year; 
//   }

//   get title() {
//     return this.#title;
//   }

//   get author() {
//     return this.#author;
//   }

//   get year() {
//     return this.#year;
//   }

//   set year(year) {
//     if (year >= 1900) {
//       this.#year = year;
//       console.log('Changing year');
//     } else {
//       throw new RangeError('Invalid year');
//     }
//   }
// }

// let book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
// console.log(book.title);  // The Great Gatsby
// console.log(book.author); // F. Scott Fitzgerald
// console.log(book.year);   // 1925

// book.year = 1932;         // Changing year
// console.log(book.year);   // 1932

// try {
//   book.year = 1825;
// } catch (e) {
//   console.log(e);   // RangeError: Invalid year
// }

// try {
//   let book2 = new Book('A Tale of Two Cities', 'Charles Dickens', 1859);
// } catch (e) {
//   console.log(e);   // RangeError: Invalid year
// }

// class BankAccount {
//   #balance = 0;

//   constructor(balance) {
//     this.#balance = balance;
//   }

//   #checkBalance() {
//     console.log(this.#balance);
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       throw new RangeError('Insufficient funds')
//     } else {
//       this.#balance -= amount;
//     }
//   }
// }

// let account = new BankAccount();
// account.deposit(100);
// account.withdraw(50);
// account.withdraw(100); // RangeError: Insufficient funds

// class Rectangle {
//   #width;
//   #height;

//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   get width() {
//     return this.#width;
//   }

//   get height() {
//     return this.#height;
//   }

//   get area() {
//     return this.width * this.height;
//   }

//   set width(width) {
//     if (typeof width === 'number' && width > 0) {
//       this.#width = width;
//     } else {
//       throw new RangeError('width must be positive');
//     }
//   }

//   set height(height) {
//     if (typeof height === 'number' && height > 0) {
//       this.#height = height;
//     } else {
//       throw new RangeError('height must be positive');
//     }
//   }
// }

// let rect = new Rectangle(10, 5);
// console.log(rect.area); // 50

// rect.width = 20;
// console.log(rect.area); // 100

// rect.height = 12;
// console.log(rect.area); // 240

// try {
//   rect.width = 0;
// } catch (e) {
//   console.log(e); // RangeError: width must be positive
// }

// try {
//   rect.height = -10;
// } catch (e) {
//   console.log(e); // RangeError: height must be positive
// }


// class MathUtils {
//   static add(num1, num2) {
//     return num1 + num2;
//   }

//   static subtract(num1, num2) {
//     return num1 - num2;
//   }

//   static multiply(num1, num2) {
//     return num1 * num2;
//   }

//   static divide(num1, num2) {
//     if (num2 === 0) {
//       throw new RangeError('Division by zero')
//     }
//     return num1 / num2;
//   }
// }

// console.log(MathUtils.add(5, 3));       // 8
// console.log(MathUtils.subtract(10, 4)); // 6
// console.log(MathUtils.multiply(6, 7));  // 42
// console.log(MathUtils.divide(20, 5));   // 4
// console.log(MathUtils.divide(10, 0));   // RangeError: Division by zero


// function createGreeter(name) {
//   return {
//     name,
//     morning: 'Good Morning',
//     afternoon: 'Good Afternoon',
//     evening: 'Good Evening',
//     greet(timeOfDay) {
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${this.morning} ${this.name}`;
//           break;
//         case 'afternoon':
//           msg += `${this.afternoon} ${this.name}`;
//           break;
//         case 'evening':
//           msg += `${this.evening} ${this.name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

// const helloVictor = createGreeter('Victor');
// helloVictor.greet('morning');
// // = Good Morning Victor

// const item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount(percent) {
//     const discount = this.price * percent / 100;
//     const final = this.price - discount;

//     return final;
//   },
// };

// console.log(item.discount(20))   // should return 40
// // 40
// console.log(item.discount(50))   // should return 25
// // 20
// console.log(item.discount(25))   // should return 37.5
// // 15


// function objectsEqual(obj1, obj2) {
//   return Object.keys(obj1).every(key => {
//     return key in obj2 && obj1[key] === obj2[key];
//   })
// }


// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false


function createStudent(name, year) {
  function findCourse(code) {
    return this.courses.findIndex(course => {
        return course.code === code;
    });
  }

  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${year} year student`);
    },

    listCourses() {
      console.log(this.courses);
      return this.courses
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(code, note) {
      let courseIdx = findCourse.call(this, code);

      if (courseIdx > -1) {
        if (this.courses.hasOwnProperty('note')) {
          this.courses[courseIdx].note += '; ' + note;
        } else {
          this.courses[courseIdx].note = note;
        }
      }
    },

    viewNotes() {
      const courses = this.courses.filter(course => course.hasOwnProperty('note'));
      courses.forEach(course => {
        console.log(`${course.name}: ${course.note}`);
      });
    },

    updateNote(code, note) {
      let courseIdx = findCourse.call(this, code);

      if (courseIdx > -1) {
        this.courses[courseIdx].note = note;
      }
    },
  }
}


// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"


function createSchool() {
  return {
    students: [],
    years: ['1st', '2nd', '3rd', '4th', '5th'],

    addStudent(name, year) {
      let student;
      if (this.years.includes(year)) {
        student = createStudent(name, year)
        this.students.push(student);
        return student
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent(student, course) {
      student.addCourse(course);
    },

    addGrade(student, courseCode, grade) {
      const course = student.courses.filter(({code}) => code === courseCode)[0];
      if (course) {
        course.grade = grade;
      }
    },

    getReportCard(student) {
      student.courses.forEach(course => {
        if (course.hasOwnProperty('grade')) {
          console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`${course.name}: In progress`);
        }
      })
    },

    courseReport(courseName) {
      console.log(`=${courseName} Grades=`);
      const courseGrades = [];
      this.students.forEach(student => {
        const course = student.courses.filter(({name}) => name === courseName)[0];
        if (course) {
          courseGrades.push(course.grade);
          console.log(`${student.name}: ${course.grade}`);
        } else {

        }
      });
      console.log('---');
      let total = courseGrades.reduce((sum, grade) => sum + grade)
      console.log(`Course Average: ${total / courseGrades.length}`);
    }
  }
  
}

// Examples of created student objects with grades; methods
// on the objects are not shown here for brevity. The
// following are only showing the properties that aren't
// methods for the three objects

const school = createSchool();

const paul = school.addStudent('Paul', '3rd');
paul.addCourse({ name: 'Math', code: 101, grade: 95, });
paul.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });
paul.addCourse({ name: 'Physics', code: 202, });

const mary = school.addStudent('Mary', '1st');
mary.addCourse({ name: 'Math', code: 101, grade: 91, });

const kim = school.addStudent('Kim', '2nd');
kim.addCourse({ name: 'Math', code: 101, grade: 93, });
kim.addCourse( { name: 'Advanced Math', code: 102, grade: 90, });



school.getReportCard(paul);

school.courseReport('Math');

school.courseReport('Advanced Math');

school.courseReport('Physics');